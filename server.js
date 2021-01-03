const express = require ('express')
const fileUpload = require ('express-fileupload')
const connectDB = require ('./dbConfig')
const routes = require ('./routes')
const Image = require('./imageModel')

const app = express()

connectDB()

app.use(express.json())

app.use(fileUpload())

app.use('/user', routes)



app.post('/upload', (req, res) => {
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

        const newImage = Image.create({
            imageUrl: `/uploads/${file.name}`
        })

        console.log(newImage);
    })

})

app.listen(5000, console.log('Serter started ... '))