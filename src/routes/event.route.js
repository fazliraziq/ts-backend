const express = require('express');
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../services/event.service');

const eventRoute = express.Router();

eventRoute.post('/event', createEvent);
eventRoute.get('/events', getAllEvents);
eventRoute.get('/events/:id', getEventById);
eventRoute.put('/events/:id', updateEvent);
eventRoute.delete('/events/:id', deleteEvent);

module.exports = eventRoute;
