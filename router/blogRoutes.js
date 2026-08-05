import express from 'express';
import { createBlog, getBlogs, getBlogsByAuthor, removeBlogByAuthor } from '../controller/blogController.js';

const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.get('/author/:id', getBlogsByAuthor);
router.delete('/author/:id', removeBlogByAuthor);
export default router;
