const mongodb = require('mongodb')
const assert = require('assert')

export default async function makeDb(){
  const mongoClient = mongodb.mongoClient
  const url = 'mongodb+srv://roderick3427:.eQ13Dq3@cluster0-wuodb.mongodb.net/test?retryWrites=true&w=majority'
  const dbName = 'auth'
  const client = new mongoClient(url)

  client.connect((err) => {
    assert.equal(null, err)
    console.log("Connected Successfully to server")

    const db = client.db(dbName)
    client.close()
  })

}