const Event = require("../models/event.model");

// Create
async function createEvent(eventData) {
    try {
      const Event = await Event.create(eventData);
      return Event;
    } catch (error) {
      throw new Error('Error creating Event:', error);
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
  
  // Read (Get Event by ID)
  async function getEventById(eventId) {
    try {
      const Event = await Event.findByPk(eventId);
      return Event;
    } catch (error) {
      throw new Error('Error getting Event by ID:', error);
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
      throw new Error('Error updating Event:', error);
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
      throw new Error('Error deleting Event:', error);
    }
  }
  
  module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
  };