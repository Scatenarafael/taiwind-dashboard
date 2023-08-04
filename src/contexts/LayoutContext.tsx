'use client'

import { ReactNode, createContext, useState } from "react";



interface ILayoutProps {
  showNavMenu: boolean
  setShowNavMenu: (value: boolean) => void
}

export const LayoutContext = createContext({} as ILayoutProps);

type LayoutProviderProps = {
  children: ReactNode;
};

export function LayoutProvider({ children }: LayoutProviderProps) {
  const [showNavMenu, setShowNavMenu] = useState(true)

  return (
    <LayoutContext.Provider value={{showNavMenu, setShowNavMenu}}>
      {children}
    </LayoutContext.Provider>
  )
}