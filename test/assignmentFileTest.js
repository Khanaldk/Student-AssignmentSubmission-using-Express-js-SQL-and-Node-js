const chai=require('chai');
const chaiHttp=require('chai-http');
const fs=require('fs')

const {Student,AssignmentFile,User}=require('../models')

const server='http://localhost:5000'

chai.should();

chai.use(chaiHttp);

const loginDetails={
    email:'user@example.com',
    password:'string123'
}

const studentData={
    id:100,
    name:'Ping',
    program:'BCA'
}

const AssignmentFileData={
    id:200,
    title:'hello',
    subjectName:'Ma',
    imageUrl:'http',
    studentId:100
}

// describe('POST routes for AssignmentFile',()=>{
//     it('It will log the user and post the assignnmentFile',(done)=>{
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             const token=res.body.token;
//             // console.log(token)
//             chai.request(server)
//             .post('/api/assignmentfile')
//             .set('Authorization','JWT ' + token)
//             .field('title','AI first chapter')
//             .field('subjectName','Artificial Intelligence')
//             .attach('doc',fs.readFileSync('test/test.pdf'),'AssignmentFile.pdf')
//             .field('studentId',2)
//             .end((err,res)=>{
//                 // console.log(res)
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.message.should.be.eql("AssignmentFile created successfully!!")
//             })
//             done();
//         })
//     })
// })


// describe('GET ALL the assignment File',()=>{
//     it('it will log the user and retreived all asignmentFile',(done)=>{
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object')
//             const token=res.body.token;
//             chai.request(server)
//             .get('/api/assignmentfile')
//             .set('Authorization','JWT ' + token)
//             .end((err,res)=>{
//                 res.should.have.status(200);
//                 res.body.should.have.property('message')
//                 res.body.message.should.be.eql("Sucessfully retreieved all assignmentFile!!")
//             })
//             done();
//         })
//     })
// })


// before(async()=>{
//     try {
//         await Student.create(studentData);
//         await AssignmentFile.create(AssignmentFile);
//     } catch (error) {
//         console.log(error)
//     }
// })

// after(async()=>{
//     try {
//         await Student.destroy({where:{id:100},force:true});
//         await AssignmentFile.destroy({where:{id:200},force:true});
//     } catch (error) {
//         console.log(error);
//     }
// })


// describe("GET by ID for AssignmentFile",()=>{
//     it('it will log the user and get the assignmentFile data!!',(done)=>{
//         const id=4
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             const token=res.body.token;
//             chai.request(server)
//             .get('/api/assignmentfile/'+id)
//             .set('Authorization','JWT ' + token)
//             .end((err,res)=>{
//                 // console.log(res)
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message');
//                 res.body.message.should.be.eql("successfully retrieved assignmentFile!!")
//             })
//             done();
//         })
//     })
// })

// describe('UPDATE assignmentFile',()=>{
//     it('it will log the user and update the assignment',(done)=>{
//         const id=7
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             const token=res.body.token;
//             chai.request(server)
//             .patch('/api/assignmentfile/'+id)
//             .set('Authorization','JWT ' + token)
//             .field('title','updateTitle')
//             .field('subjectName','updateSubjectName')
//             .attach('doc',fs.readFileSync('test/test.pdf'),'updateAssignment.pdf')
//             .field('studentId',2)
//             .end((err,res)=>{
//                 res.should.have.status(200);
//                 res.body.should.be.a('object');
//                 res.body.should.have.property('message')
//                 res.body.message.should.be.eql("AssignmentFile updated successfully!!")
//             })
//             done();
//         })
//     })
// })

describe('DELETE for AssignmentFile',()=>{
    it('it will log the user and delete the assignment file',(done)=>{
        const id=8
        chai.request(server)
        .post('/api/user/login')
        .send(loginDetails)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.be.a('object');
            const token=res.body.token;
            chai.request(server)
            .delete('/api/assignmentfile/'+ id)
            .set('Authorization','JWT ' + token)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.message.should.be.eql("AssignmentFile deleted successfully!!")
            })
            done();
        })
    })
})