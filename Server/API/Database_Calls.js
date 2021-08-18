const fetch = require("node-fetch")
const Queries={
  Autocomplete:({call})=>`{Autocomplete(func:match(category,"${call}",4)){expand(Category)}}`,
  Search:({call})=> `{Search(func: alloftext(product,"${call}")){id:uid product stores{store}@facets(price:price)properties:~products{property}@facets(src:src)}}`
}
async function Query(type, call) {
  console.log(`Query ${type} with params: ${call}`)
  await dgraphClient.newTxn().query(Calls[type](body));
};


let now = "2019-03-28T14:00:00-06:00"

const Mutations={
  "AddUser": {

  }
}
async function Mutate(type, call) {
 console.log(`Mutation ${type} with params: ${call}`)
 await dgraphClient.newTxn().mutate(Mutations[type](body));
}

module.exports = {Query, Mutate}
