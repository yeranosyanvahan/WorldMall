import config from '../config.json'

async function API(type, call={}) {
  const response = await fetch(`${config.API.hostname}/query/${type}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(call)
  });
  return response.json();
};

export default API
