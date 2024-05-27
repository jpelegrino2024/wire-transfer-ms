import express from 'express';
import customerRouter from './router/customer-router.js';

const app = express();

app.use(express.json());
app.use('/api/customers', customerRouter);

export default app;
