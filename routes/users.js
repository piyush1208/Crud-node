const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/getall', async(req,res) => {
    try{
           const users = await User.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const user = await User.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    })

    try{
        const a1 =  await user.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const user = await User.findById(req.params.id) 
        user.username = req.body.username
        user.name=req.body.name
        const a1 = await user.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
    try{
        const user = await User.findByIdAndRemove(req.params.id)
        res.json(user)
    }catch(err){
        res.send('Error')
    }

})


module.exports = router