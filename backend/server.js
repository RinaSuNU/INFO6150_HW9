const express = require('express');
const app = express()
const port = 8000
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose');

const seedDatabase = require('./db/seed');


// connect to mongodb
const DB_URI = 'mongodb://127.0.0.1:27017/userdb?retryWrites=true&w=majority';

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,  
  minPoolSize: 2,   
  maxIdleTimeMS: 30000, 
  waitQueueTimeoutMS: 10000 
};

mongoose.connect('mongodb://127.0.0.1:27017/userdb', dbOptions)
  .then(() => console.log('✅ MongoDB connected'), seedDatabase())
  .catch(err => console.error('❌ Connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('🟢 MongoDB Persistent connection established');
});

mongoose.connection.on('disconnected', () => {
  console.log('🔴 MongoDB Connection lost, reconnect mechanism activated...');
  mongoose.connect(DB_URI, dbOptions).catch(err => console.error('重连失败:', err));
});

setInterval(() => {
  if (mongoose.connection.readyState === 1) {
    mongoose.connection.db.admin().ping().catch(() => {
      mongoose.connection.close().then(() => {
        mongoose.connect(DB_URI, connectionOptions);
      });
    });
  }
}, 45000);

// mongoose.connect('mongodb://localhost/userdb', { useUnifiedTopology: true })
//   .then(() => {
//     console.log('Connected to MongoDB');
//     seedDatabase(); 
//   })
//   .catch(error => {
//     console.error('MongoDB connection error:', error);
//   });

//middle
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: "Database connection is not established" });
  }
  next();
});

//router
const userRoutes = require('./app/routes/userRoutes');
const companyRoutes = require('./app/routes/companyRoutes');

app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);

const authRoutes = require("./app/routes/authRoutes");
app.use("/api/auth", authRoutes);


app.use("/images", express.static("app/images"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});



const setupSwagger = require('./swagger');
setupSwagger(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
  console.log(`Swageger Doc: http://localhost:${port}/api-docs`);
})
