import './general.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import SearchBar from './SearchBar.js';

import Product from './Product.js';
import Submit from './Submit.js';
import {Store, Dispatch} from './Redux.js'

//API("Search",{'call':search}).then(pseudoSetproducts

//const API = async(Call)=>{return import('./API.js').then(({default:API})=>{return API(Call)})};
//import API from './API.js'

async function API (...args) {  const {default:api} = await import('./API');  return api(...args) }

export {Product, API, Nav, SearchBar ,Footer, Submit, Store, Dispatch}
