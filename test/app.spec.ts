import app from "../src/app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { Suite } from "mocha";
chai.use(chaiHttp);
const expect = chai.expect;

describe('Get request', () => {
    it('should go normally', () => chai.request(app).get('/').then(res => expect(res.text).to.equal('hello')));
    it('get dog list should return sucess', (done) => {
        chai.request(app).get('/list').then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body.message).to.be.exist;
            done();
        })
    });
});