const app = require('express')();
const userLib = require('./database/mysql/user.lib');
const PORT = process.env.PORT || 3000;

//  Connect all our routes to our application
app.get('/user/:googleId/:userName', async (req, res) => {
    const googleId = req.params.googleId;
    const userName = req.params.userName;
    let result = {};
    let userDetail = await userLib.getUserDetail({google_id: googleId ,user_name: userName});
    console.log(userDetail)
    if (userDetail) {
      result.user_name = userDetail.user_name;
      result.google_id = userDetail.google_id;
    } else {
      await userLib.createUser({google_id: googleId ,user_name: userName});
      let newUserData = await userLib.getUserDetail({google_id: googleId ,user_name: userName});
      result.user_name = newUserData.user_name;
      result.google_id = newUserData.google_id;
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