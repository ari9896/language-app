import { HebrewVerb } from '../models/Hebrew/hebrewVerbModel.js'
import User from '../models/user.model.js'

export const uploadVerb = async (req, res) => {
  const { hebrewVerb } = req.body // where doest this hebrewVerb name come from?
  if (!hebrewVerb) {
    return res.status(400).json({ message: "Hebrew verb data is required" })
  }

  // check if it exists
    
  // create it
  try {
    const result = await HebrewVerb.create(hebrewVerb)
    res.status(200).json({ success: true, message: "Hebrew verb uploaded succesfully", json: result })
    console.log("You uploaded: ", result)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

/*
const createNoun = async (req, res) => {
    // db interaction
    try {
        const noun = await EstonianNoun.create({ 
            engTrans,
            nomSing, 
            nomPlur, 
            genSing, 
            genPlur,
            partSing,
            partPlur,
            tags,
            notes
        })
        res.status(200).json(noun)
    // error
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
*/

export const getVerbs = async (req, res) => {
  const hebrewVerbs = await HebrewVerb.find()//.limit(5); // this will return an array of objects
  res.status(201).json({ success: true, message: "Hebrew verbs retrieved", hebrewVerbs })
}

export const getVerb = async (req, res) => {
  const { id } = req.params;
  try {
    const verb = await HebrewVerb.findById(id); //Is the param the {id} in the route???
    if (!verb) {
      return res.status(404).json({ message: "Verb not found" });
    }
    res.json(verb);  // Send the verb details into res.data: { ...verb }
  } catch (error) {
    console.error("Error fetching verb:", error);
    res.status(500).json({ message: "Server error while fetching verb" });
  }
}

export const getAvailableVerbs = async (req, res) => {
  const { userId } = req.body

  try {
    // Step 1: Retrieve the user's document
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Step 2: Retrieve posts using the IDs in the user's "Hebrew verbs" array
    const posts = await HebrewVerb.find({ _id: { $in: user.hebrewVerbs } });

    // Step 3: Return the full post objects
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving hebrew verbs' });
  }
}