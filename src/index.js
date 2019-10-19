const express = require('express')
// const bodyParser = require('body-parser')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
        // cb(undefined, false)
        
        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a document'))
        }
        cb(undefined, true)
    
    }
})



app.post('/upload', upload.single('upload'), (req,res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '0 second'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
// myFunction()
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5da7823ea6e9f64c60538b97')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5da83503318aa50e4c77344b')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()