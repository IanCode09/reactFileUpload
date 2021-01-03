import express from 'express'
import Image from './imageModel.js'
const router = express.Router()

router.post('/uploadimages', async(req, res) => {
    try {
        if(req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' })
        }
    
        const file = req.files.file
    
        file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
            if(err) {
                console.error(err)
                return res.status(500).send(err)
            }
    
            res.json({ 
                fileName: file.name, 
                filePath: `/uploads/${file.name}`
            })
        })
    } catch (error) {
        console.log(error)
    }
})

export default router