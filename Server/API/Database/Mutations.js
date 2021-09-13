const  {Stringify, Check} =require('./Functions');

const Mutations = {Singup}
let now = "2019-03-28T14:00:00-06:00"

function Singup({fname, created_at, username, password}) {
 return `mutation Signup {
   addUser(input: ${Stringify({fname, created_at, username, password})})
   {numUids}
 }`
}


module.exports = Mutations
