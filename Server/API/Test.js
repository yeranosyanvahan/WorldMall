const fetch = require("node-fetch")
const fs = require('fs')
let config = require('js-yaml').load(fs.readFileSync('server.yaml'));

async function Schema(){
  let a =  await fetch(`${config.Dgraph.hostname}/admin/schema`, {
  method: 'POST',
  body: fs.readFileSync('Gschema')
})
a=await a.json()
console.log("Schema",a)
}

async function Fetching(){
  let a =  await (await fetch(`${config.Dgraph.hostname}/graphql`, {
  method: 'POST',
  headers: {'Content-Type': 'application/graphql'},
  body: `mutation {
  addUser(input: {fname: "pp", created_at: "2019", username: "ass", password: "afsafasf"}) {
    numUids
  }
}
`})).json()
console.log("Fething",a)

}
async function f() {
//  await Schema()
  await Fetching()
}
f()
