import React, { ReactNode } from 'react'

interface INavItem {
  children: ReactNode
}

export default function NavItem({children}: INavItem) {
  return (
    <div
      className='flex justify-center py-3 hover:bg-zinc-400 rounded-lg'
      >
        {children}
    </div>
  )
}
