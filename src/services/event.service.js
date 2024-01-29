const Event = require("../models/event.model");

// Create
async function createEvent(req, res) {
  try {
    const data = {...req.body , UserId: req.user.userId};
    const event = await Event.create(data);
    return res.status(201).json({ event });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

  async function getAllEvents(req, res) {
    try {
      console.log('API Hit');
      const events = await Event.findAll();
      return res.status(200).json({ events });
    } catch (error) {
      console.log('error ',error.message)
    }
  }
  
  // Read (Get Event by ID)
  async function getEventById(req, res) {
    try {
      console.log(JSON.stringify(req.params))
      const eventId = req.params.id; 
      const event = await Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    return res.status(200).json({event});
    } catch (error) {
      return res.status(500).json({ error: 'Server Error' });
    }
  }
  
  // Update
  async function updateEvent(req, res) {
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