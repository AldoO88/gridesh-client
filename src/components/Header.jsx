import React from 'react'
import logoUrl from '../assets/images/logoGridesh.png'
import logoUpavUrl from '../assets/images/upav-logo.png'

const Header = () => {
  return (
    <header className="flex flex-col ">
      <section className="flex flex-col flex-nowrap justify-center space-x-2 py-2 bg-orange-700 h-6">

      </section>
      <section className='flex flex-row justify-center items-center py-2 space-x-20 h-36'>
        <div className='flex justify-center items-center'>
          <img 
            className="hidden md:block max-w-[200px] max-h-[100px] w-auto h-auto object-contain"
            src={logoUrl} 
            alt="logoGridesh" 
          />
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl font-sans font-black text-blue-950'>COMPLEJO UNIVERSITARIO GRIDEHS</h1>
        </div>
        <div>
          <img 
            className="hidden md:block max-w-[250px] max-h-[150px] w-auto h-auto object-contain"
            src={logoUpavUrl} 
            alt="logo UPAV" 
          />
        </div>
      </section> 
    </header>
  )
}

export default Header