const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/kanhub')
}

const student = new mongoose.Schema({
  firstName: String
})

const card = new mongoose.Schema({})
const Student = mongoose.model('student', student)
const Card = mongoose.model('card', card)

connect()
  .then(async connection => {
    //const student = await Student.create({firstName: "Miguelito"})
    const found = await Card.find({})
    console.log(found)
  })
  .catch(e => console.error(e))
