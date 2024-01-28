const express = require('express');
const { createTicket, getAllTickets, getTicketById, updateTicket, deleteTicket } = require('../services/ticket.service');

const ticketRoute = express.Router();

ticketRoute.post('/ticket', createTicket);
ticketRoute.get('/tickets', getAllTickets);
ticketRoute.get('/tickets/:id', getTicketById);
ticketRoute.put('/tickets/:id', updateTicket);
ticketRoute.delete('/tickets/:id', deleteTicket);

module.exports = ticketRoute;
