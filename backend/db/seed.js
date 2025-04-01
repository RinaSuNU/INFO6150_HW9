require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../app/model/User");
const Company = require("../app/model/Company");

const seedDatabase = async () => {
  try {

    console.log("✅  Start initialization...");

    await Promise.all([
      User.deleteMany({ _id: { $exists: true }}),
      Company.deleteMany({ _id: { $exists: true }})
    ]);

    const salt = await bcrypt.genSalt(10);
    const users = await User.create([
      {
        username: "admin",
        password: "admin!@#123"
      },
      {
        username: "user1",
        password: "user!@#123"
      }
    ]);

    const companies = await Company.create([
      { name: "DataAnnotation", imageUrl: "/images/DataAnnotation.jpeg" },
      { name: "S & P", imageUrl: "/images/S&P.jpeg" },
      { name: "ROKT", imageUrl: "/images/ROKT.jpeg" }
    ]);

    console.log('✅ database initialization successfully:');
    console.log(`  Created ${users.length} users`);
    console.log(`  Created ${companies.length} companies`);
  } catch (err) {
    console.error('❌ database initialization failure', err);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = seedDatabase;