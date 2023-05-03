const express = require('express');
const { check } = require('express-validator');

const postControllers = require('../controllers/post-controllers');

const router = express.Router();

router.get('/posts', async (req, res) => {
  try {
    const category = req.query.category
    const response = await postControllers.getPosts(category)
    res.send(response)
  } catch (err) {
    console.log(err)
    throw new Error(err)
  }
})


router.post(
  '/createPost',
  [
    check('title')
      .not()
      .isEmpty(),
    check('category').not()
    .isEmpty(),
    check('color')
      .not()
      .isEmpty()
  ],
  postControllers.createPost
);

router.patch(
  '/updatePost/:pid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('color').not()
    .isEmpty(),
    check('category').not()
    .isEmpty()
  ],
  postControllers.updatePost
);

router.delete('/:pid', postControllers.deletePost);

module.exports = router;
