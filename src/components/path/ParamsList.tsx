import React from 'react';

import Text from '../common/Text';
import Icon from '../common/Icon';
import { getColour } from '../../common/utils';

import type { HttpMethod } from '../../common/types';

export interface Param {
  description: string;
  in: string;
  name: string;
  required: boolean;
  type: string;
}

interface ParamsListProps {
  params: [];
  methodType: HttpMethod;
}

const ParamsList = ({ params, methodType }: ParamsListProps) => {
  const colWidth = 'w-24';

  return (
    <div className='max-md:hidden'>
      <div className={`flex pb-2 border-b border-${getColour(methodType)}-500`}>
        <Text classNames='w-36 text-slate-500'>Parameter</Text>
        <Text classNames={`text-center text-slate-500 ${colWidth}`}>
          Required
        </Text>
        <Text classNames='flex-grow text-slate-500'>Description</Text>
        <Text classNames={`text-right text-slate-500 ${colWidth}`}>
          Param Type
        </Text>
        <Text classNames={`text-right text-slate-500 ${colWidth}`}>
          Data Type
        </Text>
      </div>
      <ul>
        {params.map((param: Param, i: number) => (
          <li
            key={i}
            className='flex items-center mt-1'
          >
            <Text classNames={`w-36 ${param.required ? 'font-medium' : ''}`}>
              {param.name}
            </Text>
            {param.required ? (
              <Icon
                icon='check2'
                classNames={`${colWidth} text-emerald-500 text-xl text-center`}
              />
            ) : (
              <Icon
                icon='x'
                classNames={`${colWidth} text-red-500 text-2xl text-center`}
              />
            )}
            <Text classNames='flex-grow text-left'>{param.description}</Text>
            <Text classNames={`text-right ${colWidth}`}>{param.in}</Text>
            <Text classNames={`text-right ${colWidth}`}>{param.type}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParamsList;
