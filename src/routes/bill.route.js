const express = require('express');
const { createBill, getAllBills, getBillById, updateBill, deleteBill } = require('../services/billing.service');

const billRoute = express.Router();

billRoute.post('/bill', createBill);
billRoute.get('/bills', getAllBills);
billRoute.get('/bills/:id', getBillById);
billRoute.put('/bills/:id', updateBill);
billRoute.delete('/bills/:id', deleteBill);

module.exports = billRoute;
