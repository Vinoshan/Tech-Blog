const withAuth = (req, res, next) => {
  // Check if the user is not logged in
  if (!req.session.logged_in) {
    // Redirect to the login route if not logged in
    return res.redirect('/login');
  }
  // Continue to the next middleware or route handler if logged in
  next();
};

module.exports = withAuth;
