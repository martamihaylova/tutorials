const express = require('express');
const routes = require('./config/routes');
const { PORT } = require('./config/config');
const app =  express();

require('./config/express')(app);
require('./config/mongoose');
require('./config/routes')(app);
app.use(routes);
// app.use(errorHandler);

app.listen(PORT, console.log.bind(console, `Server listening on port ${PORT}...`));