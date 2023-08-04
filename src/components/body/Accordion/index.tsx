'use client'

import React, { ComponentProps, ReactNode } from 'react'
import * as Accordion from '@radix-ui/react-accordion';

interface IAccordionRoot {
  type?: "single" | "multiple"
  children: ReactNode
  content: ReactNode
}


export function AccordionRoot({ type='single', children, content}: IAccordionRoot) {
  return (
    <Accordion.Root type={type} collapsible orientation="horizontal">
    <Accordion.Item value='item-1'>
        <Accordion.Trigger>
          {children}
        </Accordion.Trigger>
      <Accordion.Content>
        {content}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
  )
}
