import React from 'react';

import Text from '../common/Text';
import { getColour } from '../../common/utils';
import ResponsesList from './ResponsesList';
import ResponsesListMobile from './ResponsesListMobile';

import type { HttpMethod, Method } from '../../common/types';

interface ResponsesInfoProps {
  method: Method;
  methodType: HttpMethod;
}

const ResponsesInfo = ({ method, methodType }: ResponsesInfoProps) => {
  return (
    <>
      <Text
        classNames={`
          text-xl 
          font-medium 
          mb-2 
          mt-6 
          max-md:mt-2 
          text-${getColour(methodType)}-500`}
      >
        Responses
      </Text>
      <ResponsesList
        responses={method.responses}
        methodType={methodType}
      />
      <ResponsesListMobile
        responses={method.responses}
        methodType={methodType}
      />
    </>
  );
};

export default ResponsesInfo;
