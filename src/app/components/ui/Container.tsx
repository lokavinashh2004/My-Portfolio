import React from 'react'
import { cn } from '@/lib/util'

type ContainerProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};


const Container = ({children, as = 'div', className}:ContainerProps) => {
  const Element = as;
  return (
    <Element className={cn('mx-auto w-full max-w-5xl lg:max-w-7xl',className)}>
        {children}
    </Element>
  )
}

export default Container