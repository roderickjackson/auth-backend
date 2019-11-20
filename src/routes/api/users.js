const express = require("express")
const UserModel = require('../../model/userModel')
const router = express.Router()


// @route  POST /users/register
// @desc   Register new user
// @access Public
router.post('/register', async (request, response) => {
  try {
    let user = new UserModel(request.body)
    let result = await user.save()
    response.send(result)
  }
  catch (error){
    response.status(500).send(error)
  }
})

module.exports = router;
