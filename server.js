const exp = require('express')
const app = exp()
const PORT = 7000

const { success, error } = require('consola')

app.listen(PORT, (err)=>{
    if(err) throw err
    success({message: `server run on port ${PORT}`, badge: true})
})