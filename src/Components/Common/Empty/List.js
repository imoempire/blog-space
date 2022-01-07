import React from 'react';
import image from '../../../Images/empty.gif'
import './styles.css'

const List = () => {
   return (
   <div className='emptyList-wrap'>
    <img src={image} alt='empty' />
  </div>
   );
}

export default List;
