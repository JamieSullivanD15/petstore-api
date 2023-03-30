import React from 'react';

import Section from '../common/Section';
import Container from '../common/Container';
import Heading from '../common/Heading';
import Badge from '../common/Badge';
import { getColour } from '../../common/utils';
import Text from '../common/Text';
import PreviousButton from '../common/PreviousButton';

import type { HttpMethod, Method } from '../../common/types';

interface HeaderProps {
  method: Method;
  methodType: HttpMethod;
  path: string;
}

const Header = ({ method, methodType, path }: HeaderProps) => {
  return (
    <Section classNames='bg-slate-100 border-b border-slate-500 px-8'>
      <PreviousButton />
      <Container>
        <div className='flex flex-col items-center bg-slate-100'>
          <Heading>{method.operationId}</Heading>
          <div className='flex flex-wrap justify-center items-center mt-8'>
            <Badge
              text={methodType}
              classNames={`bg-${getColour(methodType)}-500 mb-4`}
            />
            <Text classNames='text-xl ml-6 mb-4'>{path}</Text>
          </div>
          <Text classNames='text-xl'>
            {method.description ? method.description : method.summary}
          </Text>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
