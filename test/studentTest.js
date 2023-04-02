// const chai=require('chai');
// const chaiHttp=require('chai-http');
// const server='http://localhost:5000'

// chai.should();

// chai.use(chaiHttp);

// const loginDetails={
//     email:'user@example.com',
//     password:'string123'
// }

// const studentData={
//     name:'DURGAKHANAL',
//     program:'BSC.CSIT'
// }

// describe('student /api/student routes',()=>{
//     it('it should log the user and post the student details!',(done)=>{
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             const token=res.body.token;
//         })


//     })
// })

// describe('GET ALL students',()=>{
//     it(' without using tokens test the error response whille getting all the students',(done)=>{
//         chai.request(server)
//         .get('/api/student')
//         .end((err,res)=>{
//             res.should.have.status(403);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("token not found!!");
//         })
//         done();
//     })
// })

// describe('GET by ID student Model',()=>{
//     it(' without using tokens test the error response while getting the students with id.',(done)=>{
//         const id=1
//         chai.request(server) 
//         .get('/api/student/'+id)
//         .end((err,res)=>{
//             res.should.have.status(403);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("token not found!!")
//         })
//         done();
//     })
// })


// describe('POST for student',()=>{
//     it('without using tokens test the error response while creating the students.',(done)=>{
//         const id=2
//         chai.request(server)
//         .patch('/api/student/'+id)
//         .send(studentData)
//         .end((err,res)=>{
//             res.should.have.status(403);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("token not found!!")
//         })
//         done();
//     })
// })

// describe('POST routes for student',()=>{
//     it('using tokens test the error response while creating the student without students name.',(done)=>{
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             const token=res.body.token;
//             // console.log(token)
//             chai.request(server)
//             .post('/api/student')
//             .set('Authorization','JWT '+ token)
//             .send(studentData)
//             .end((err,res)=>{
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message')
//                 res.body.message.should.be.eql("Student created Successfully!!")
//             })
//             done();
//         })
//     })
// })