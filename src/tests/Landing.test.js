import React from 'react';
import { render } from '@testing-library/react'
import Landing from '../views/Landing'
import landingPic from '../media/landingPic.png';


test ( 'printed Landing view' ,() => {
    let image = {
        src : {landingPic}
    }

    render (<Landing />);
    const view = render (<Landing image = {landingPic} /> )
    console.log(view)

})