'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const HomeLayout = ({children}) => {
    const pathname = usePathname()
  return (
      <>
          {pathname === '/about' ? children : (
              <>
                  <Header />
                  {children}
                  <Footer />
                  </>
        )}
      </>
  )
}

export default HomeLayout