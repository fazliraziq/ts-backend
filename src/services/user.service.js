const User = require("../models/user.model");

// Create
async function createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw new Error('Error creating user:', error);
    }
  }
  
  // Read (Get all users)
  async function getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error('Error getting users:', error);
    }
  }
  
  // Read (Get user by ID)
  async function getUserById(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      throw new Error('Error getting user by ID:', error);
    }
  }
  
  // Update
  async function updateUser(userId, updatedUserData) {
    try {
      const [updatedRowsCount, updatedUsers] = await User.update(updatedUserData, {
        where: { id: userId },
        returning: true,
      });
  
      if (updatedRowsCount > 0) {
        return updatedUsers[0];
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error('Error updating user:', error);
    }
  }
  
  // Delete
  async function deleteUser(userId) {
    try {
      const deletedRowCount = await User.destroy({
        where: { id: userId },
      });
  
      if (deletedRowCount > 0) {
        return true;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      throw new Error('Error deleting user:', error);
    }
  }
  
  module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  }; 