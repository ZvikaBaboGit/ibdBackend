import express from 'express'
const userRouter = new express.Router()

import { getUsers }  from '../controllers/user-controller.js'

userRouter.get('/', getUsers);


export { userRouter }; 