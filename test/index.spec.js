// const assert = require('assert');
const { assert } = require('chai');
const request = require('request');
const dbTest = require('../models');
console.log(process.env.NODE_ENV)
describe('Array', () => {
    it('should return -1 when a value is not present', () => {
        assert.equal([1, 2, 3].indexOf(4), -1)
    })
})

describe('setImmediate', () => {
    it('should throw error for multiple done calls', done => {
        setImmediate(done)
    })

})

describe('Invalid Route', () => {
    const url = 'http://localhost:3000'

    it('should return with a status code 404 when going to an invalid route', done => {
        request(`${url}/foo`, (err, request, body) => {
            const statusCode = request.statusCode

            assert.equal(statusCode, 404)
            assert.equal(typeof body, 'string')
            done()
        })
    })

    it('should return with a status of 200 after user creation', done => {
        const _body = {
            "name": "Tim",
        }
        request.post({
            url: `${url}/createuser`,
            json: _body
        }, (err, request, body) => {
            assert.equal(request.statusCode, 200)
            done()
        })

    })
})