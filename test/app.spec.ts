import app from "../src/app";
import * as chai from "chai";
import chaiHttp = require("chai-http");
import "mocha";
import { Suite } from "mocha";
chai.use(chaiHttp);
const expect = chai.expect;

describe('Get dog breed list request', () => {
    it('get dog breed list should return sucess', (done) => {
        chai.request(app).get('/list').then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.exist;
            expect(res.body).to.be.an('array').that.is.not.empty;
            done();
        }).catch(e => {
            console.error(e);
            done();
        })
    });
});

describe('Get dog breed images request', () => {
    it('get dog breed images with breed only.', (done) => {
        chai.request(app).get('/images/hound').then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array').that.is.not.empty;
            done();
        }).catch(e => {
            console.error(e);
            done();
        });
    });
    it('get dog breed images with breed and sub breed.', (done) => {
        chai.request(app).get('/images/hound/afghan').then(res => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.an('array').that.is.not.empty;
            done();
        }).catch(e => {
            console.error(e);
            done();
        })
    });
});