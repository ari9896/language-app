import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    console.log("mongo_uri: ", process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message) // this will display in the console
    process.exit(1) // 1 is failure, 0 is success
  }
}