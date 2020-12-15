import React, { ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <ThemeProvider attribute="class">
      <div className={`
        bg-light_lightGreyBlue
        dark:bg-dark_veryDarkBlue
        min-h-screen
        bg-mobile-light-background
        dark:bg-mobile-dark-background
        md:bg-light-background
        md:dark:bg-dark-background
        bg-no-repeat
        bg-contain
        bg-center-top
        bg-fixed
      `}>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
