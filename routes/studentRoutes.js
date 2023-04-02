const express=require('express');

const studentController = require('../controllers/studentController');

const verification=require('../middleware/checkAuth')

const validation=require('../middleware/validation');


const studentRoutes=express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      student:
 *        type: object
 *        required:
 *          - name
 *          - program
 *        properties:
 *          name:
 *           type: string
 *           description: student's Name
 *          program:
 *           type: string
 *           description: student's program
 *         
 */


/**
 * @swagger
 * tags:
 *     name: Student
 *     description: The Student managing API endpoint
 */


/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Create new student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/student'    
 *     responses:
 *       200:
 *         description: Created Student successfully
 *       500:
 *         description: Some Server Error
 */

studentRoutes.post('/',verification.Logintoken,validation.studentValidate,studentController.createStudent)

/**
 * @swagger
 * /api/student:
 *   get:
 *     summary: List of all students
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     responses:
 *      200:
 *          description: Student List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

studentRoutes.get('/',verification.Logintoken,studentController.getAllStudent)

/**
 * @swagger
 * /api/student/{id}:
 *   get:
 *     summary: Retrieve student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: Student's id
 *     responses:
 *      200:
 *          description: Student retrieved successfully
 *      500:
 *          description: Some Server Error
 */

studentRoutes.get('/:id',verification.Logintoken,studentController.getStudentById)

/**
 * @swagger
 * /api/student/{id}:
 *   patch:
 *     summary: Update student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: student's id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/student'
 *     responses:
 *      200:
 *          description: student updated successfully
 *      500:
 *          description: Some Server Error
 */

studentRoutes.patch('/:id',verification.Logintoken,validation.studentValidate,studentController.updateStudentById)

/**
 * @swagger
 * /api/student/{id}:
 *   delete:
 *     summary: delete student
 *     security:
 *       - jwt: []
 *     tags: [Student]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: student's id
 *     responses:
 *      200:
 *          description: student deleted successfully
 *      500:
 *          description: Some Server Error
 */

studentRoutes.delete('/:id',verification.Logintoken,studentController.deleteStudentById)

module.exports=studentRoutes