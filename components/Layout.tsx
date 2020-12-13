import React from 'react'
import { ThemeProvider } from 'next-themes'

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-light_lightGreyBlue dark:bg-dark_veryDarkGreyBlue2 min-h-screen bg-light-background dark:bg-dark-background bg-no-repeat bg-contain bg-center-top bg-fixed">
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
