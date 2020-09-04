const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single("upload"), (req, res) => {
    res.send()
})

app.use(cors())

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})