const express = require('express');
const cors = require('cors');
const app = express(); // Create an instance of the express app

// Enable CORS
app.use(cors());

const loginRouter = require('./routes/login.router');
const registerRouter = require('./routes/register.router');

app.use(express.json());
require('./database/config');

app.use('/hooks/login', loginRouter);
app.use('/hooks/register', registerRouter);

const PORT = 6006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
