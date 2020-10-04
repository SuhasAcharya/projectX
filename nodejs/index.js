const app = require('express')();
var cors = require('cors');
const userLib = require('./database/mysql/user.lib');
const fishLib = require('./database/mysql/fish.lib');
const PORT = process.env.PORT || 3001;

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

app.get('/masterFishList', async (req, res) => {
  let result = await fishLib.getMasterFishList({status: 1});
  console.log(result)
  res.send(result);
});


app.get('/userFishCartAdd/:masterFishId/:userId/:price/:quantity', async (req, res) => {
  const masterFishId = req.params.masterFishId;
  const userId = req.params.userId;
  const price = req.params.price;
  const quantity = req.params.quantity;

  let result = await fishLib.createUserFish({master_fish_id: masterFishId, user_id: userId, price: price, quantity: quantity, status: 6});
  console.log(result)
  res.send(result);
});

app.get('/userFishTrasactionAdd/:masterFishId/:userId/:price/:quantity', async (req, res) => {
  const masterFishId = req.params.masterFishId;
  const userId = req.params.userId;
  const price = req.params.price;
  const quantity = req.params.quantity;
  let result = await fishLib.createUserFishTransaction({master_fish_id: masterFishId, user_id: userId, price: price, quantity: quantity});
  console.log(result)
  res.send(result);
});

app.get('/userFishCartDetail/:userId', async (req, res) => {
  const userId = req.params.userId;

  let result = await fishLib.getUserFishList({user_id: userId, status: 6});
  console.log(result)
  res.send(result);
});

app.get('/userFishTransactionDetail/:userId', async (req, res) => {
  const userId = req.params.userId;

  let result = await fishLib.getUserFishTransactionList({user_id: userId});
  console.log(result)
  res.send(result);
});



// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});