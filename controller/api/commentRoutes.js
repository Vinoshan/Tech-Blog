const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const createdComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });

    res.status(200).json(createdComment);
  } catch (err) {
    console.error(err); // Keep error logging for debugging

    res.status(400).json(err);
  }
});

module.exports = router;
