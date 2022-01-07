import React from 'react';
import { blog } from '../../../Config/data';
import Chip from '../../Common/Chip/Chip';
import Tab from '../Tabs/Tab';
import './styles.css';



const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div  className='searchBar'>
    <div className='Availabe'>
       <Tab/>
    </div>
    <div  className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Search By Category'
        value={value}
        onChange={handleSearchKey}
        />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Go</button>
    </form>
    </div>
    <h2 style={{fontFamily: 'Aquire', color: 'black', fontSize: '20px'}}>Featured Stories</h2>
  </div>
);

export default SearchBar;
