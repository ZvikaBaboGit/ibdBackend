import express from 'express'
const bardRouter = new express.Router()
import { createRecipe } from '../controllers/bard-controller.js'



bardRouter.post('/', createRecipe);


export  {bardRouter}