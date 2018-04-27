/* global describe, it, beforeEach, afterEach */
const { assert } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const setGetCall = require('../app/getApi/');
const setPostCall = require('../app/postApi/');

describe('Testing Get', () => {
  beforeEach(() => {
    sinon
      .stub(axios, 'get')
      .returns(true);
  });
  afterEach(() => {
    axios.get.restore();
  });
  it('Create get curry ', () => {
    const getMovie = setGetCall('https://api.themoviedb.org/3/search/multi');
    assert.equal(typeof getMovie, 'function');
  });
  it('Test curry function', () => {
    const getMovie = setGetCall('https://api.themoviedb.org/3/search/multi');
    assert.equal(getMovie(), true);
  });
});

describe('Testing POSt', () => {
  beforeEach(() => {
    sinon
      .stub(axios, 'post')
      .returns(true);
  });
  afterEach(() => {
    axios.post.restore();
  });
  it('Test curry function', () => {
    const postProject = setPostCall('https://api.themoviedb.org/3/search/multi');
    assert.equal(postProject(), true);
  });
  it('Create post curry ', () => {
    const postProject = setPostCall('https://api.themoviedb.org/3/search/multi');
    assert.equal(typeof postProject, 'function');
  });
});
