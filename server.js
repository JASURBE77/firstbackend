// import express from 'express'
// import mongoose from 'mongoose'
// import router from './routes/userroutes.js'
// import dotenv from "dotenv"

// dotenv.config()

// const app = express()

// app.use(express.json())

// const mongoUrl = process.env.MONGODB_URI
// try {
//     await mongoose.connect(mongoUrl);
//     console.log("mongodb ulandi");
// } catch (e) {
//     console.error("xato", e);
// }

// app.use("/api/users", router)

// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {
//     console.log(`server keldi ${PORT}-portda `);

// })
import express from "express"
import mongoose from "mongoose"
import router from "./routes/userroutes.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

// CORS ruxsat berish
app.use(cors())

app.use(express.json())

const mongoUrl = process.env.MONGODB_URI
try {
  await mongoose.connect(mongoUrl)
  console.log("mongodb ulandi")
} catch (e) {
  console.error("xato", e)
}

app.use("/api/users", router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server keldi ${PORT}-portda `)
})
