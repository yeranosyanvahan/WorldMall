import config from '../../config.json'
import Process from './Process.js'

async function API(type, call={}) {
  const res = await fetch(`${config.API.hostname}/query/${type}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(call)
  });
  let Content=await res.json()
  return Content.map((content)=>Process[type](content));
};

export default API
