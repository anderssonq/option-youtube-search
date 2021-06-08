const express = require('express');
const router = express.Router();
// Controller
const YoutubeController = require('../controllers/youtube.controller');

router.get('/', YoutubeController.searchVideos);

module.exports = router