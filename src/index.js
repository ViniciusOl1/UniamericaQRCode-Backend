const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(routes);

app.listen(port);
