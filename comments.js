// Create web server
// Use express to create the web server
const express = require('express');
// Create router object
const router = express.Router();
// Import comment model
const Comment = require('../models/comment');
// Import comment controller
const commentController = require('../controllers/commentController');
// Import authentication middleware
const auth = require('../middleware/auth');

// Route for getting all comments on a post
router.get('/api/post/:id/comments', commentController.getAllCommentsOnPost);
// Route for getting all comments by a user
router.get('/api/user/:id/comments', commentController.getAllCommentsByUser);
// Route for getting a comment by id
router.get('/api/comments/:id', commentController.getCommentById);
// Route for creating a comment
router.post('/api/post/:id/comments', auth, commentController.createComment);
// Route for updating a comment
router.put('/api/comments/:id', auth, commentController.updateComment);
// Route for deleting a comment
router.delete('/api/comments/:id', auth, commentController.deleteComment);

// Export router
module.exports = router;
