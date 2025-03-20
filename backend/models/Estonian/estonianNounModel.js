import mongoose from 'mongoose'

// 2 create a schema
const Schema = mongoose.Schema

// 3 define the schema's attributes
const estonianNounSchema = new Schema({
    engTrans: {
        type: String,
        required: true
    },
    nomSing: {
        type: String,
        required: true,
        unique: true
        // no numbers
    },
    genSing: {
        type: String,
        required: true,
        // no numbers
    },
    partSing: {
        type: String,
        required: true,
        // no numbers
    },
    nomPlur: {
        type: String,
        required: true,
        // no numbers
    },
    genPlur: {
        type: String,
        required: true,
        // no numbers
    },
    partPlur: {
        type: String,
        required: true,
        // no numbers
    },
    tags: {
        type: [String],
        /* make it to where the tags
        can't be numbers */
        required: false,
        default: []
    },
    notes: {
        type: String,
        required: false,
        default: "-"
    }
}, { _id: true });


// The Name in orange will match EXACTLY the name in the DB.
export const EstonianNoun = mongoose.model('EstonianNoun', estonianNounSchema)

// 5 Here's the template to make a request:
/*

{
  "engTrans": "",
  "nomSing": "",
  "nomPlur": "",
  "genSing": "",
  "genPlur": "",
  "partSing": "",
  "partPlur": ""
}

*/

