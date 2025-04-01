const User = require('../model/User');
const bcrypt = require('bcrypt');
const multer = require('multer');


exports.createUser = async(req, res) => {
    try {
      const newUser= new User(req.body);
      await newUser.save();
      res.status(201).json(newUser);
    }catch(error){
      res.status(500).json({error: "failed to create user", details: error.message});
    }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { username: 1, password: 1 }); 
    res.json( users ); 
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users." }); 
  }
};