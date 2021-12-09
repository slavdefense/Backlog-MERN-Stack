import 'dotenv/config.js'
import express, { application } from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'
import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import {router as ticketsRouter} from './routes/tickets.js'
import {router as profilesRouter} from './routes/profiles.js'

import('./config/database.js')

const app = express()


app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/api/tickets',ticketsRouter)
app.use('/api/profiles', profilesRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
