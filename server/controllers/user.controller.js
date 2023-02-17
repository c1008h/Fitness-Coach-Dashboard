import User from '../config/models/user.js'

const getAllUsers = async (req, res) => {}
const createUser = async (req, res) => {
    try {
        const { name, email, avatar } = req.body;
        const userExist = await User.findOne({ email })
    
        if (userExist) return res.status(200).json(userExist)
    
        const newUser = await User.create({
            name, email, avatar
        })

        res.status(200).json(newUser)
        console.log('Successfully created new user')

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
}
const getUserInfoById = async (req, res) => {}

export {
    getAllUsers,
    createUser,
    getUserInfoById
}