import exress from 'express';
import transactionRouter from './src/router/transactionRouter.js';

const app = exress();
app.use(exress.json());

app.use('/api/transactions', transactionRouter);

export default app;
