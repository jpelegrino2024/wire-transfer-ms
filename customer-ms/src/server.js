import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('server started');
  console.log('production port:: ', process.env.PORT, ' Real port', PORT);
});
