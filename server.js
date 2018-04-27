const app = require('./app/config-server/');
const express = require('express');
const path = require('path');
require('./app/routes/');


const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
