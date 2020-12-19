import React, { ReactElement } from 'react'
import { ThemeProvider } from 'next-themes'

import usePreloadBgImages from './hooks/usePreloadBgImages'

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  usePreloadBgImages()

  return (
    <ThemeProvider attribute="class">
      <div className={`
        transition-all
        ease-linear
        bg-light_veryLightGreyBlue
        dark:bg-dark_veryDarkBlue
        min-h-screen
        bg-mobile-light-background
        dark:bg-mobile-dark-background
        sm:bg-light-background
        sm:dark:bg-dark-background
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
