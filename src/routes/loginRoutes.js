const express = require('express')

const app = express()

app.get('/homeLogin/:id', (req, res) => {

    const id = req.params.id

    res.json({messague: "Hola mundo Get", id})
})
app.post('/login', (req, res) => {
    res.json({messague: "Hola mundo Post"})
})


module.exports = app