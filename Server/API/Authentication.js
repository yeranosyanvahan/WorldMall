const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const {Query, Mutate} = require('./Database')
let config = require('js-yaml').load(require('fs').readFileSync('server.yaml'));

async function Signin(username, password) {
  if(!Query("CheckUser",{username,password})) return false
  const User = Query("GetUser",{username})
  return jwt.sign(User, config.Secret )
}
async function Signup(fname, username, password, email="",phone_number="") {
  try {
    Mutate("AddUser",{name,username,password,email,password})
  } catch (e) {
    return e
  }
}

module.exports = {Signin, Signup}
