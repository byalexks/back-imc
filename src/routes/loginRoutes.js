const express = require('express')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const app = express()

app.get('/homeLogin/:id', (req, res) => {

    const id = req.params.id

    res.json({messague: "Hola mundo Get", id})
})

// Configuraciones de google
 const verify = async(token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    const userid = payload['sena.edu.co']
    console.log(userid.name)
    console.log(userid.email)
    console.log(userid.picture)
  }

app.post('/loginGoogle', (req, res) => {
   const token = req.body.idtoken

    verify(token)

    res.json({
        token
    })
})


module.exports = app