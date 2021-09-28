import React from 'react'
import Lottie from 'react-lottie'

const CustomLottie = ({
  animationData,
  height = '100%',
  width = '100%',
  containerClass,
  ...options
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    ...options,
  }

  return (
    <div className={containerClass}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  )
}

export default CustomLottie
