const axios = require('axios');

const createPost = url => params => axios.post(url, params);

module.exports = createPost;
