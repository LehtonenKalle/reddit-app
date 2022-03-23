import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchBarSlice';

function SearchBar() {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm);

  const changeSearchTerm = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput))
  }

  return (
    <div>
      <input className='search' type='text' value={searchTerm} onChange={changeSearchTerm} placeholder='Search...'/>
    </div>
  );
}

export default SearchBar;