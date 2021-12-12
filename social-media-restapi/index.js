const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require('./routes/status');
dotenv.config()
const app = express();
const port = process.env.PORT

mongoose.connect(process.env.MONGO_URL)
    .then(result => {
        console.log("Connected successfully!")
    })
    .catch(error => {
        console.log(error.message)
    })

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(port, () => {
    console.log("Hello!")
})