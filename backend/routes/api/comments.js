/**
 * Express router module for comment-related API endpoints.
 *
 * @module routes/api/comments
 *
 * Overview:
 * This module exports an Express Router that provides CRUD operations for the
 * Comment resource stored via Mongoose (mongoose.model('Comment')).
 * All handlers are asynchronous and should return appropriate HTTP status codes
 * and JSON payloads. Handlers should catch and respond to errors (500) and
 * handle not-found cases (404) when applicable.
 *
 * Endpoints:
 *
 * GET /api/comments
 * - Description: Retrieve all comments.
 * - Query params: optional pagination/filtering fields (implementation-specific).
 * - Success: 200 - Array<Comment>
 * - Error: 500 - { error: string }
 *
 * GET /api/comments/:id
 * - Description: Retrieve a single comment by MongoDB ObjectId.
 * - URL params:
 *   - {string} id - Comment ObjectId
 * - Success: 200 - Comment
 * - Errors:
 *   - 404 - { error: "Comment not found" } when no document matches the id
 *   - 400 - { error: string } if id is invalid (optional, if validated)
 *   - 500 - { error: string } on server/database error
 *
 * POST /api/comments
 * - Description: Create a new comment.
 * - Body: JSON representing the Comment fields (schema-dependent).
 * - Success: 201 - Created Comment
 * - Errors:
 *   - 400 - { error: string } for validation/missing fields (if validated)
 *   - 500 - { error: string } on server/database error
 *
 * PUT /api/comments/:id
 * - Description: Update an existing comment by id.
 * - URL params:
 *   - {string} id - Comment ObjectId
 * - Body: Partial or full Comment object with updated fields.
 * - Success: 200 - Updated Comment
 * - Errors:
 *   - 404 - { error: "Comment not found" } when no document matches the id
 *   - 400 - { error: string } for validation errors or invalid id (optional)
 *   - 500 - { error: string } on server/database error
 *
 * DELETE /api/comments/:id
 * - Description: Delete a comment by id.
 * - URL params:
 *   - {string} id - Comment ObjectId
 * - Success: 200 - { message: string } or deleted Comment representation
 * - Errors:
 *   - 404 - { error: "Comment not found" } when no document matches the id
 *   - 400 - { error: string } for invalid id (optional)
 *   - 500 - { error: string } on server/database error
 *
 * Implementation notes:
 * - Uses mongoose.model('Comment') as the Comment model.
 * - Handlers should validate req.params.id as a valid ObjectId (optional) to
 *   avoid CastError responses from mongoose.
 * - Prefer returning consistent JSON shapes for success and error responses.
 *
 * @requires express.Router
 * @requires mongoose.model('Comment')
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, please write the following API endpoints for comments:
// 1. GET /api/comments - Get all comments
// 2. GET /api/comments/:id - Get a comment by ID
// 3. POST /api/comments - Create a new comment
// 4. PUT /api/comments/:id - Update a comment by ID
// 5. DELETE /api/comments/:id - Delete a comment by ID

start typing `router.get(`/api/comments`, (req, res) => {` to get code completion suggestions from GitHub Copilot

// 1. GET /api/comments - Get all comments
router.get("/api/comments", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
// 2. GET /api/comments/:id - Get a comment by ID
router.get("/api/comments/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch comment" });
    }
});