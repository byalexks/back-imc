const express = require('express')

const app = express()
const PORT = 8282

app.use(require('./routes/loginRoutes'))


app.listen(PORT, ( ) => {
    console.log(`Server on port ${PORT}`)
})
