const fetch = require("node-fetch")
const fs = require('fs')
let config = require('js-yaml').load(fs.readFileSync('server.yaml'));
async function Schema(){
  let a =  await fetch(`${config.Dgraph.hostname}/admin/schema`, {
  method: 'POST',
  body: fs.readFileSync('Gschema')
})
console.log("Schema",a)
}

async function Fetching(){
  let a =  await fetch(`${config.Dgraph.hostname}/graphql`, {
  method: 'POST',
  headers: {'Content-Type': 'application/graphql', 'Content-Encoding': 'no'},
  body: `mutation {
  addUser(input: {name: "pp", created_at: "2019", username: "as", password: "afsafasf"}) {
    numUids
  }
}
`
}
)
console.log("Fething",a.body)

}
async function f() {
//  await Schema()
  await Fetching()
}
f()
