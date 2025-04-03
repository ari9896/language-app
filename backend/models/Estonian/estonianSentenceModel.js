// 1 import mongoose 
const mongoose = require('mongoose')

// 2 create a schema
const Schema = mongoose.Schema

// 3 define the schema's attributes
const hoverableCardsSchema = new Schema ({
    meaning: { type: String, required: true },
    case: { type: String },
    tam: { type: String },
    infinitive: { type: String },
    notes: { type: String }
}, { _id: true });

const estonianSentenceSchema = new Schema ({
    estonianSentence: {
        type: String,
        required: true
    },
    possibleAnswers: {
        type: [String],
        required: true
    },
    hoverableCards: {
        type: Map,
        of: hoverableCardsSchema,
        required: true
    },
    tips: {
        type: [String],
        require: false
    }
})


// 4 Create a model and export it.
module.exports = mongoose.model('EstonianSentence', estonianSentenceSchema)

