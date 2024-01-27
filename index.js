const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./src/routes/auth.route')

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth",authRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
