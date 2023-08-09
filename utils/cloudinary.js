import { v2 as cloudinary } from 'cloudinary'
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} from '../config.js'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
})

export const uploadImag = async (filePath)=>{
  return await cloudinary.uploader.upload(filePath, {
    folder: 'replit'
  })
}

export const deleteImag = async (publicId)=>{
  return await cloudinary.uploader.destroy(publicId)
}