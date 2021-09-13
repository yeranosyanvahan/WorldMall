const Queries={Search, SignIn}

function Search({call}) {
  return  `
  query Search {  queryProduct(filter: {product: {alloftext: "${call}"}}) {
      id
      product
      pricing {price}
      property {property strs}
    }
  }
  `
}

function SignIn({username,password}) {
return `  query Signin {
  checkUserPassword(username: "${username}",password:"${password}") {
    token
  }
}`
}

module.exports= Queries
