import bardServices from '../services/bard-services.js'

const createRecipe = async(req, res) => {
    const { body } = req

    const response = await bardServices.createRecipe(body)
    res.send(response); /// replase wite the mongoDB function which find all of the users at the database.
}

export { createRecipe }