const yaml = require('js-yaml');
const jwt = require('jsonwebtoken');
let config = yaml.load(require('fs').readFileSync('server.yaml'));

function Permit(access,requestpath){
  console.log({access,requestpath})

}
function Authorization(req, res, next) {
  let path = req.path.split("/").filter((sample)=>sample)
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')?.[1]
  if(token == null)
  {
   if(!Permit(config['Open Url'],path)) return res.sendStatus(401)
   req.token = {"data":{}}
   next()
  }
  else{
   jwt.verify(token, config.Secret , (err, token) => {
    console.log(err)
    if (err | token.access | !Permit(token?.access,) ) return res.sendStatus(403)
    req.token = token?.data
    next()
  })}
}

module.exports = Authorization
