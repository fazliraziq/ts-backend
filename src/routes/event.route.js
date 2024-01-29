const express = require('express');
const authenticateJWT = require('../middleware/jwt.middleware');
const { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } = require('../services/event.service');

const eventRoute = express.Router();

eventRoute.post('/event',authenticateJWT, createEvent);
eventRoute.get('/events', getAllEvents); //Public Endpoint
eventRoute.get('/events/:id',authenticateJWT, getEventById);
eventRoute.put('/events/:id',authenticateJWT, updateEvent);
eventRoute.delete('/events/:id',authenticateJWT, deleteEvent);

module.exports = eventRoute;
