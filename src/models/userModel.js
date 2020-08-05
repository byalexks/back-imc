const mongoose = require('mongoose')

let Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    urlImage: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido']
    }
})

module.exports = mongoose.model('User', userSchema)