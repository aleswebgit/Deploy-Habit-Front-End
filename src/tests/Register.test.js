import React from 'react'
import { render } from '@testing-library/react'
import Register from '../Views/UserRegister'
import UserRegisterForm from '../Components/UserUserRegisterForm'

test ( 'render Register view' ,() => {
  render (<Register />)
    
  const view = render (<UserRegisterForm /> )
  console.log(view)

})