const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const port = 4231;
const keys = require("./keys/keys")

//middleware require statements
const currentUser = require("./middlewares/current-user");

//middleware setup
app.set("trust proxy", true);
app.use(express.json());
app.use(cors());
app.use(currentUser)

//Schema require statements
require("./models/user")
require("./models/business")

//Auth  routes require statements
const signInRouter = require("./routes/auth/signin")
const signUpRouter = require("./routes/auth/signup")

//Business routes require statements
const createBusinessRouter = require("./routes/business/create-business")
const createPartRouter = require("./routes/business/create-part")
const showBusinessDetailRouter = require("./routes/business/show-business")
const showBusinessesRouter = require("./routes/business/show-businesses");



//Auth router middleware config
app.use(signInRouter)
app.use(signUpRouter)

//Business router middleware config
app.use(createBusinessRouter)
app.use(createPartRouter)
app.use(showBusinessDetailRouter)
app.use(showBusinessesRouter)

const start = async () => {
  try {
    await mongoose.connect(
        keys.MONGO_URI
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  app.listen(port, () => {
    console.log("server is listening on " + port);
  });
};
start();
