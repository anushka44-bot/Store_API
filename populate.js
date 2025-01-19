require('dotenv').config()

const connectDB=require('./starter/db/connect');
const Product=require('./starter/models/product');

const jsonProducts=require('./products.json');

const start=async()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany();
    await Product.create(jsonProducts)
    console.log("Done");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

start()