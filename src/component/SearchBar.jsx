import React from 'react'

const SearchBar = ({handleSearch,Search}) => {
  return (
  <>
  
  <div className="search-card">
    <input type="text" value={Search} onChange={handleSearch} placeholder="Search by Name, Roll No or Branch"/>
    <button>Search</button>
  </div>
  
  </>
  )
}

export default SearchBar
