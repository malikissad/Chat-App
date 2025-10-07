const express = require("express");
const sequelize = require("./src/configs.js");
const Router = require("./src/routes/Auth.js");
const bcrypt = require("bcrypt");
const db = require("./models/index.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/auth", Router);

app.get("/add", async (req, res) => {
  try {
   
    const user = await db.Users.findByPk(13)
    const conv = await db.Conversations.findByPk(1) 

    await user.addConversation(conv)
    // return res.json(user)
    return res.json({message : "ajouter avec succée"})
  } catch (err) {
    return res.json({erreur : err.message});
  }
});

app.listen(port);
