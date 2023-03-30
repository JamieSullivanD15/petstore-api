import React from 'react';

import Text from '../common/Text';
import Icon from '../common/Icon';
import { getColour } from '../../common/utils';

import type { Param } from './ParamsList';
import type { HttpMethod } from '../../common/types';

interface ParamsListMobileProps {
  params: [];
  methodType: HttpMethod;
}

const ParamsListMobile = ({ params, methodType }: ParamsListMobileProps) => {
  const colWidth = 'w-28';

  return (
    <div className='md:hidden'>
      <ul>
        {params.map((param: Param, i: number) => (
          <li
            key={i}
            className={`
              flex 
              flex-col 
              ${
                i === params.length - 1
                  ? ''
                  : `border-${getColour(methodType)}-500 border-b`
              }
              ${i === 0 ? 'pb-4' : 'py-4'}
              `}
          >
            <div className='flex flex-wrap  items-center mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Parameter</Text>
              <Text classNames={`${param.required ? 'font-medium' : ''}`}>
                {param.name}
              </Text>
            </div>
            <div className='flex flex-wrap  items-center mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Required</Text>
              {param.required ? (
                <Icon
                  icon='check2'
                  classNames='text-emerald-500 text-2xl text-center'
                />
              ) : (
                <Icon
                  icon='x'
                  classNames='text-red-500 text-3xl text-center'
                />
              )}
            </div>
            <div className='flex flex-wrap mb-1 '>
              <Text classNames={`${colWidth} text-slate-500 mr-1`}>
                Description
              </Text>
              <Text classNames='flex-grow'>{param.description}</Text>
            </div>
            <div className='flex flex-wrap  items-center mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Param Type</Text>
              <Text>{param.in}</Text>
            </div>
            <div className='flex flex-wrap items-center mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Data Type</Text>
              <Text>{param.type}</Text>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParamsListMobile;
