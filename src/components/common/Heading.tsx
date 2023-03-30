import React, { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode | string;
  classNames?: string;
}

const Heading = ({ children, classNames = '' }: HeadingProps) => {
  return (
    <h1
      className={`text-4xl font-sans font-medium text-slate-8s00 ${classNames}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
