import React from 'react';
import { render } from '@testing-library/react'
import Login from '../views/Login'

test ( 'printed Login view' ,() => {
    render (<Login />);

})