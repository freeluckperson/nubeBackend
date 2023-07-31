import app from './app.js'
import { conectToDB } from './utils/mongoose.js'

const PORT = process.env['PORT']

const main = async () => {
  await conectToDB()
  app.listen(`${PORT}`)
  console.log(`Server in port ${PORT}`)
}

main()

