import express from 'express';
import {
  createCustomer,
  getCustomer,
  getAllCustomer
} from '../controller/customerController.js';

const router = express.Router();

router.route('/').get(getAllCustomer).post(createCustomer);
router.route('/:id').get(getCustomer);

export default router;
