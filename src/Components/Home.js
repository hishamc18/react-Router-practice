import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigate(('order-summary'), {replace: true})}>Place Order</button>
        </div>
    )
}

export default Home
