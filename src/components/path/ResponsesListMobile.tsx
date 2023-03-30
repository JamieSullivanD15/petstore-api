import React from 'react';

import Text from '../common/Text';
import { getColour, getDefinition } from '../../common/utils';
import Link from '../common/Link';

import type { HttpMethod } from '../../common/types';

interface ResponsesListMobileProps {
  responses: object;
  methodType: HttpMethod;
}

const ResponsesListMobile = ({
  responses,
  methodType,
}: ResponsesListMobileProps) => {
  const colWidth = 'w-40';

  return (
    <div className='md:hidden'>
      <ul>
        {Object.entries(responses).map(([key, value], i: number) => (
          <li
            key={key}
            className={`
              flex 
              flex-col               
              ${
                i === Object.values(responses).length - 1
                  ? ''
                  : `border-${getColour(methodType)}-500 border-b`
              }
              ${i === 0 ? 'pb-4' : 'py-4'}`}
          >
            <div className='flex flex-wrap mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>
                HTTP Status Code
              </Text>
              <Text classNames='font-medium'>{key}</Text>
            </div>
            <div className='flex flex-wrap mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Description</Text>
              <Text>{value.description}</Text>
            </div>
            <div className='flex flex-wrap mb-1'>
              <Text classNames={`${colWidth} text-slate-500`}>Model</Text>
              {value.schema?.items?.$ref && (
                <Link
                  key={key}
                  url={`/definition/${getDefinition(value.schema.items.$ref)}`}
                  label={getDefinition(value.schema.items.$ref)}
                  isNewTab={false}
                />
              )}
              {value.schema?.$ref && (
                <Link
                  key={key}
                  url={`/definition/${getDefinition(value.schema.$ref)}`}
                  label={getDefinition(value.schema.$ref)}
                  isNewTab={false}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsesListMobile;
