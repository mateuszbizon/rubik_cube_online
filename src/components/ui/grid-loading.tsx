import React from 'react'

function GridLoading() {
    const loadingArray = new Array(3).fill("")

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
        {loadingArray.map((item, index) => (
            <div key={index} className='space-y-5 animate-pulse'>
                <div className='w-full aspect-video bg-gray/50 rounded-xl'></div>
                <div className='h-5 rounded-full bg-gray/50'></div>
            </div>
        ))}
    </div>
  )
}

export default GridLoading