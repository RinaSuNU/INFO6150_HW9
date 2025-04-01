const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 


const user1Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9]+$/, 
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

user1Schema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// 密码验证方法
user1Schema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model('user1', user1Schema);
