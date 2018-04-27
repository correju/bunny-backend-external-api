const app = require('../config-server/');
const setGetCall = require('../getApi/');
const setPostCall = require('../postApi/');
const defaultValuesForSpeedie = require('../defaultValuesForSpeedie/');

const userId = process.env.USER_ID;
const token = process.env.TOKEN;
const apiKey = process.env.API_KEY;
const getMovie = setGetCall('https://api.themoviedb.org/3/search/multi');
const postProject = setPostCall(`https://${userId}:${token}@api.voicebunny.com/projects/addSpeedy`);

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
  const obj = Object.assign({}, defaultValuesForSpeedie, {
    script: req.body.overview,
    title: `[test] #noflags ${req.body.title}`,
  });
  postProject(obj)
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(JSON.stringify({ error: error.message, status: error.status }));
    });
});

app.get('/projects/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  setGetCall(`https://${userId}:${token}@api.voicebunny.com/projects/${req.params.id}`)()
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((error) => {
      res.send(JSON.stringify({ error: error.message, status: error.status }));
    });
});
