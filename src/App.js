import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import About from './Components/About'
import Navbar from './Components/Navbar'
import OrderSummary from './Components/OrderSummary'
import NoMatch from './Components/NoMatch'
import Products from './Components/Products'
import Featured from './Components/Featured'
import NewProducts from './Components/NewProducts'
import Users from './Components/Users'
import UserDetails from './UserDetails'
import Admin from './Admin'

const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback={<div>Loading...</div>}><LazyAbout /></React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':usersId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}
export default App
