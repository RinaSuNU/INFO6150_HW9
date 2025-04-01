const Company = require('../model/Company.js');
const mongoose = require('mongoose');

exports.getCompanies = async (req, res,next) => {
    try {
        if (mongoose.connection.readyState === 1) { 
            const companies = await Company.find(); 
            res.json(companies); 
        } else {
            console.error('MongoDB is not connected');
            res.status(500).json({ error: 'Database connection is not established.' });
            next(error)
        }
    } catch (error) {
        console.error('Error in getCompanies:', error.message, error.stack);
        res.status(500).json({ error: 'Failed to retrieve companies.' }); 
        next(error)
    }
};