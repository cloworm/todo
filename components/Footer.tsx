import { ReactElement } from 'react'
import { motion } from 'framer-motion'

export default function Footer(): ReactElement {
  return (
    <motion.footer
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="text-sm text-center mt-10 py-3">
        <a href="https://github.com/cloworm" target="_blank" rel="noopener noreferrer" className="group">
          <div className="inline-block github align-top h-4 w-4 bg-light_darkGreyBlue group-hover:bg-black dark:group-hover:bg-white transition ease-linear"></div>
          <span className="pl-1.5 text-light_darkGreyBlue dark:text-dark_veryDarkGreyBlue group-hover:text-black dark:group-hover:text-white transition ease-linear">CLOWORM</span>
        </a>
      </div>
    </motion.footer>
  )
}
