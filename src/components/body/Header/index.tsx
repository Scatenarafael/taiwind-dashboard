'use client'

import React from 'react'
import { Profile } from '../Profile'

export function Header() {
  return (
    <div className='h-16 bg-zinc-800 flex justify-between items-center p-5 text-xl text-amber-500 tracking-wide font-bold'>
      Dashboard

      <Profile.Root>
        <Profile.Description justfy='end'>
          <p className='my-1'>rafael.scatena</p>
          <p className='my-1'>rafascatena@gmail.com</p>
          <p className='my-1'>Desenvolvedor P&D</p>
        </Profile.Description>
        <Profile.Avatar avatar_url='https://github.com/Scatenarafael.png' delayMs={600}/>
      </Profile.Root>
    </div>
  )
}
