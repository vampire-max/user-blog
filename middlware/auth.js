const User = require('../model/user')

const auth = (req, res, next) => {
  const username = req.params.username
  const pwd = req.params.password

  User.findOne({
    username: username,
    password: pwd,
  }).then((rlt, err) => {
    console.log('rlt', err, rlt)
    if (rlt) {
      req.params.userId = rlt._id
      next()
    } else {
      return res.send(403, { message: 'Authentication Error' })
    }
  })
}

module.exports = auth
