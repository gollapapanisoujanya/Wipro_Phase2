const express = require("express");
var app = express();
const router = require("./routes/routes");
const port = 5000;

const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use("/api", router);
app.listen(port, ()=>
{
    console.log(`Service is ready & listening at port no ${port}`);
} )
