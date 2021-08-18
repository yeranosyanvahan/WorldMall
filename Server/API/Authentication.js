const bcrypt = require("bcryptjs");
const {Query, Mutate}= require('./Database_Calls')
let config = require('js-yaml').load(require('fs').readFileSync('server.yaml'));

async function Signin(username, password) {
  result = await Query("CheckUser",{username,password})
  return {username, access:true}
}
async function Signup(fname, username, password, email="",phone_number="") {
  result = await Mutate("AddUser",{name,username,password,email,password})

}

module.exports = {Signin, Signup}
