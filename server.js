const express = require('express');
const app = express();

app.use(express.json());

const defaultRoute = require('./routes/default');
app.use('/default', defaultRoute);

app.listen(3000, () => console.log('Server has started.'));
