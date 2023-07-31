import mongoose from 'mongoose'
import {MONGODB_URI} from '../config.js'


export const conectToDB = async ()=> {
  try{
    await mongoose.connect(MONGODB_URI)
    console.log('mongoDb conected')
  }catch(error){
    console.error(error)
  }
}