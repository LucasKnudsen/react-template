import { data } from '.'

export const VARIANTS = {
  backdrop: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
}

export const LOTTIE = {
  picture1() {
    lottie.loadAnimation({
      container: document.getElementsByClassName('picture-1'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: data.animation1,
    })
  },
}
