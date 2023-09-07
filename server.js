import express from 'express';
import Joi  from'joi';
import cors  from'cors';
import  mongoose  from 'mongoose';
import 'dotenv/config'

// import userRouter  from './routers/users-routers'
import {userRouter} from './routers/users-routers.js'
import {bardRouter}  from './routers/bard-routers.js'
//const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
// const Bard = require("bard-ai");
// const init = async () => {
//     const COOKIE_KEY = 'AIzaSyDLSma36W2BZIvqCeDJxBjKyete9CGkFFw'

//     await Bard.init(COOKIE_KEY);
// }
// init()

app.use('/api/users', userRouter)
app.use('/api/bard', bardRouter)

const port = (process.env.PORT || 3000);
app.listen(port, () => console.log(`lisening on port ${port}...`));
