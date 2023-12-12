import React from 'react';
import {  useState } from 'react';
import { useGetKpisQuery } from '../data/api';
import './usercard.css'
import ReactPaginate from 'react-paginate';
import Searchbar from './Searchbar';





const Usercard =() => {
const  {data }= useGetKpisQuery();
const [pageNumber, setPageNumber]= useState(0);
const [filter ,setFilter] = useState("");

const usersPerPage = 20;

const pagesVisited = pageNumber * usersPerPage;

const displayUser = data?.filter((user)=> user.name.toLowerCase().includes(filter.toLowerCase())||
user.username.toLowerCase().includes(filter.toLowerCase()),

).slice(pagesVisited,pagesVisited+usersPerPage).map((card)=>{
  return(
    <div className='properties-container'>
       
    <div className=" r-card" >
      
    

    <span className=" r-price">
      <div style={{ color: "orange" }}>{card.username}</div>
      <div >{card.name}</div>
    </span>
   
    <span className="primaryText">{card.website}</span>


  </div>
  </div>

  )

})





const pageCount = Math.ceil(data?.length / usersPerPage);
const changePage = ({selected}) => {
  setPageNumber(selected);


}
console.log(pageCount)

return (

<div className='wrapper'>
<Searchbar filter={filter} setFilter={setFilter}/>
  {displayUser}
  <ReactPaginate
     breakLabel="..."
     nextLabel="next >"
     onPageChange={changePage}
     pageRangeDisplayed={1}
     pageCount={pageCount}
     previousLabel="< previous"
     renderOnZeroPageCount={null}
     containerClassName={'paginationButon'}
   
 />
</div>       
    
    
    );
}

export default Usercard ;


