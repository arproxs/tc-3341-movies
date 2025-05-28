import express from 'express'
import helmet from 'helmet'
import jsonErrorHandler from './middleware/jsonErrors'
import { type Database } from './database'
import movies from '@/modules/movies/controller'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function createApp(db: Database) {
  const app = express()

  app.use(helmet())
  app.use(express.json())

  app.use('/movies', movies(db))

  app.use(jsonErrorHandler)

  return app
}
