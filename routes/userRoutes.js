const express=require('express');

const userController = require('../controllers/userController');

const validation=require('../middleware/validation')

const verification=require('../middleware/checkAuth')

const userRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      signup:
 *        type: object
 *        required:
 *          - userName
 *          - email
 *          - password
 *        properties:
 *          userName:
 *           type: string
 *           description: User's Name
 *          email:
 *           type: string
 *           format: email
 *           description: User's email
 *          password:
 *           type: string
 *           description: User's password
 *         
 */


/**
 * @swagger
 * tags:
 *     name: User
 *     description: The user managing API endpoint
 */


/**
 * @swagger
 * /api/user/signup:
 *   post:
 *     summary: Create new user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/signup'    
 *     responses:
 *       200:
 *         description: Created User successfully
 *       500:
 *         description: Some Server Error
 */

userRoutes.post('/signup',validation.userValidate,userController.signup)

/**
 * @swagger
 *  components:
 *    schemas:
 *      login:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          email:
 *           type: string
 *           format: email
 *           description: User's email
 *          password:
 *           type: string
 *           description: User's password
 *         
 */



/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: login user
 *     security:
 *       - jwt: []
 *     tags: [User]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'    
 *     responses:
 *       200:
 *         description: Login User successfully
 *       500:
 *         description: Some Server Error
 */


userRoutes.post('/login',userController.login)



module.exports=userRoutes