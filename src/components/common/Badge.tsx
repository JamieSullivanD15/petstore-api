import React from 'react';

interface BadgeProps {
  text: string;
  classNames: string;
}

const Badge = ({ text, classNames = '' }: BadgeProps) => {
  return (
    <div
      className={`
        py-2 
        w-20 
        text-center 
        text-white 
        text-sm 
        uppercase 
        font-medium 
        rounded 
        ${classNames}`}
    >
      {text}
    </div>
  );
};

export default Badge;
