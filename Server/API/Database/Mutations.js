const Mutations = {SingUp}
let now = "2019-03-28T14:00:00-06:00"

function SingUp({name, created_at, username, password}) {
 return `mutation Signup {
   addUser(input: {fname: "${name}", username: "${username}", created_at: "${created_at}", password: "${password}"})
   {numUids}
 }`
}


module.exports = Mutations
