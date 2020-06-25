const express = require('express');
const { searchPhoto } = require('../utils/unsplash');

const router = express.Router({ mergeParams: true });

router

//  -- GET ALL PROVIDERS --

  .get('/:phrase', async (req, res, next) => {
    try {
      const { phrase } = req.params;
      const { page, perPage, filters } = req.body;
      const result = await searchPhoto(phrase, page, perPage, filters);
      if (result.total > 0) {
        return res.status(200).json({
          success: true,
          message: 'Photos found',
          body: result,
        });
      }
      return res.status(500).json({
        success: false,
        message: `Any photo found for ${phrase}`,
      });
    } catch (error) {
      console.error(`🔥 An error ocurred: ${err}`);
      next('An error occurred trying to process your request');
    }
  });

module.exports = router;
