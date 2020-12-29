const express = require('express');
const router = express.Router();
const { User } = require("../db");
const { isAuthenticated } = require('../authController');
const { generateAccessToken } = require('./auth');

/* GET users listing. */
router.get('/me', isAuthenticated, (req, res) =>{
  const user = {
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
  }
  const data = {
    user,
    authorized: true,
    message: "",
    error: null,
  }
  return res.json(data);
});

router.post("/signin", async (req, res) => {
  // Get credentials from JSON body
  const { username, password, email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    const compare = user && user.compare(password)
    if (!user || !password || !compare) {
      // return 401 error is email or password doesn't exist, or if password does
      // not match the password in our db
      return res.status(401).send('Username or password incorrect').end()
    }
    const accessToken = generateAccessToken({ username: user.username, id: user.id });
    res.json({
      accessToken
    });
  } catch (error) {
    return res.status(500).send(error)
  }
  
});

module.exports = router;
