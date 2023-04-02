const express=require('express');

const fileuploadController = require('../controllers/fileuploadController');

const uploadFile=require('../middleware/fileuploadMiddleware')

const fileuploadRoutes=express.Router();

/**
 * @swagger
 *  /api/fileupload/docs:
 *   post:
 *     summary: Upload a single doc
 *     security:
 *       - jwt: []
 *     tags: [FileUpload]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *            type: object
 *            properties:
 *              doc:
 *                type: string
 *                format: binary
 *     responses:
 *      200:
 *          description: Doc Uploaded successfully
 *      500:
 *          description: Some Server Error
*/

fileuploadRoutes.post('/docs',uploadFile.docFile.single('doc'),fileuploadController.singleDoc)

module.exports=fileuploadRoutes