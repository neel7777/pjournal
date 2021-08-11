const router = require('express').Router()
const Sessions = require('./sessions-model')

router.get('/', (req, res) => {
    Sessions.find()
    .then(session=> {
        res.json(session)
    })
    .catch(err => res.send(err))
})

 router.get('/:id', (req, res) => {
     const id = req.params.id

     Sessions.findById(id)
    .then(session=> {
      res.status(200).json(session);
    })

    .catch(err => {
      res.status(500).json({ error: 'sesh not received' })
    })
 })

 router.post('/', (req, res) => {
     const session = req.body
     Sessions.add(session)
        .then(sesh => {
            res.status(200).json(sesh)
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong', err})
        })
 })

 router.put('/:id', (req, res) => {
    const changes = req.body

    Sessions.update(req.params.id, changes)
       .then(sesh => {
           if(sesh) {
               Sessions.findById(req.params.id)
                   .then(sesh => {
                       res.status(200).json(sesh)
                   })
                   .catch(err => {
                       res.status(500).json({
                           error: 'Something went wrong'
                       })
                   })
           }else {
               res.status(404).json({
                   error: 'sesh not found'
               })
           }
       })
       .catch(err => {
           res.status(500).json({
               error: 'Something went wrong', err
           })
       })
})

router.delete('/:id', (req, res) => {
    Sessions.remove(req.params.id)
       .then(sesh => {
           if(sesh) {
               res.status(201).json({
                   message: 'sesh deleted'
               })
           }else {
               res.status(404).json({
                   error: 'sesh not found'
               })
           }
       })
       .catch(err => {
           res.status(500).json({
               error: 'Something went wrong'
           })
       })
})


module.exports = router