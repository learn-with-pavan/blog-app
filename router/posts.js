import express from 'express'
import { createPost, deletePostById, getPostById, getPosts } from '../controller/postController.js';
const router = express.Router();

// Get all posts
router.get('/', getPosts)

// Get Single Post
router.get('/:id', getPostById)

// Create Post
router.post('/', createPost);

// Delete post by Id
router.delete('/:id', deletePostById)

export default router;