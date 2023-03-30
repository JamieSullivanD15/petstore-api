import React from 'react';

interface IconProps {
  icon: string;
  classNames?: string;
}

const Icon = ({ icon, classNames = '' }: IconProps) => {
  return <i className={`bi bi-${icon} ${classNames}`} />;
};

export default Icon;
