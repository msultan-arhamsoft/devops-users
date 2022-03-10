const express = require('express');
const controller = require('../../controllers/users.controller');
const router = express.Router();


router.post('/', controller.create);
router.route('/')
  .get( controller.get);
router.route('/:id')
  .get( controller.getUser);

module.exports = router;
