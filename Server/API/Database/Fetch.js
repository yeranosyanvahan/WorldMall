const fetch = require("node-fetch")
const fs = require('fs')
let config = require('js-yaml').load(fs.readFileSync('server.yaml'));

async function Fetch(body){
  let response = await fetch
  (`${config.Dgraph.hostname}/graphql`,{
    method: 'POST',
    headers: {'Content-Type': 'application/graphql'},
    'body': body
  })

  return await response.json()
}


module.exports = Fetch
