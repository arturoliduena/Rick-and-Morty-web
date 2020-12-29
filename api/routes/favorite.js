const express = require('express');
const router = express.Router();
const axios = require('axios');
const { isAuthenticated } = require('../authController');
const { User, Characters, UserCharacter } = require("../db");

router.get('/', isAuthenticated, async (req, res) => {
  try {
    const user_id = req.user.id;
    const users = await User.findOne({
      where: { id: user_id },
      include: { model: Characters }
    });
    const response = {
      characters: users.characters
    }
    
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.post('/character', isAuthenticated, async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id, type } = req.body;

    const user = await User.findOne({ where: { id: user_id } });
    const [fav, created] = await Characters.findOrCreate({
      where: { character_id: id },
      defaults: { character_id: id }
    });

    if(type == 'add') {
      await fav.addUser(user.id);
    }

    if(type == 'remove') {
      await fav.removeUser(user.id);
    }
    
    const users = await User.findOne({
      where: { id: user_id },
      include: { model: Characters }
    });

    const response = {
      characters: users.characters
    }
    
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json(error)
  }
});


module.exports = router;