const express=require('express');

const AssignmentFileController = require('../controllers/assignmentFileController');

const verification=require('../middleware/checkAuth')

const fileupload=require('../middleware/fileuploadMiddleware')

const validation=require('../middleware/validation')

const AssignmentFileRoutes=express.Router();


/**
 * @swagger
 * tags:
 *     name: AssignmentFile
 *     description: The AssignmentFile managing API endpoint
 */


/**
 * @swagger
 *  /api/assignmentfile:
 *   post:
 *     summary: Posting the assignmentfile
 *     security:
 *      - jwt: []
 *     tags: [AssignmentFile]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: file's title
 *              subjectName:
 *                type: text
 *                description: file's subjectName
 *              doc:
 *                type: string
 *                format: binary
 *              studentId:
 *                type: integer
 *     responses:
 *      200:
 *          description: Image Uploaded successfully
 *      500:
 *          description: Some Server Error
*/
AssignmentFileRoutes.post('/',verification.Logintoken,fileupload.docFile.single('doc'),validation.assignmentFileValidate,AssignmentFileController.createAssignmentFile);

/**
 * @swagger
 * /api/assignmentfile:
 *   get:
 *     summary: List of all assignmentfile
 *     security:
 *       - jwt: []
 *     tags: [AssignmentFile]
 *     responses:
 *      200:
 *          description: assignmentfile List retrieved successfully
 *      500:
 *          description: Some Server Error
 */

AssignmentFileRoutes.get('/',verification.Logintoken,AssignmentFileController.getAllAssignmentFile)

/**
 * @swagger
 * /api/assignmentfile/{id}:
 *   get:
 *     summary: Retrieve assignmentfile
 *     security:
 *       - jwt: []
 *     tags: [AssignmentFile]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: assignmentfile's id
 *     responses:
 *      200:
 *          description: assignmentfile retrieved successfully
 *      500:
 *          description: Some Server Error
 */

AssignmentFileRoutes.get('/:id',verification.Logintoken,AssignmentFileController.getAssignmentFileById)

/**
 * @swagger
 *  /api/assignmentfile/{id}:
 *   patch:
 *     summary: Updating the assignmentfile
 *     security:
 *      - jwt: []
 *     tags: [AssignmentFile]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: assignmentfile's id
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *                description: assignmentfile's title
 *              studentName:
 *                type: text
 *                description: assignmentfile's studentName
 *              doc:
 *                type: string
 *                format: binary
 *              studentId:
 *                type: integer
 *     responses:
 *      200:
 *          description: assignmentfile updated successfully
 *      500:
 *          description: Some Server Error
*/

AssignmentFileRoutes.patch('/:id',verification.Logintoken,fileupload.docFile.single('doc'),AssignmentFileController.updateAssignmentFileById)

/**
 * @swagger
 * /api/assignmentfile/{id}:
 *   delete:
 *     summary: delete assignmentfile
 *     security:
 *       - jwt: []
 *     tags: [AssignmentFile]
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: assignmentfile's id
 *     responses:
 *      200:
 *          description: assignmentfile deleted successfully
 *      500:
 *          description: Some Server Error
 */

AssignmentFileRoutes.delete('/:id',verification.Logintoken,AssignmentFileController.deleteAssignmentFileById)

module.exports=AssignmentFileRoutes