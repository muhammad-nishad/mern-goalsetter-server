const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const auth=require('./routes/auth')
// const connectDB=require('./config/db')c
const connectDB=require('./config/db')
connectDB()

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use('/api/auth',auth)




const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})