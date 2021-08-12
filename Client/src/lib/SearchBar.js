import React,{useState,useRef} from 'react';
import {API} from '../lib/index.js'
import { useHistory,withRouter } from "react-router-dom";
function SearchBar() {
const history = useHistory();
const inputref= useRef()
const [searchresult,Setsearchresult] = useState([])
function Search() {
 if(inputref.current.value !== '')  {history.push(`/search/${inputref.current.value}`)}
}

return (
    <div className='search'>
      <input ref={inputref} type="text" placeholder="Search..." name="search" id="search"
        onChange={({target:{value:search}})=>{API("Autocomplete",{'call':search}).then(Result=>Setsearchresult(Result))}}
        onKeyDown={(event) => { if (event.key === 'Enter') {Search()}}}
        onBlur={Search}
        />
      <button onClick={()=>{history.push(`/search/${inputref.current.value}`)}}><i className="fa fa-search"></i></button>
      <ul>
          {searchresult.map(sample=>{return <li key={sample['category']}>{sample['category']} </li>})}
      </ul>
    </div>
);}

export default withRouter(SearchBar);
