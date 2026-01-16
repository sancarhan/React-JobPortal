import mongoose from 'mongoose';

// MongoDB veritabanına bağlanmak için kullanılan fonksiyon.
const connectDB = async () => {
 
 mongoose.connection.on('connected', () => console.log('Database Bağlandı'))

 await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)

}

export default connectDB