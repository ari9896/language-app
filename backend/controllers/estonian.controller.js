import { EstonianNoun } from '../models/Estonian/estonianNounModel.js'

export const getNouns = async (req, res) => {
  const estonianNouns = await EstonianNoun.find().limit(5); // this will return an array of objects
  res.status(201).json({ success: true, message: "Estonian nouns retrieved", estonianNouns })
}

