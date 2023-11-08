import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter username'
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Array,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    socketID: {
        type: String,
    }
})

export const Messages = new Schema({
    fromId: {
        type: String,
    },
    message: {
        type: String,
    },
    date: {
        type: Date,
    },
    toId: {
        type: String,
    },
    type: {
        type: String,
    }
})

export const Contacts = new Schema({
    contactName: {
        type: Array,
    },
    date: {
        type: Date,
    },
    participants: {
        type: Array,
    },
})
