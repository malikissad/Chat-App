const express = require("express");
const sequelize = require("./src/configs.js");
const Router = require("./src/routes/Auth.js");
const bcrypt = require("bcrypt");
const db = require("./models/index.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const upload = require("./src/middlewares/multer.js")


const RouterP = require("./src/routes/AddInformation.js")
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
app.use("/Profile", RouterP)

app.post("/upload", upload.single("avatar"), (req, res) => {
  try {
    const { bio, tel } = req.body;
    const avatar = req.file.filename;
    
    return res.json({
      bio,
      tel,
      avatar,
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});



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
