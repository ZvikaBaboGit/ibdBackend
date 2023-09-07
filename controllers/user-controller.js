import userService from '../services/users-service.js'

const getUsers = (req, res) => {
    const users = userService.getUsers()
    res.send(users); /// replase wite the mongoDB function which find all of the users at the database.
}

export  { getUsers }