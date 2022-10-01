const cors = require('cors')
const express = require('express')
const app = express()
const usuarios = require('./src/data/usuarios.json')

const port = process.env.PORT || 3000

app.use(cors())

app.get('/usuarios', (req, res) =>{
    return res.json(usuarios)
})
app.listen(port, () => {
    console.log(`Aplicação rodando na http://localhost:${port}`)
})