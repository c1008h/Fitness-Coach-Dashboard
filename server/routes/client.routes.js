import express from 'express'

import { getAllPost, getPostDetail, createPost, updatePost, deletePost } from '../controllers/admin.controller.js'

const router = express.Router();

router.route('/').get(getAllPost)
router.route('/:id').get(getPostDetail)

router.route('/').post(createPost)
router.route('/:id').patch(updatePost)
router.route('/:id').delete(deletePost)

export default router;