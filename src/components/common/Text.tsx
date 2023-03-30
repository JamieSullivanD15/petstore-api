import React, { ReactNode } from 'react';

interface TextProps {
  children: ReactNode | string;
  isSpan?: boolean;
  classNames?: string;
}

const Text = ({ children, isSpan, classNames = '' }: TextProps) => {
  const classes = `
    font-sans 
    break-all 
    ${classNames ? '' : 'text-base'} 
    ${classNames ? '' : 'text-slate-800'} 
    ${classNames}`;

  return isSpan ? (
    <span className={classes}>{children}</span>
  ) : (
    <p className={classes}>{children}</p>
  );
};

export default Text;
