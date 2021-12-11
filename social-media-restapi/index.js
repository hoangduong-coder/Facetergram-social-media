const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require('./routes/status');

const app = express();
const port = 8800;

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("Connected successfully!")
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(port, () => {
    console.log("Hello!")
})