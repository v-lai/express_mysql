const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const models = require('./models');
const config = require('./config');

// routes
const chatRoutes = require ('./routes/chat');
const userRoutes = require ('./routes/user');

if (config.useMorgan) {
  const morgan = require('morgan');
  app.use(morgan('tiny'));
}

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/chat', chatRoutes);
app.use('/user', userRoutes);
// catch all other routes
app.get('*', (req, res) => {
  res.send('404 not found');
});

app.listen(config.port, function () {
  console.log(`Server is listening on Port: ${config.port}`);
});

module.exports = app;
