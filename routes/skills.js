import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.post('/', skillsCtrl.create)


/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
