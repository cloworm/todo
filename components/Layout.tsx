import React from 'react'
import { ThemeProvider } from 'next-themes'


const Layout = ({ children }: any) => {



  return (
    <ThemeProvider attribute="class">
      <div className="bg-light_lightGreyBlue dark:bg-dark_veryDarkGreyBlue min-h-screen bg-light-background bg-no-repeat bg-contain bg-center-top bg-fixed">
        <main className="mt-4">{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
