const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.set('port',process.env.PORT || 3000)

app.get('/',(req,res)=>{
    res.json({status: 'online'})
})

app.get('/api/whoami',(req,res)=>{
    res.json({
        ipaddress: req.ip,
        language: req.acceptsLanguages(),
        software: req.headers["user-agent"]
    })
})

app.listen(app.get('port'),()=>{
    console.log(`server listening on http://localhost:${app.get('port')}`)
})