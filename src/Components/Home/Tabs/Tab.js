import React from 'react';
import { blog } from '../../../Config/data';
import './styles.css'

const Tab = () => {
   const Tabs = blog
   return (
      <div>
         <h4>Available categories</h4>
        {Tabs.map((tab, id)=>{
           return (
              <div className="Tab">
                  <button className="Tab_btn">
                    <h3 key={id}>{tab.name}</h3>
                  </button>
              </div>
           )
        })} 
      </div>
   );
}

export default Tab;
