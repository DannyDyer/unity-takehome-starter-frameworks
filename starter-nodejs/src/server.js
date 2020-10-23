const dotenv = require('dotenv');
const app = require('./app');

// Load port from .env file
dotenv.config();

const port = process.env.PORT;
app.start(port);
