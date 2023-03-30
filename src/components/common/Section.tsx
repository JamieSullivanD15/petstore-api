import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  classNames?: string;
}

const Section = ({ children, classNames = '' }: SectionProps) => {
  return (
    <section className={`flex justify-center py-2 ${classNames}`}>
      {children}
    </section>
  );
};

export default Section;
