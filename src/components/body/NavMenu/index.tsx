import Image from 'next/image'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import Logo from '../../../assets/logo.png'
import NavItem from './NavItem'

interface INavMenu extends ComponentProps<'div'> {

}

export const NavMenu = forwardRef<ElementRef<'div'>, INavMenu>(
  ({...props }: INavMenu, ref) => {
    return (
      <div 
      className='flex flex-col h-screen w-1/6 bg-zinc-500 border-r-2 border-zinc-900'
      >
      <div className='h-28 w-full flex items-center justify-center text-4xl'>
        Logo
      </div>
      <div className='flex flex-col p-4'>
        <NavItem>Luffy</NavItem>
        <NavItem>Zoro</NavItem>
        <NavItem>Sanji</NavItem>
        <NavItem>Nami</NavItem>
        <NavItem>Robin</NavItem>
      </div>
    </div>
    )    
  })

  
  NavMenu.displayName = 'NavMenu'