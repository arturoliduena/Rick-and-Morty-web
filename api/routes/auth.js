const express = require('express');
const router = express.Router();
const { User } = require("../db");
const { passport } = require('../authController');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    const _user = {
      id: user.id,
      email: user.email,
      username: user.username
    }

    const data = {
      user: _user,
      authorized: true,
      message: '',
      error: null,
    }
    req.logIn(_user, (error) => {
      if (error) { return res.status(401).json({ ...data, authorized: false, error }).end();; }
      return res.status(200).json(data);;
    });
  } catch (error) {
    const data = {
      user: null,
      authorized: false,
      message: error.errors.map(e => e.message).join(', '),
      error: error,
    }
    return res.status(401).json(data).end();
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    const data = {
      user: user || null,
      authorized: Boolean(!err && user),
      message: info || "",
      error: err,
    }
    if (err || !user) {
      // return 401 error is email or password doesn't exist, or if password does
      // not match the password in our db
      return res.status(401).json(data).end()
    }
    req.logIn(user, (error) => {
      if (error) { return res.status(401).json({ ...data, error }).end();; }
      return res.status(200).json(data);;
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  const data = {
    user: req.user || null,
    authorized: false,
    message: '',
    error: null,
  }
  return res.status(200).json(data);
});

module.exports = router;