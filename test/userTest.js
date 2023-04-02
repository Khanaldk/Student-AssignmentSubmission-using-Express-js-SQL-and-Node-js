// const chai=require('chai');
// const chaiHttp=require('chai-http')
// const server='http://localhost:5000'

// chai.should();

// chai.use(chaiHttp);


// const signUserData={
//     userName:'Dugalhdejhjcv',
//     email:'user@example23533.com',
//     password:'string123'
// }

// const loginDetails={
//     email:'user@example.com',
//     password:'string123'
// }

// describe('User Signup',async()=>{
//     it('it should signup the signUserData',(done)=>{
//         chai.request(server)
//         .post('/api/user/signup')
//         .send(signUserData)
//         .end((err,res)=>{
//             // console.log(res)
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("Successfully signup!!")
         
//         }) 
//         done();
//     })
// })

// describe('login user',()=>{
//     it('it will login the user and generates the token',(done)=>{
//         chai.request(server)
//         .post('/api/user/login')
//         .send(loginDetails)
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("Login successfully!!");
//         })
//         done();
//     })
// })