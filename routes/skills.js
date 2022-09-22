import { Router } from 'express'


const router = Router()

router.get('/', function(req, res) {
  res.render('skills/index', {
    skills: skills
  })
})


/* GET users listing. */
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

export {
  router
}
