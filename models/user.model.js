import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        required: [true, 'ismini kirimasen sikaman'],
        type: String
    },
    surname: {
        required: [true, 'agar rasm tashamasenn firdavs korasan'],
        type: String
    },
    phone: {
        type: Number,
        required: [true, 'telefonizi berin jonim']
    }
})

const users = mongoose.model('user', userSchema)

export default users
