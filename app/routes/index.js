const app = require('../config-server/');
const setGetCall = require('../getApi/');
const setPostCall = require('../postApi/');

const userId = process.env.USER_ID;
const token = process.env.TOKEN;
const apiKey = process.env.API_KEY;
const getMovie = setGetCall('https://api.themoviedb.org/3/search/multi');
const postProject = setPostCall(`https://${userId}:${token}@api.voicebunny.com/projects`);

const params = {
  api_key: apiKey,
  language: 'en_US',
};

app.get('/movies', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getMovie(Object.assign({}, params, { query: req.query.searchWord }))
    .then(response => res.send(JSON.stringify(response.data.results)))
    .catch(error => res.send(JSON.stringify(error)));
});

app.post('/projects', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  postProject()
    .then(response => res.send(JSON.stringify(response.data.results)))
    .catch(error => res.send(JSON.stringify(error)));
});
