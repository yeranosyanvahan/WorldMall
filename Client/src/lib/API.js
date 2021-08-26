import config from '../config.json'

const Process={
  Autocomplete: (Result) => Result,
  Search:({id, product:description, stores:[{price}], properties:[{src}]})=> {return {id, description, src, price}}
}

async function API(type, call={}) {
  const res = await fetch(`${config.API.hostname}/query/${type}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(call)
  });
  console.log({type,call})
  let {[type]:Content}=await res.json()
  return Content.map((content)=>Process[type](content));
};

export default API
