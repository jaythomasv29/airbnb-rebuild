import React from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from '@heroicons/react/solid'


function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left Section */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image 
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'         
        />
      </div>
      {/* Middle Search Section */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-md'>
        <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your search'/>
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2'/>
      </div>
      {/* Right Section */}
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6'/>
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full '>
          <MenuIcon className='h-6 cursor-pointer'/>
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>

      </div>
    </header>
  )
}

export default Header