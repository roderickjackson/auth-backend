const express = require('express')
const users = require('../src/routes/api/users')
const bodyParser = require('body-parser')
const dataBaseConnection = require('../src/db/index')
const app = express()
const port = 3010

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

dataBaseConnection()

app.use('/users', users)

app.listen(port, () => console.log(`Exampale app listening on port ${port}`))