import mongodb from 'mongodb'
import assert from 'assert'
import connection from './key_dev'

export default async function makeDb(){
  const mongoClient = mongodb.mongoClient
  const url = connection()
  const dbName = 'auth'
  const client = new mongoClient(url)

  client.connect((err) => {
    assert.equal(null, err)
    console.log("Connected Successfully to server")

    const db = client.db(dbName)
    client.close()
  })

}