const express = require('express') 
const makeDb = require('./db/index')
const app = express()

const port = 3010

makeDb()

app.get('/', (req, res) => res.send('Hello Homie'))

app.listen(port, () => console.log(`Exampale app listening on port ${port}`))