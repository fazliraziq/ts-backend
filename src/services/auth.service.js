const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const CONSTANTS = require('../helper/constant.helper')

async function registerUser(req, res) {
    try {
          const { username, name , password, email , contact } = req.body;    
          await bcrypt.hash(password, parseInt(process.env.SALT_ROUND) , async (err, hash) => {
              if (err) {
                console.log('server error :', err.message);
                res.status(500).json({ error: CONSTANTS.SERVER_ERROR });
              } else {
                try{
                  const user = await User.create({
                    username,
                    name,
                    password: hash,
                    email,
                    contact
                    });
                    res.json({ message: CONSTANTS.USER_REGISTRATION_SUCCESS, user });
                }catch(error){
                  res.status(409).json({ error: CONSTANTS.USER_EXISTS });
                }
              }
          });
    } catch (error) {
      console.log('server error :', error.message);
      res.status(500).json({ error: CONSTANTS.SERVER_ERROR });
    }
}

async function loginUser(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: CONSTANTS.INVALID_USER_PASSWORD });
      }
  
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });
  
      res.json({ message: CONSTANTS.LOGIN_SUCCESS, token });
    } catch (error) {
      console.log("Server Error : ", error.message)
      res.status(500).json({ error: CONSTANTS.SERVER_ERROR });
    }
}

module.exports = {
  loginUser,
  registerUser
}