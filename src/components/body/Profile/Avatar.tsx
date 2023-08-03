'use client'
import * as Avatar from '@radix-ui/react-avatar';
import { ComponentProps, ElementRef, forwardRef } from 'react';

interface IAvatarProps extends ComponentProps<typeof Avatar.Root> {
  avatar_url?: string
  delayMs?: number
  fallback_content?: string
}


export const AvatarField = forwardRef<ElementRef<typeof Avatar.Root>, IAvatarProps>(
    ({avatar_url= 'https://github.com/Scatenarafael', delayMs= 600, fallback_content= 'RS', ...props }: IAvatarProps, ref) => {
    return (
      <Avatar.Root className='inline-flex items-center justify-center rounded-full w-12 h-12 overflow-hidden select-none' ref={ref} {...props}>
        <Avatar.Image src={avatar_url} className='w-full h-full object-cover' />
        <Avatar.Fallback className='bg-zinc-600 w-full h-full flex justify-center items-center' delayMs={delayMs}>
          {fallback_content}
        </Avatar.Fallback>
      </Avatar.Root>
    )
  }
)

AvatarField.displayName = 'AvatarField'