import express from 'express'
import routes from './routes'
import { connectDb } from './config'


const app = express()
const PORT = process.env.PORT || 3000

connectDb()

app.use(routes)

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`))
