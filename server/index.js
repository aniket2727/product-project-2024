








// index.js
const express = require('express');
const app = express();
const loginRouter = require('./routes/login.router');
const registerRouter = require('./routes/register.router');

app.use(express.json());
require('./database/config');

app.use('/hooks/login', loginRouter); // Update the path if needed
app.use('/hooks/register', registerRouter); // Update the path if needed

const PORT = 6006;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
