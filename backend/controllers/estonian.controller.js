import { EstonianNoun } from '../models/Estonian/estonianNounModel.js'

export const getNouns = async (req, res) => {
  const estonianNouns = await EstonianNoun.find().limit(2); // this will return an array of objects
  res.status(201).json(estonianNouns)
}

