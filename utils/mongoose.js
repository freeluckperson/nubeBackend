import mongoose from 'mongoose'

const MONGODB_URI = process.env['MONGODB_URI']

export const conectToDB = async () => {
  try{
    await mongoose.connect(MONGODB_URI)
    console.log('mongoDb conected')
  }catch(error){
    console.error(error)
  }
}