const fetch = require("node-fetch")
const fs = require('fs')
let config = require('js-yaml').load(fs.readFileSync('server.yaml'));

async function Fetch(body){
  return await (await fetch(`${config.Dgraph.hostname}/graphql`, {
  method: 'POST',  headers: {'Content-Type': 'application/graphql'},
  'body': body})).json()}

const Queries={
  Autocomplete:({call})=>`{Autocomplete(func:match(category,"${call}",4)){expand(Category)}}`,
  Search:({call})=> `{Search(func: alloftext(product,"${call}")){id:uid product stores{store}@facets(price:price)properties:~products{property}@facets(src:src)}}`
}
async function Query(type, call) {
  Queries[type] ? Queries[type](call): function(){throw(`Query ${type} is not specified`)}()
};


let now = "2019-03-28T14:00:00-06:00"

const Mutations={
  AddUser: ({name, created_at, username, password}) => `mutation {  addUser(input: {name: "${name}", created_at: "${created_at}", username: "${username}", password: "${password}"}) {numUids}}`
}

async function Mutate(type, call) {
  Mutations[type] ? Mutations[type](call): function(){throw(`Mutation ${type} is not specified`)}()
};

module.exports = {Query, Mutate}
