const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoute = require('./src/routes/auth.route');
const eventRoute = require('./src/routes/event.route');
const userRoute = require('./src/routes/user.route');
const ticketRoute = require('./src/routes/ticket.route');
const billRoute = require('./src/routes/bill.route');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth",authRoute);
app.use("/e",eventRoute);
app.use("/u",userRoute);
app.use("/t",ticketRoute);
app.use("/b",billRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
