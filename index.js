const app = require('express')();
var cors = require('cors');
const userLib = require('./database/mysql/user.lib');
const fishLib = require('./database/mysql/fish.lib');
const PORT = process.env.PORT || 3000;

app.use(cors());

//  Connect all our routes to our application
app.get('/user/:googleId/:userName', async (req, res) => {
  console.log('reqparams: -',req.params)
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

app.get('/masterFishList/:masterFish', async (req, res) => {
  data = req.params.masterFish;
  data = JSON.parse(data);
  let result = await fishLib.createMasterFish({fish_name: data.fish_name,price: data.price});
  res.send('{}');
});

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});