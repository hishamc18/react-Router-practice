import React from 'react'
import { NavLink } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Products from './Products'

const Navbar = () => {

    //can style class active using js fn or css styles using index.css
    const lineStyle = ({isActive})=>{
        return{
            fontWeight: isActive? 'bolder' : 'normal',
            textDecoration: isActive? 'none' : 'normal',
            backgroundColor : isActive? 'yellow' : "white"
        }
    }
  return (
    <nav className='nav'>
      <NavLink style={lineStyle} to='/' element={<Home />}>Home</NavLink>
      <NavLink style={lineStyle} to='/about' element={<About />}>About</NavLink>
      <NavLink style={lineStyle} to='/products' element={<Products />}>Products</NavLink>
    </nav>
  )
}

export default Navbar
