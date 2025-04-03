import mongoose from 'mongoose'

const Schema = mongoose.Schema 

const arabicVerbSchema = new Schema({
  lemmaForm: {
    type: [String],
    validate: 
  },
  preposition: {

  },
  meaning: {},
  form: {
    enum: []
  },
  conjugations: {

  },
  roots: {},
  
}, { timestamps: true })

export const ArabicVerb = mongoose.model("ArabicVerb", arabicVerbSchema)