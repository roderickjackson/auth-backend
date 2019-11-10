const express = require('express') 

const app = express()

const port = 3010

app.get('/', (req, res) => res.send('Hello Homie'))

app.listen(port, () => console.log(`Exampale app listening on port ${port}`))