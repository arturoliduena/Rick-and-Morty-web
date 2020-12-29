const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../authController');

/* GET users listing. */
router.get('/me', isAuthenticated, (req, res) =>{
  const { id, username, email } = req.user;
  const data = {
    user: {
      id,
      username,
      email,
    },
    authorized: true,
    message: "",
    error: null,
  }
  return res.status(200).json(data);
});

module.exports = router;
