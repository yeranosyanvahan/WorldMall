import React,{useState,useRef} from 'react';
import {API} from '../lib/index.js'
import { useHistory,withRouter } from "react-router-dom";

function SearchBar() {
let history = useHistory();
let inputref= useRef()
const [searchresult,Setsearchresult] = useState([])
return (
  <>
    <div className='search'>
      <input ref={inputref} type="text" placeholder="Search..." name="search" id="search"
        onChange={({target:{value:search}})=>{API("Autocomplete",{'call':search}).then(Result=>Setsearchresult(Result["Autocomplete"]))}}
        onKeyDown={(event) => { if (event.key === 'Enter') {history.push(`/search/${event.target.value}`);}}}
        />
      <button onClick={()=>{history.push(`/search/${inputref.current.value}`)}}><i className="fa fa-search"></i></button>
      <ul>
          {searchresult.map(sample=>{return <li key={Math.random()}>{sample['category']} </li>})}
      </ul>
    </div>
  </>
);}

export default withRouter(SearchBar);
