import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'
import type { Database } from '@/database'
import { jsonRoute } from '@/utils/middleware'
import buildRespository from './repository'

export default (db: Database) => {
  const messages = buildRespository(db)
  const router = Router()

  router.get(
    '/',
    jsonRoute(async (req, res) => {
      if (typeof req.query.id !== 'string') {
        const movies = await messages.findAll()
        res.status(StatusCodes.OK).json(movies)
        return
      }

      // a hard-coded solution for your first controller test
      const ids = req.query.id!.split(',').map(Number)
      const movies = await messages.findByIds(ids)

      res.status(StatusCodes.OK)
      res.json(movies)
    })
  )

  return router
}
