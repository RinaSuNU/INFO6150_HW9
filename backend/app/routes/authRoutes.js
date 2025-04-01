const express = require('express');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 用户认证相关 API
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: 用户登录
 *     description: 验证用户名和密码，返回登录状态
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
 *         description: 登录成功
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
 *                   example: "登录成功"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 *       400:
 *         description: 参数错误
 *       401:
 *         description: 认证失败
 *       500:
 *         description: 服务器错误
 */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // 1. 参数验证
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: '需要提供用户名和密码' 
        });
    }

    try {
        // 2. 查找用户
        const user = await User.findOne({ username }).select('+password');
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: '用户不存在' 
            });
        }

        // 3. 验证密码
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: '密码错误' 
            });
        }

        // 4. 成功响应
        res.status(200).json({ 
            success: true,
            message: '登录成功',
            user: { 
                id: user._id, 
                username: user.username 
            }
        });
    } catch (err) {
        console.error('登录错误:', err);
        res.status(500).json({ 
            success: false, 
            message: '服务器内部错误' 
        });
    }
});

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     tags: [Auth]
 *     summary: 用户登出
 *     description: 退出登录，前端只需清除 JWT 令牌
 *     responses:
 *       200:
 *         description: 登出成功
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "登出成功"
 */
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ 
        success: true,
        message: '登出成功' 
    });
});

module.exports = router;