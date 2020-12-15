import { ReactElement } from 'react'
// TODO add github link
export default function Footer(): ReactElement {
  return (
    <>
      <footer className="w-full">
        <p className="text-base text-center text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue py-3">
          <a href="https://github.com/cloworm" target="_blank" rel="no opener noreferrer">BY CLOWORM</a>
        </p>
      </footer>
    </>
  )
}
