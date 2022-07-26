import React from 'react'
import { render } from '@testing-library/react'
import Home from '../views/Home'
import '@testing-library/jest-dom'
import { Link, Router } from 'react-router-dom'


test ( 'render Home view' ,() => {
    
  render (
    <Router>
      <Link to="/">Home</Link>.
      <Home />,
    </Router>,
  )
})