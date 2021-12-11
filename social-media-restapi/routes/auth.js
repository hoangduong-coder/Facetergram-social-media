const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register user
router.post('/register', async (req, res) => {
  try {
    //salt password: hash the password into a random string
    const salt = await bcrypt.genSalt(10);
    const encrpytPw = await bcrypt.hash(req.body.password, salt);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: encrpytPw,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async(req, res) => {
    try {
        //findOne: a method of searching query in MongoDB
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("No user data!");

        const checkPw = await bcrypt.compare(req.body.password, user.password);
        !checkPw && res.status(404).json("Check password again!");

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
