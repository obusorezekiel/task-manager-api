require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5d9e8cee3c6dd51858a55bf9').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5da0d162c9704d0f287e7e76').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})


