const Bill = require("../models/billing.model");


// CRUD operations
async function createBill(billData) {
  try {
    const bill = await Bill.create(billData);
    return bill;
  } catch (error) {
    throw new Error('Error creating bill:', error);
  }
}

async function getAllBills() {
  try {
    const bills = await Bill.findAll();
    return bills;
  } catch (error) {
    throw new Error('Error getting bills:', error);
  }
}

async function getBillById(billId) {
  try {
    const bill = await Bill.findByPk(billId);
    return bill;
  } catch (error) {
    throw new Error('Error getting bill by ID:', error);
  }
}

async function updateBill(billId, updatedBillData) {
  try {
    const [updatedRowsCount, updatedBills] = await Bill.update(updatedBillData, {
      where: { id: billId },
      returning: true,
    });

    if (updatedRowsCount > 0) {
      return updatedBills[0];
    } else {
      throw new Error('Bill not found');
    }
  } catch (error) {
    throw new Error('Error updating bill:', error);
  }
}

async function deleteBill(billId) {
  try {
    const deletedRowCount = await Bill.destroy({
      where: { id: billId },
    });

    if (deletedRowCount > 0) {
      return true;
    } else {
      throw new Error('Bill not found');
    }
  } catch (error) {
    throw new Error('Error deleting bill:', error);
  }
}

module.exports = {
  createBill,
  getAllBills,
  getBillById,
  updateBill,
  deleteBill,
};