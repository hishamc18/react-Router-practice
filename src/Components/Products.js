import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Products = () => {

    const lineStyle = ({isActive})=>{
        return{
            fontWeight: isActive? 'bolder' : 'normal',
            textDecoration: isActive? 'none' : 'normal',
            backgroundColor : isActive? 'yellow' : "white"
        }
    }
  return (
    <>
    <div className='input'>
        <input type='search' placeholder='search items'></input>
    </div>
    <nav className='productLinks'>
        <NavLink style={lineStyle} to="featured" >Featured</NavLink>
        <NavLink style={lineStyle} to="new" >New</NavLink>
    </nav>
    <Outlet />
    </>
  )
}

export default Products
