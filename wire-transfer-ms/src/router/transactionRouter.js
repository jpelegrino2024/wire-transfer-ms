import express from 'express';
import { sendPayment } from '../controller/transactionController.js';

const router = express.Router();

router.route('/').post(sendPayment);

export default router;
