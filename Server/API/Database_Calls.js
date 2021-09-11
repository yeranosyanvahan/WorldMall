const fetch = require("node-fetch")
const fs = require('fs')
let config = require('js-yaml').load(fs.readFileSync('server.yaml'));

async function Fetch(body){
  return await (await fetch(`${config.Dgraph.hostname}/graphql`, {
  method: 'POST',  headers: {'Content-Type': 'application/graphql'},
  'body': body})).json()}

const Queries={
Search:({call})=> `
query Search {
  queryProduct(filter: {product: {alloftext: "${call}"}}) {
    product
    pricing {price}
    property {property strs}
  }
}
`
}
async function Query(type, call) {
  if(!Queries?.[type]?.(call)) return {"error": "Invalid Query"}
  return await Fetch(Queries[type](call))
};


let now = "2019-03-28T14:00:00-06:00"

const Mutations={
  AddUser: ({name, created_at, username, password}) => `
mutation addUser {
  addUser(input: {fname: "${name}", username: "${username}", created_at: "${created_at}", password: "${password}"}) {
    numUids
  }
}
`}

async function Mutate(type, call) {
  Mutations[type] ? await Fetch(Mutations[type](call)): function(){throw(`Mutation ${type} is not specified`)}()
};

module.exports = {Query, Mutate}
