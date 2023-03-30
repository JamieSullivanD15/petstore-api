import React from 'react';

import Section from '../common/Section';
import Container from '../common/Container';
import Heading from '../common/Heading';
import PreviousButton from '../common/PreviousButton';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <Section classNames='bg-slate-100 border-b border-slate-500 px-8'>
      <PreviousButton />
      <Container>
        <div className='flex justify-center'>
          <Heading>{text}</Heading>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
