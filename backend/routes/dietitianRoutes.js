import express from 'express';
import {
  getDietitians,
  getDietitianById,
  createDietitian,
  updateDietitian,
  approveDietitian,
  addClient,
  removeClient
} from '../controllers/dietitianController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public routes (no auth required for viewing)
router.get('/', getDietitians);
router.get('/:id', getDietitianById);

// Protected routes
router.use(auth);

// Create dietitian profile
router.post('/', createDietitian);

// Update dietitian profile
router.put('/', updateDietitian);

// Admin only routes
router.put('/:id/approve', approveDietitian);

// Client management
router.post('/clients', addClient);
router.delete('/clients/:clientId', removeClient);

export default router;