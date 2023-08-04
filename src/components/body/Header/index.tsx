'use client'

import React, { useContext } from 'react'
import { Profile } from '../Profile'
import { AccordionRoot } from '../Accordion'
import { GiHamburgerMenu } from "react-icons/gi";
import { LayoutContext } from '@/contexts/LayoutContext';
import { VscChromeClose } from "react-icons/vsc";
import { BsEnvelopePaper, BsBell } from "react-icons/bs";

export function Header() {
  const {showNavMenu, setShowNavMenu} = useContext(LayoutContext)
  return (
    <div className='h-20 bg-zinc-500 flex justify-between items-center px-5 text-xl text-amber-500 tracking-wide font-bold'>
      <button 
        type='button' 
        className='bg-transparent border-0 text-amber-500 transition-all delay-1000' 
        onClick={()=>{setShowNavMenu(!showNavMenu)}}>
        {!showNavMenu ? <GiHamburgerMenu size={22} /> :  <VscChromeClose size={25} />}
      </button>

      <Profile.Root>
        <Profile.Description className='flex gap-8'>
          <BsEnvelopePaper size={20} />
          <BsBell size={20} />
        </Profile.Description>
        <Profile.Avatar avatar_url='https://github.com/Scatenarafael.png' delayMs={600}/>
      </Profile.Root>
    </div>
  )
}
