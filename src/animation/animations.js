export const indexAnimation = () => ({
  initial: {
    height: '100vh',
    overflow: 'hidden',
  },
  animate: {
    height: 'auto',
    overflow: 'auto',
    transition: {
      duration: 0,
      delay: 2,
    },
  },
})

export const barAnimation = (duration) => ({
  initial: {
    transform: 'scaleY(0)',
  },
  animate: {
    transform: 'scaleY(1)',
    transition: {
      delay: 0.1,
      duration: duration ?? 0.7,
      ease: 'easeOut',
    },
  },
})

export const wiperAnimation = (duration, delay) => ({
  initial: {
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  },
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      delay: delay ?? 0.5,
      duration: duration ?? 0.5,
      ease: 'easeOut',
    },
  },
})

export const wiperLeftAnimation = () => ({
  initial: {
    clipPath: 'polygon(0% 0%,0% 0%,0% 100%,0% 100%)',
  },
  animate: {
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    transition: {
      delay: 1.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  },
})

export const showPageContent = () => ({
  initial: {
    display: 'none',
  },
  animate: {
    display: 'block',
    transition: {
      delay: 2,
    },
  },
})

export const headerAnimation = () => ({
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.9,
      duration: 0.3,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
  },
})

export const fadeInUp = () => ({
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: 20,
    opacity: 0,
  },
})

export const staggerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
}
