const Process={Autocomplete, Search}

function Search({id,product:description,pricing:[{price:price}],property:[{strs:[src]}]})
{
 console.log({id})
 return {id, description, src, price}
}

function Autocomplete(Result){
  return Result
}

export default Process
