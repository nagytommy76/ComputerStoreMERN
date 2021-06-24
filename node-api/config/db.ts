import mongoose from 'mongoose'
import { DB_CONNECTION } from './endpoints.config'
const connectDB = async () => {
   try {
      mongoose.set('useCreateIndex', true)
      const connection = await mongoose.connect(DB_CONNECTION, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false
      })
      console.log(`MongoDB connected: ${connection.connection.host}`)
   } catch (error) {
      console.error(error)
      process.exit(1)
   }
}
module.exports = connectDB
