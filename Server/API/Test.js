const fetch = require("node-fetch")
let config = require('js-yaml').load(require('fs').readFileSync('server.yaml'));

async function Fetching(){
  let a =  await fetch(`${config.Dgraph.hostname}/graphql`, {
  method: 'POST',
  body: `mutation MyMutation {
  addUser(input: {name: "a", created_at: "2019", username: "b", password: "a55s6559"}) {
    numUids
  }
}
`
})
console.log(a)
}

Fetching()
