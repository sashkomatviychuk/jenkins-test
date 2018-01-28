const request = require('supertest');
const app = require('./../app');

describe('App test', () => {
// added something
//2
    it('Home page should return statusCode 200', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
    });
});
