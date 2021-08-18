const yaml = require('js-yaml');
let config = yaml.load(require('fs').readFileSync('server.yaml'));

async function Privilege(token, access){
  console.log(`Trying to access ${access} with token ${token}`)
  return {user:token, Access:true}
}

module.exports = Privilege
