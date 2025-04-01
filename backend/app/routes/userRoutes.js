const express = require('express');
const userController = require('../controller/userController'); 


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User API
 */

// /**
//  * @swagger
//  * /api/users:
//  *   post:
//  *     tags:
//  *       - User
//  *     summary: User login
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               username:
//  *                 type: user1
//  *               password:
//  *                 type: qwe!@#123
//  *     responses:
//  *       200:
//  *         description: Successful login
//  *       401:
//  *         description: Invalid credentials
//  */
// router.post('/users', userController.login);


/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "admin"
 *               password:
 *                 type: string
 *                 example: "admin!@#123"
 *     responses:
 *       201:
 *         description: Create user successfully
 *       500:
 *         description: Failure to create user
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retrieve all users
 *       500:
 *         description: Failure to retrieve users
 */
router.get('/', userController.getAllUsers);

module.exports = router;