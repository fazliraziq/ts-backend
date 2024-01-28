const Event = require("../models/event.model");

// Create
async function createEvent(eventData) {
    try {
      const event = await Event.create(eventData);
      return event;
    } catch (error) {
      throw new Error('Error creating event:', error);
    }
  }
  
  // Read (Get all events)
  async function getAllEvents() {
    try {
      const events = await Event.findAll();
      return events;
    } catch (error) {
      throw new Error('Error getting events:', error);
    }
  }
  
  // Read (Get event by ID)
  async function getEventById(eventId) {
    try {
      const event = await Event.findByPk(eventId);
      return event;
    } catch (error) {
      throw new Error('Error getting event by ID:', error);
    }
  }
  
  // Update
  async function updateEvent(eventId, updatedEventData) {
    try {
      const [updatedRowsCount, updatedEvents] = await Event.update(updatedEventData, {
        where: { id: eventId },
        returning: true,
      });
  
      if (updatedRowsCount > 0) {
        return updatedEvents[0];
      } else {
        throw new Error('Event not found');
      }
    } catch (error) {
      throw new Error('Error updating event:', error);
    }
  }
  
  // Delete
  async function deleteEvent(eventId) {
    try {
      const deletedRowCount = await Event.destroy({
        where: { id: eventId },
      });
  
      if (deletedRowCount > 0) {
        return true;
      } else {
        throw new Error('Event not found');
      }
    } catch (error) {
      throw new Error('Error deleting event:', error);
    }
  }
  
  module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
  };