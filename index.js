const app = require('express')();
const userLib = require('./database/mysql/user.lib');
const PORT = process.env.PORT || 3000;

//  Connect all our routes to our application
app.get('/user/:googleId/:userName', async (req, res) => {
    const googleId = req.params.googleId.toString();
    const userName = req.params.userName.toString();
    let result = {};
    let userDetail = await userLib.getUserDetails({google_id: googleId});
    console.log(userDetail)
    if (userDetail) {
      result.user_name = userDetail.user_name;
      result.google_id = userDetail.google_id;
    } else {
      let data = await userLib.createUser({google_id: googleId ,user_name: userName});
      console.log(data)
      result.user_name = data.user_name;
      result.google_id = data.google_id;
    }
    res.send(result);
});

app.get('/masterFishList', async (req, res) => {
  let result = await userLib.createUser({user_name: 'alex'});
  res.send('success');
});

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});