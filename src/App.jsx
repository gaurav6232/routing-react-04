import React from 'react'
import Product from './Product'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav/>
      <h1>
        kya be aur bta
      </h1>
      {/*-------------------*/}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App