const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide company name'],
    trim: true
  },
  imageUrl: {
    type: String,
  },

});


module.exports = mongoose.model('Company', companySchema);
