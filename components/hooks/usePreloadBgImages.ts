import { useEffect } from 'react'

import useIsMounted from './useIsMounted'

const usePreloadBgImages = (): void => {
  const isMounted = useIsMounted()

  useEffect(() => {
    [
      '/images/bg-desktop-dark.jpg',
      '/images/bg-desktop-light.jpg',
      '/images/bg-mobile-dark.jpg',
      '/images/bg-mobile-light.jpg'
    ].forEach((image) => {
      if (!isMounted) return

      const preloaded = new Image()
      preloaded.src = image
    })
  }, [isMounted])
}

export default usePreloadBgImages
