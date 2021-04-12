import express from 'express';
import {
  authUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js';
import { protect } from '../Middleware/authMiddleware.js';
///
const router = express.Router();

router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.post('/register', registerUser);

export default router;
