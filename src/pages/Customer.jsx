/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'
import Menu from './Menu'
import useProject from '../hooks/useProject'
import CustomersList from '../components/CustomersList';

function Customer() {
  const {customers}=useProject();

  //console.log("From CUstomers: ",customers);
  return (
    <Fragment>
        <Menu/>
        {customers.map(c=>(
          <CustomersList
          key={c.id}
          customers={c}
          />
        ))}

    </Fragment>
  )
}

export default Customer