const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

const loginRouter = require('./routes/login.router'); // login
const registerRouter = require('./routes/register.router'); // register
const userprofileinfoRouter = require('./routes/userabout.router'); // add profile
const getuserprofiledata=require('./routes/getprofiledatauser.router') // get profile data of users
const addpostRouter = require('./routes/addpost.router'); //add post
const getuserpost=require('./routes/getpost.router') //get posts


app.use(express.json());
require('./database/config');

app.use('/hooks/login', loginRouter);  // for the login user
app.use('/hooks/register', registerRouter);   // for register user
app.use('/hooks/addprofiledata', userprofileinfoRouter);  // add profile of the user
app.use('/hooks/getuserprofile',getuserprofiledata)  // get user profile data
app.use('/hooks/addpost', addpostRouter); // add post by the users
app.use('/hooks/getpost',getuserpost)  // get all posts of user

const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
