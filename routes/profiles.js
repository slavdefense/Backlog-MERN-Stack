import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.post('/', profilesCtrl.show)

export {
  router
}