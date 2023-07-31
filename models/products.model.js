import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  imag: {
    public_id: String,
    secure_url: String
  }
}, {
  timestamps: true
})
export default mongoose.model('Product', productSchema)