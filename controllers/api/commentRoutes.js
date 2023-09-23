const router = require('express').Router();
const { Comment } = require('../../models'); // Import the Comment model
const withAuth = require('../../utils/auth'); // Import authentication middleware

// Route for creating comments (POST /api/comments)
router.post('/', withAuth, async (req, res) => {
  try {
    // Create a new comment using data from the request body and the authenticated user's ID
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });

    // Respond with a JSON representation of the newly created comment
    res.status(200).json(newComment);
  } catch (err) {
    // Handle any errors and send a 400 Bad Request response with the error information
    console.error(err);
    res.status(400).json(err);
  }
});

// Route for deleting a selected comment (DELETE /api/comments/:id)
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // Attempt to delete the comment with the specified ID
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    // If no comment was found with the specified ID, send a 404 Not Found response
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this ID!' });
      return;
    }

    // Respond with a success status and information about the deleted comment
    res.status(200).json(commentData);
  } catch (err) {
    // Handle any errors and send a 500 Internal Server Error response with the error information
    res.status(500).json(err);
  }
});

module.exports = router; // Export the router for use in your application