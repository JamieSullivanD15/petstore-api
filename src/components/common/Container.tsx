import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  classNames?: string;
}

const Container = ({ children, classNames = '' }: ContainerProps) => {
  return (
    <div className={`w-full max-w-5xl md:px-6 py-6 px-12 ${classNames}`}>
      {children}
    </div>
  );
};

export default Container;
