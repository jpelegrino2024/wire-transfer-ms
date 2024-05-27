import Customer from '../model/customer-model.js';

const errorResponse = (res, err) => {
  res.status(500).json({
    status: 'Fail',
    data: err.message
  });
};

export const createCustomer = async (req, res, next) => {
  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newCustomer
    });
  } catch (err) {
    errorResponse(res, err);
  }
};

export const getCustomer = async (req, res, next) => {
  try {
    const foundCustomer = await Customer.findByPk(req.params.id);

    res.status(200).json({
      status: 'success',
      data: foundCustomer
    });
  } catch (err) {
    errorResponse(res, err);
  }
};
