import { generateToken } from '../lib/utils.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body
  const { ip } = req.headers['x-forwarded-to'] || req.ip
      
  try {
    if ( !username || !email || !password ) {
      return res.status(400).json({ message: "All fields are required"})
    }
  
    if (password.length < 6) { // add better scrutiny and add an email verifier
      return res.status(400).json({ message: "Password must be at least 6 characters"})
    }
  
    const user = await User.findOne({ email }) // We have to create this model. 
    if (user) return res.status(400).json({ message: "Email already exists" })
  
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
  
    const newUser = new User({ // hasn't been saved yet
      username,
      email,
      password: hashedPass,
      ipAddress: ip
    })

    await newUser.save()

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    })
  } catch (error) {
    console.log("Error in the signup controller: ", error.message)
    res.status(500).json({ message: "Internal server error"})
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email }) // u-turn function

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials"})
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({message: "Invalid credentials"})
    }

    generateToken(user._id, res) // the res is taken in order to store a cookie on your computer

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic
    })
  } catch (error) {
    console.log("Error in login controller: ", error.message);
    res.status(500).json({ message: "Internal server error"})
  }
}

// ------------------------------------------------------------- //
export const addHebrewVerb = async (req, res) => {
  const { userId, hebrewVerbId } = req.body

  // have it check first if it's already there, if so, don't add another one of the same verb.
  await User.findByIdAndUpdate(userId, { $push: { hebrewVerbs: hebrewVerbId }})
  console.log("You added a verb to the user!")
}