'use client'

import React, { ReactNode } from 'react'

interface IProfileDescriptionProps {
  children: ReactNode
  justfy?: 'start' | 'end'
}

export function ProfileDescription({children, justfy= 'end'}: IProfileDescriptionProps) {
  return (
    <div className={`text-xs text-${justfy}`}>
      {children}
    </div>
  )
}
