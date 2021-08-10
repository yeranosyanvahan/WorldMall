async function API(type, call={}) {
  const response = await fetch(`http://localhost:4000/query/${type}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(call)
  });
  return response.json();
};

export default API
