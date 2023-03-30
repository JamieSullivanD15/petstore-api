import React from 'react';

import Section from '../common/Section';
import Container from '../common/Container';
import { getColour } from '../../common/utils';
import ParamsInfo from './ParamsInfo';
import ResponsesInfo from './ResponsesInfo';

import type { HttpMethod, Method } from '../../common/types';

interface InfoSectionProps {
  method: Method;
  methodType: HttpMethod;
}

const InfoSection = ({ method, methodType }: InfoSectionProps) => {
  return (
    <Section>
      <Container>
        <div
          className={`
            py-4 
            sm:px-8
            px-4 
            mb-8 
            rounded 
            border 
            bg-${getColour(methodType)}-50
            border-${getColour(methodType)}-500`}
        >
          <ParamsInfo
            method={method}
            methodType={methodType}
          />
          <ResponsesInfo
            method={method}
            methodType={methodType}
          />
        </div>
      </Container>
    </Section>
  );
};

export default InfoSection;
