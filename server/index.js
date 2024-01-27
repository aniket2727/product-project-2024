const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

const loginRouter = require('./routes/login.router');
const registerRouter = require('./routes/register.router');
const userprofileinfoRouter = require('./routes/userabout.router');
const addpostRouter = require('./routes/addpost.router'); 

app.use(express.json());
require('./database/config');

app.use('/hooks/login', loginRouter);
app.use('/hooks/register', registerRouter);
app.use('/hooks/addprofiledata', userprofileinfoRouter);
app.use('/hooks/addpost', addpostRouter); // Corrected route

const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
