import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[80vh] bg-cover bg-center flex items-end p-5 m-3 rounded-lg' style={{backgroundImage : `url(https://i.pinimg.com/736x/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-xl text-white text-center w-full bg-gray-900/40 p-3'>
           Avengers Endgame
        </div>
    </div>
  )
}

export default Banner