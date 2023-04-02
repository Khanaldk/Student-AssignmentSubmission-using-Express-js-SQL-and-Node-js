
// const chai=require('chai');
// const chaiHttp=require('chai-http');
// const fs=require('fs');

// const server='http://localhost:5000'

// chai.should();

// chai.use(chaiHttp);

// describe('POST routes for fileupload!!',()=>[
//     it('it will upload the file',(done)=>{
//         chai.request(server)
//         .post('/api/fileupload/docs')
//         .attach('doc',fs.readFileSync('test/test.pdf'),'success.pdf')
//         .end((err,res)=>{
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('message');
//             res.body.message.should.be.eql("Fileuploaded successfully!!");
//         })
//         done();
//     })
// ])

