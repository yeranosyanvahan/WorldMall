import * as dgraph from 'dgraph-js-http'

let Calls={Autocomplete:call=>`{Autocomplete(func:match(category,"${call}",4)){expand(Category)}}`,Search:call=>`{Search(func: alloftext(product,"${call}")){product stores {store}@facets ~products {property}@facets}}`}
const Dgraph = require("dgraph-js-http");
const clientStub = new Dgraph.DgraphClientStub("http://localhost:8080", false);
const dgraphClient = new Dgraph.DgraphClient(clientStub);

async function API(type,call=''){
  const query = Calls[type](call)
  let {data} = await dgraphClient.newTxn().query(query);
  return data
}

export default API
