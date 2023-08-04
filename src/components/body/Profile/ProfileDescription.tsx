'use client'

import React, { ComponentProps, ReactNode } from 'react'

interface IProfileDescriptionProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function ProfileDescription({children, ...props}: IProfileDescriptionProps) {
  return (
    <div {...props}>
      {children}
    </div>
  )
}
