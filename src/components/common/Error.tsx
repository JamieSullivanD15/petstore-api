import React from 'react';

import Heading from './Heading';

interface ErrorProps {
  message?: string;
}

const Error = ({ message = 'Something went wrong' }: ErrorProps) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='flex flex-col items-center'>
        <Heading classNames='text-red-500 mb-2'>Error</Heading>
        <span className='text-slate-800 text-2xl'>{message}</span>
      </div>
    </div>
  );
};

export default Error;
