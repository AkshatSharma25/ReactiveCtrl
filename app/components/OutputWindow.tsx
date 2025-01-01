import React from 'react'

const OutputWindow = ({ visible, output,show,language }) => {
  if (!visible) return
  if (!show) {
    return (
      <div className='bg-[#171c1d] border-2 border-red-600 text-white  rounded-2xl p-4 w-[50vw] h-[80vh] z-10 absolute top-[10vh] overflow-hidden'>
      <div className='w-full flex justify-center items-center border-b-2 border-red-600'>OUTPUT WINDOW - {language}</div>
      <img src="/loader.gif" alt="" />
    </div>  
    )
  }
  return (
    <div className='bg-[#171c1d] border-2 border-red-600 text-white  rounded-2xl p-4 w-[50vw] h-[80vh] z-10 absolute top-[10vh]'>
      <div className='w-full flex justify-center items-center  border-b-2 border-red-600 mb-2 pb-2'>OUTPUT WINDOW - {language}</div>
      <pre className='text-wrap'>{output}</pre>
    </div>
  )
}

export default OutputWindow
