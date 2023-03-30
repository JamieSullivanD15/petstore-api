import React from 'react';

interface LinkProps {
  url: string;
  label: string;
  isNewTab?: boolean;
  classNames?: string;
}

const Link = ({ url, label, isNewTab = true, classNames = '' }: LinkProps) => {
  return (
    <a
      className={`
        text-blue-700
        hover:text-emerald-500 
        font-sans 
        underline 
        inline-block 
        break-all
        ${classNames}
        ${classNames ? '' : 'text-base'}
      `}
      href={url}
      target={isNewTab ? '_blank' : '_self'}
      rel='noreferrer'
    >
      {label}
    </a>
  );
};

export default Link;
