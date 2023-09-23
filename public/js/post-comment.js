// Extract the postId from the current URL's pathname
const postId = window.location.pathname.split("/")[2];

// Define a function to handle creating a new comment
const newCommentHandler = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the comment text from an element with the ID 'comment-desc' and trim whitespace
  const body = document.querySelector('#comment-desc').value.trim();

  if (body) {
    // Send a POST request to the '/api/comments' endpoint with the comment's body and postId
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, postId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // If the response is successful, reload the page to display the new comment
      document.location.reload();
    } else {
      // If the response is not successful, show an alert indicating comment creation failure
      alert('Failed to create comment');
    }
  }
};

// Add an event listener to the form with class 'new-comment-form' for form submissions
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
