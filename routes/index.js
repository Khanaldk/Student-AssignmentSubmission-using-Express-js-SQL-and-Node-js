const express=require('express');

const AssignmentFileRoutes = require('./assignmentFileRoutes');
const fileuploadRoutes = require('./fileuploadRoutes');
const studentRoutes = require('./studentRoutes');
const userRoutes = require('./userRoutes');

const routes=express.Router();


routes.use('/user',userRoutes)
routes.use('/fileupload',fileuploadRoutes)
routes.use('/student',studentRoutes)
routes.use('/assignmentfile',AssignmentFileRoutes)

module.exports=routes