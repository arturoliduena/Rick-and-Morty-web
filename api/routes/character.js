const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const { page } = req.query;
    const response = await axios.get('https://rickandmortyapi.com/api/character/', {
      params: {
        page
      }
    });
    return res.status(200).json(response.data)
  } catch (error) {
    return res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    return res.status(200).json(response.data)
  } catch (error) {
    return res.status(500).json(error)
  }
});

module.exports = router;