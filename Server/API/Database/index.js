const Fetch = require('./Fetch')
const Queries = require('./Queries')
const Mutations = require('./Mutations')

async function Query(type, call) {
  if(!Queries?.[type]) return {"errors": "Invalid Query"}
  if(!Queries?.[type]?.(call)) return {"errors": "Invalid parameters"}
  return await Fetch(Queries[type](call))
};

async function Mutate(type, call) {
  if(!Mutations?.[type]) return {"errors": "Invalid Mutation"}
  if(!Mutations?.[type]?.(call)) return {"errors": "Invalid parameters"}
  return await Fetch(Mutations[type](call))
};

module.exports = {Query, Mutate}
