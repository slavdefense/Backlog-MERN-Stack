import { Router } from 'express'
import * as ticketCtrl from '../controllers/tickets.js'


const router = Router()

/*---------- Public Routes ----------*/

router.get('/',ticketCtrl.index)
router.post('/',ticketCtrl.create)
router.patch('/:id', ticketCtrl.update)
router.delete('/:id',ticketCtrl.delete)


/*---------- Protected Routes ----------*/

export {
  router
}