'use client';
import React from 'react'

interface Props { 
    error: Error;//Next.js will auto pass error object to this component.
    reset: ()=> void;
}

const ErrorPage = ({error, reset} : Props) => {
    console.log('Error', error);
  return (
    <>
    <div>An unexpected error has occured.</div>
    <button className='btn' onClick={()=>reset()}>Try again</button>
    </>
  )
}

export default ErrorPage