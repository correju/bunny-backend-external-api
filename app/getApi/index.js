const axios = require('axios');

const createGet = url => params => axios.get(url, { params });

module.exports = createGet;
