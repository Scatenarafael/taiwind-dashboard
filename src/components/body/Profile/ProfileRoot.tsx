'use client'

import React, { ReactNode } from 'react'

interface IProfileRoot {
  children: ReactNode
}

export function ProfileRoot({children}: IProfileRoot) {
  return (
    <div className='flex items-center gap-4'>
      {children}
    </div>
  )
}
