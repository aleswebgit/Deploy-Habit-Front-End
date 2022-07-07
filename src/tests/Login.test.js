import React from 'react'
import { render } from '@testing-library/react'
import Login from '../views/Login'
import LoginForm from '../components/LoginForm'

test ( 'render Login view' ,() => {
  render (<Login />)
    
  const view = render (<LoginForm /> )
  console.log(view)

})