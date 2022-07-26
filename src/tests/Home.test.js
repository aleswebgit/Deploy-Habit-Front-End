import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Home from '../views/Home'


test('render Home view', () => {
  render(

    <Router>   
      <Home/>
    </Router>
  )
})


