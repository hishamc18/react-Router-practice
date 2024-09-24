import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const params = useParams();
    const usersid = params.usersId;
  return (
    <div>
      User Details {usersid} Found...
    </div>
  )
}

export default UserDetails
