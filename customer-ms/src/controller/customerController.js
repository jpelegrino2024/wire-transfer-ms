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
      customer: newCustomer
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
      customer: foundCustomer
    });
  } catch (err) {
    errorResponse(res, err);
  }
};

export const getAllCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();

    res.status(200).json({
      status: 'success',
      customers
    });
  } catch (err) {
    errorResponse(res, err);
  }
};
