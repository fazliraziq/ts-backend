const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

async function registerUser(req, res) {
    try {
      console.log('register function called !!')
          const { username, name , password, email , contact } = req.body;    
          await bcrypt.hash(password, 10, async (err, hash) => {
              if (err) {
              console.error('Error hashing password:', err);
              } else {
              const user = await User.create({
                  username,
                  name,
                  password: hash,
                  email,
                  contact
                  });
                  res.json({ message: 'User registered successfully', user });
              }
          });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function loginUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
  
      res.json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
  loginUser,
  registerUser
}