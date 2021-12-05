import { Router } from 'express'
import * as ticketCtrl from '../controllers/tickets.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'


const router = Router()

/*---------- Public Routes ----------*/

router.get('/',ticketCtrl.index)



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, ticketCtrl.create)
router.patch('/:id', checkAuth, ticketCtrl.update)
router.delete('/:id', checkAuth, ticketCtrl.delete)
router.post("/:id/comments", checkAuth, ticketCtrl.addComment)

export {
  router
}