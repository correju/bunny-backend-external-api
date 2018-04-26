const app = require('./app/config-server/');
require('./app/routes/');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
