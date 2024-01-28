const Ticket = require("../models/ticket.model");

// Create
async function createTicket(ticketData) {
    try {
      const ticket = await Ticket.create(ticketData);
      return ticket;
    } catch (error) {
      throw new Error('Error creating ticket:', error);
    }
  }
  
  // Read (Get all tickets)
  async function getAllTickets() {
    try {
      const tickets = await Ticket.findAll();
      return tickets;
    } catch (error) {
      throw new Error('Error getting tickets:', error);
    }
  }
  
  // Read (Get ticket by ID)
  async function getTicketById(ticketId) {
    try {
      const ticket = await Ticket.findByPk(ticketId);
      return ticket;
    } catch (error) {
      throw new Error('Error getting ticket by ID:', error);
    }
  }
  
  // Update
  async function updateTicket(ticketId, updatedTicketData) {
    try {
      const [updatedRowsCount, updatedTickets] = await Ticket.update(updatedTicketData, {
        where: { id: ticketId },
        returning: true,
      });
  
      if (updatedRowsCount > 0) {
        return updatedTickets[0];
      } else {
        throw new Error('Ticket not found');
      }
    } catch (error) {
      throw new Error('Error updating ticket:', error);
    }
  }
  
  // Delete
  async function deleteTicket(ticketId) {
    try {
      const deletedRowCount = await Ticket.destroy({
        where: { id: ticketId },
      });
  
      if (deletedRowCount > 0) {
        return true;
      } else {
        throw new Error('Ticket not found');
      }
    } catch (error) {
      throw new Error('Error deleting ticket:', error);
    }
  }
  
  module.exports = {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket,
  };