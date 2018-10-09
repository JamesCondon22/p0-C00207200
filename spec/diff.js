var path = require('path');
var expect = require('chai').expect;

var diff = require(path.join(__dirname, '..', './diff.js'));

describe('diff()', function () {
  'use strict';

  it('exists', function () {
    expect(diff).to.be.a('function');

  });

  it('Output 4', function () {
    expect(diff(4)).to.equal(4);
  });

  it('Output 2', function () {
    expect(diff(2)).to.equal(2);
  });

  it('Output 6', function () {
    expect(diff(8)).to.equal(6);
  });

  it('Output 5', function () {
    expect(diff(3)).to.equal(5);
  });
  it('Output 6', function () {
    expect(diff(9)).to.equal(6);
  });
  it('Output 5', function () {
    expect(diff(4)).to.equal(5);
  });
  it('Output 6', function () {
    expect(diff(10)).to.equal(6);
  });
  it('Output 5', function () {
    expect(diff(5)).to.equal(5);
  });
  it('Output 6', function () {
    expect(diff(11)).to.equal(6);
  });
  it('Output 5', function () {
    expect(diff(6)).to.equal(5);
  });
  // Add more assertions here
});
