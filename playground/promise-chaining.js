require ('../src/db/mongoose')
const User = require('../src/models/user')

//5d9e8cee3c6dd51858a55bf9

// User.findByIdAndUpdate('5d9e9d09ce31191d98ceb659', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5d9e9d09ce31191d98ceb659', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})