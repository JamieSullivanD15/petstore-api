import React from 'react';

import Text from '../common/Text';
import { getColour } from '../../common/utils';
import ParamsList from './ParamsList';
import ParamsListMobile from './ParamsListMobile';

import type { HttpMethod, Method } from '../../common/types';

interface ParamsInfoProps {
  method: Method;
  methodType: HttpMethod;
}

const ParamsInfo = ({ method, methodType }: ParamsInfoProps) => {
  return (
    <>
      <Text
        classNames={`
          text-xl 
          font-medium 
          mb-2 
          text-${getColour(methodType)}-500`}
      >
        Parameters
      </Text>
      <ParamsList
        params={method.parameters}
        methodType={methodType}
      />
      <ParamsListMobile
        params={method.parameters}
        methodType={methodType}
      />
    </>
  );
};

export default ParamsInfo;
