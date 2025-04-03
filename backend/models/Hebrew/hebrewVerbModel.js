import mongoose from 'mongoose'

const Schema = mongoose.Schema

const hoverableCardsSchema = new Schema ({
  meaning: { type: String, required: true },
  case: { type: String },
  tam: { type: String },
  infinitive: { type: String },
  notes: { type: String }
}, { _id: true });

const hebrewVerbSchema = new Schema({
  hebrewInfinitive: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length === 3;
      }, 
      message: "The array must contain exactly three strings: Hebrew infinitive, Niqqud, and English transliteration."
    }
  },
  prepositon: {
    type: String, 
    enum: [null, "be", "le", "al"], // be, le, al (to rely on), 
    default: null
  },
  meaning: {
    type: String,
    required: true,
    unique: true
  },
  class: {
    type: String,
    required: true,
    enum: ["me?a?e?(et)", "me??a?e?(et)", "?o?e?(et)", "?a?(a)", "?e?(a)", "?o?e/a", "?a?e?/?e?e?a", "ma??i?(a)", "ma?a?i?(a)", 
      "me?a?e/a", "ni??a?/ni??e?(et)", 
      "mit?a?e?(et)"] // forgot the feminine on this one
    /*"mi?ta?e? (to attend)",

    ]
     */
  },
  /*
  conjugations: { // figure out how I'll handle this
    1SG-PRS: [],
    2SG-PST-M: 

  },
  */
  roots: {
    type: String,
    minLength: 2,
    maxLength: 14,
    required: true,
  }
}, { timestamps: true })

export const HebrewVerb = mongoose.model("HebrewVerb", hebrewVerbSchema);
/* a form to test out the route
{

  "hebrewInfinitve": ["", "", ""],
  "preposition": "",
  "meaning": "",
  "class": "",
  "roots": "",
  "conjugations": {
    // present tenses
    // past tenses
    // future tenses
    // subjunctive tenses
  }

}
*/

