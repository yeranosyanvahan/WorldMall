const yaml = require('js-yaml');
const jwt = require('jsonwebtoken');
let config = yaml.load(require('fs').readFileSync('server.yaml'));


function Authorization(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, config.Secret , (err, token) => {
    console.log(err)
    console.log("req.path ",req.path)
    let  {access, data} = token
    if (err ) return res.sendStatus(403)
//    if (req.path in access) res.sendStatus(403)
    req.token = data
    next()
  })
}

module.exports = Authorization
