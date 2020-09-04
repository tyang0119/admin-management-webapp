const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {

    avatar: {
        type: Buffer,
        required: false
    },

    parent: {
        type: String,
        trim: true
    },

    // children: {
    //     type: [String],
    //     default: [""],
    //     trim: true
    // },

    lastName: {
        type: String,
        // required: true,
        trim: true
    },


    firstName: {
        type: String,
        // required: true,
        trim: true
    },

    gender: {
        type: String,
        // required: true,
        trim: true
    },

    rank: {
        type: String,
        // required: true,
        trim: true
    },

    startDate: {
        type: Date,
        // required: true,
        //min: todayDate
    },

    phoneNumber: {
        type: String,
        // required: true,
        default: 0,
        // validate(value) {
        //     const string = value.toString()
        //     if (string.length !== 10) {
        //         throw new Error('Phone Number Must be 10 digits')
        //     }
        // },
    },

    emailAddress: {
        type: String,
        // required: true,
        trim: true,

        // validate(value) {
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Not an Email Format')
        //     }
        // },

    },

    age: {
        type: Number,
        default: 0,
        // required: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Age cannot be negative')
            }
        }
    }
})

module.exports = User