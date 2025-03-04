import React from 'react'
import { DevAbout, DevelopAbout } from '../../Components'

const About = () => {
  return (
    <>
      <div className="mt-5 pt-5 pb-5 d-flex justify-content-center">
        <h1>About</h1></div>
      <DevAbout>
        <DevelopAbout />
      </DevAbout>
      
    </>
  )
}

export default About