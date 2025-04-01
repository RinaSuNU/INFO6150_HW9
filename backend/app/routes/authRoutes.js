const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User Auth API
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: user Login
 *     description: 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "admin!@#123"
 *     responses:
 *       200:
 *         description: login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "login successful"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 *       400:
 *         description: Parameter error
 *       401:
 *         description: Authentication failure
 *       500:
 *         description: Server error
 */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Username and password required' 
        });
    }

    try {
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: '用户不存在' 
            });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: 'Wrong password' 
            });
        }

        res.status(200).json({ 
            success: true,
            message: 'login successful',
            user: { 
                id: user._id, 
                username: user.username 
            }
        });
    } catch (err) {
        console.error('login error:', err);
        res.status(500).json({ 
            success: false, 
            message: 'Internal server error' 
        });
    }
});

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: Logout
 *     description: 
 *     responses:
 *       200:
 *         description: Logout successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "logout successful"
 */
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ 
        success: true,
        message: 'logout successful' 
    });
});

module.exports = router;