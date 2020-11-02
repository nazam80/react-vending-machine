import React from 'react';
import './DisplayCredit.css';

const DisplayCredit = (props) => {
  
 
  return (
  <div className = 'display_container'>
    <span className = 'display_number'>{props.credit}</span>
    <span className = 'display_currency'> cents</span>
  </div>  

  )
  
}

export default DisplayCredit;
