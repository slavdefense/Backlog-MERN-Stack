import { Router } from 'express'
import * as ticketCtrl from '../controllers/tickets.js'


const router = Router()

/*---------- Public Routes ----------*/

router.get('/',ticketCtrl.index)


/*---------- Protected Routes ----------*/

export {
  router
}