import React from 'react'
import { render } from '@testing-library/react'
import Register from '../views/Register'
import RegisterForm from '../components/RegisterForm'

test ( 'render Register view' ,() => {
  render (<Register />)
    
  const view = render (<RegisterForm /> )
  console.log(view)

})