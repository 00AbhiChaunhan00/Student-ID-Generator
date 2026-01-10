// import  {GetApi}  from './Data.jsx'
import { GetApi } from '../Data.jsx'
import { DelApi } from '../Data.jsx'
import { useContext, useEffect, useState } from 'react'
// import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import Card from './card.jsx'
import {StateContext}  from './Context.jsx'
import { useNavigate } from "react-router-dom";
function CardLogic(){
  const{state,setState,setupdateData}=useContext(StateContext);
  const[search,setSearch]=useState("");
const navigate=useNavigate()  


  const DATA=async()=>{
   try{
    const res= await GetApi()
    const value=res.data
     console.log(res)

     setState(value)
   } catch(error){
    console.log(error.mesaage)
   }
  }
useEffect(()=>{
  DATA()
},[])

const clickDelete=async(id)=>{
  console.log("click")
  try{
     console.log("click")
     const Delres=await DelApi(id)
     console.log(Delres)
     if(Delres.status===200){
      const DelPost= state.filter((curr)=>curr.id != id)
    setState(DelPost)
     }
  }catch(error){
    console.log(error.message)
  }
}

function clickEdit(currel){
  console.log("click")
    console.log(currel)
    setupdateData(currel)
    navigate('/form')
};

  const searchData= state.filter((currSearch)=>
      currSearch.name?.toLowerCase().includes(search.toLowerCase()))
  
  

function clickSearch(e){
  console.log("click")
  setSearch(e.target.value)

}

  return (
  <>

  <SearchBar handleSearch={clickSearch} Search={search} />
<div>
   <ul className='cards'>
  {searchData.map((curr)=>{
   return  <Card key={curr.id}  current={curr} handleDelete={clickDelete} handleEdit={clickEdit} />
  })}
  </ul>
</div>
  </>
  )
}

export default CardLogic