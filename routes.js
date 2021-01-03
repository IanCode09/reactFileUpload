const express = require('express')
const User = require('./userModel')
const router = express.Router()

router.post('/signup', async(req, res) => {
    try {
        const { name, email, password, description } = req.body

        const user = await User.create({
            name,
            email,
            password,
            description
        })

        if(user) {
            res.status(201).json({
                _id: user.id,
                email: user.email,
                description: user.description
            })
        } else {
            res.status(400).json({ message: 'Invalid user Data'})
        }

    } catch (error) {
        res.status(400).json({ message: `${error}`})
        console.log(error)
    }
})


router.get('/', async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: `${error}`})
    }
})

module.exports = router