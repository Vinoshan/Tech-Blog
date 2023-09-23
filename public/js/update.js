  // Function to handle edit form submission
  const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-post-title').value.trim();
    const body = document.querySelector('#edit-post-desc').value.trim();

    if (title && body) {

      const id = event.currentTarget.getAttribute('data-id');
      console.log(`Edit button clicked for post ID: ${id}`);


      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }

    }
  };

  // Set up event listener for edit form submission
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);