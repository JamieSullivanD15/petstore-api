import React, { ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  classNames?: string;
  type?: ButtonType;
}

const Button = ({
  children,
  onClick,
  classNames = '',
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        py-2 
        text-center
        rounded  
        ${classNames}
        ${classNames ? '' : 'text-white text-base'}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
