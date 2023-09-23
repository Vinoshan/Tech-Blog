const express = require('express');
const router = express.Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post (POST /api/posts)
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new post using data from the request body and the authenticated user's ID
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.user_id,
    });

    // Respond with a JSON representation of the newly created post
    res.status(200).json(newPost);
  } catch (err) {
    // Handle any errors and send a 400 Bad Request response with the error information
    res.status(400).json(err);
  }
});

// Delete a post by ID (DELETE /api/posts/:id)
router.delete("/:id", async (req, res) => {
  try {
    // Attempt to delete the post with the specified ID
    const deletePostData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Respond with a success status and information about the deleted post
    return res.status(200).json(deletePostData);
  } catch (err) {
    // Handle any errors and send a 500 Internal Server Error response with the error information
    console.log(err);
    return res.status(500).json(err);
  }
});

// Update a post by ID (PUT /api/posts/:id)
router.put("/:id", withAuth, async (req, res) => {
  try {
    // Attempt to update the post with the specified ID using data from the request body
    const updateResult = await Post.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }
    );

    // Respond with a success status and information about the updated post
    return res.status(200).json(updateResult);
  } catch (err) {
    // Handle any errors and send a 500 Internal Server Error response with the error information
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
