const express = require('express');
const Joi = require('joi');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
//const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));


const port = (process.env.PORT || 3000);
app.listen(port, () => console.log(`lisening on port ${port}...`));
