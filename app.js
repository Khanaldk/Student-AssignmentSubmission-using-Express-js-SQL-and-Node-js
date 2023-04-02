const express=require('express');
const app=express();
const dotenv=require('dotenv');
const routes=require('./routes/index')
// const cors=require('cors')
const swaggeruiexpress=require('swagger-ui-express');
const swaggerjsdoc=require('swagger-jsdoc');
const swaggerDocs=require('./docs/swaggerDocs')
// const handleError=require('./utils/errorUtils')
dotenv.config();


const port=process.env.PORT || 4000

// app.use(bodyParser.json());
app.use(express.json())

// app.use(cors());

app.use('/api',routes)

app.use('/api-docs/',swaggeruiexpress.serve,swaggeruiexpress.setup(swaggerjsdoc(swaggerDocs)));

// app.use(handleError);

app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}.`);
})