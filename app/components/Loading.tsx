import React from 'react'
import Lottie from 'react-lottie'
import loading from '@/public/loading.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center z-1000'>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400} />
    </div>
  )
}

export default Loading
