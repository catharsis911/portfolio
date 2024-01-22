import React from 'react'
import Footer from '../Components/Footer'

function Projects() {
  return (
    <div id='projects'>
      <div className='block max-w-[930px] mx-auto p-16'>
       <div className='bg-greyIsh flex justify-start p-8'>
         <a href='https://catharsis911.github.io/first_portfolio/' className='hover:cursor-pointer w-[32%]'><img src={'firstportfolio.PNG'}/></a>
         <div className='textSection block ml-10 w-[52%]'>
          <h1 className='text-[30px] font-bold'>My first portfolio</h1>
          <p className='text-[18px] leading-7 font-normal'>A portfolio of my projects that I made during the course of the <a href='https://www.freecodecamp.org/learn' className='font-bold hover:text-violetColor'>freeCodeCamp.</a></p>
         </div>
        
       </div>
      </div>
     <Footer/>
    </div>
  )
}

export default Projects