import express from 'express';
import {
  createCustomer,
  getCustomer
} from '../controller/customerController.js';

const router = express.Router();

router.route('/').post(createCustomer);
router.route('/:id').get(getCustomer);

export default router;
