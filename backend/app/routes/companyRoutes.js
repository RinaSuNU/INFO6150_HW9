const express = require('express');
const router = express.Router();
const companyController = require('../controller/companyController.js');

/**
 * @swagger
 * tags:
 *   name: Companies
 *   description: Companies API
 */

/**
 * @swagger
 * /api/companies:
 *   get:
 *     summary: Retrieve a list of companies
 *     tags: [Companies]
 *     responses:
 *       200:
 *         description: Retrieved all companies
 *       500:
 *         description: Companies Retrieve Error
 */
router.get('/', companyController.getCompanies);

module.exports = router;