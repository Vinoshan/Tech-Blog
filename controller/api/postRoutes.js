const express = require('express');
const router = express.Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    // Use 201 status for resource creation
    res.status(201).json(newPost);
  } catch (err) {

    // Keep error logging for debugging
    console.error(err);
    res.status(400).json(err);
  }
});

// Delete a post by ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePostData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Check if no rows were deleted
    if (deletePostData === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a post by ID
router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateResult = await Post.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // Check if no rows were updated
    if (updateResult[0] === 0) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
