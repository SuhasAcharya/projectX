const app = require('express')();
const userLib = require('./database/mysql/user.lib');
const PORT = process.env.PORT || 3000;

//  Connect all our routes to our application
app.get('/user', async (req, res) => {
    let result = await userLib.createUser({user_name: 'alex'});
    res.send('success');
});

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});