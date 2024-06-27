import express from 'express';
const router = express.Router();
import * as postController from '../controllers/postController.js';

router.get('/', postController.getAllPosts);
router.post('/', postController.create);
router.get('/:id', postController.getById);
router.get('/:owner', postController.getCarsByOwner);
router.put('/:id/:carData', postController.updatePost); 
router.delete('/:id', postController.deletePost); 

export default router;

