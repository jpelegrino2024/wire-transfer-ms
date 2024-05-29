import axios from 'axios';

export const sendPayment = async (req, res) => {
  req.body.transactionDate = new Date();

  try {
    const response = await axios.post(
      'http://localhost:8093/transactions',
      req.body
    );
    const data = await response.data;

    res.status(200).json({
      status: 'success',
      data
    });
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message
    });
  }
};
