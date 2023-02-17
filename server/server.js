import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './config/connection.js'

import userRouter from './routes/user.routes.js'
import clientRouter from './routes/client.routes.js'
import adminRouter from './routes/admin.routes.js'

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb'}))

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/client', clientRouter)
app.use('/api/v1/admin', adminRouter)


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)

        app.listen(3001, () => {
            console.log(`Server started on port http://localhost:3001`)
        })
    } catch (error) {
        console.log(error)
    }
}
startServer()

  