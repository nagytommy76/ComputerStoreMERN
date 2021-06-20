import mongoose from 'mongoose'
const connectDB = async () => {
   try {
      const connection = await mongoose.connect(`${process.env.DB_CONNECTION}`, {
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
