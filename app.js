const express = require("express")

const app = express()

app.use(express.json())

const port = 3000

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})

app.get('/v1/explorers',(req,res)=>{
    console.log(`Api explorers GET ALL requests ${new Date()}`)

    const explorer1 = {id:1,name:'Carlo1'}
    const explorer2 = {id:2,name:'Carlo2'}
    const explorer3 = {id:3,name:'Carlo3'}
    const explorer4 = {id:4,name:'Carlo4'}
    const explorer5 = {id:5,name:'Carlo5'}

    const explorers = [explorer1,explorer2,explorer3,explorer4,explorer5]

    res.status(200).send(explorers)
})

app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`Api explorers GET requests ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    const explorer = {id:1,name:'Carlo1'}
    res.status(200).send(explorer)
})

