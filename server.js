const app = require('./app/config-server/');
require('./app/routes/');

const port = 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
