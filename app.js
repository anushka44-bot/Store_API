require('dotenv').config();
require('express-async-errors')
const express=require('express');
const app=express();
const connectDB=require('./starter/db/connect')
const productsRouter=require('./starter/routes/products')

const notFoundMiddleware=require('./starter/middleware/not-found')
const errorMiddleware=require('./starter/middleware/error-handler')
app.use(express.json())

app.get('/',(req,res)=>{
  res.send('<h1>STORE API</h1><a href="/api/v1/products">Products Api</a>')
})

app.use('/api/v1/products',productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port=3000

const start=async()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log("Done"))
  } catch (error) {
    console.log(error.message);
  }
}


start()