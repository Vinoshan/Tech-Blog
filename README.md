# Tech Blog CMS

## Description
This is a CMS-style blog site built for developers who want to publish articles, blog posts, and share their thoughts and opinions on various tech topics.

## Table of Contents
- [Tech Blog CMS](#tech-blog-cms)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Installation
To run this application locally or deploy it to your server, follow these steps:

1. Clone the repository to your local machine

2. Navigate to the project's root directory

3. Install the required dependencies using npm

4. Create a `.env` file in the root directory and add the following configuration (replace the values with your own):
  
   ```
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   ```

5. Run the application:

6. Access the application in your web browser at `http://localhost:3001`.

## Usage
- Upon visiting the site, you'll be presented with the homepage containing existing blog posts (if any), navigation links, and the option to log in or sign up.
- Users can create an account by clicking "Sign Up," providing a username and password.
- After signing up or logging in, users can access their dashboard to manage their blog posts.
- Users can create, edit, or delete blog posts from their dashboard.
- Clicking on the homepage link displays existing blog posts with their titles, content, authors, and creation dates.
- Users can click on a blog post to view its details and leave comments.
- Comments can be submitted and will be displayed with the commenter's username and creation date.
- Users can log out from the navigation menu.

## Features
- User authentication (sign up, log in, log out).
- Create, edit, and delete blog posts.
- Leave comments on blog posts.
- User-friendly and intuitive interface.
- Session management with automatic logout after a period of inactivity.

## Screenshot

## Technologies Used
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL2 (Database)
- Express Handlebars (View Engine)
- Express Session (Authentication)
- Bcrypt (Password Hashing)
- Dotenv (Environment Variables)
- HTML/CSS

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, please contact:
- Vinoshan Kugendran (Vino)
- Email: vinoshan@outlook.com
- GitHub: [@Vinoshan](https://github.com/Vinoshan)