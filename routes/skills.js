import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)

router.get('/:id/edit', skillsCtrl.edit)

router.post('/', skillsCtrl.create)

router.delete('/:id', skillsCtrl.delete)


/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
