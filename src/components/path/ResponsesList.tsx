import React from 'react';

import Text from '../common/Text';
import { getColour, getDefinition } from '../../common/utils';
import Link from '../common/Link';

import type { HttpMethod } from '../../common/types';

interface ResponsesListProps {
  responses: object;
  methodType: HttpMethod;
}

const ResponsesList = ({ responses, methodType }: ResponsesListProps) => {
  return (
    <div className='max-md:hidden'>
      <div className={`flex pb-2 border-b border-${getColour(methodType)}-500`}>
        <Text classNames='w-60 text-slate-500'>HTTP Status Code</Text>
        <Text classNames='flex-grow text-slate-500'>Description</Text>
        <div className='flex flex-end'>
          <Text classNames='text-slate-500'>Model</Text>
        </div>
      </div>
      <ul>
        {Object.entries(responses).map(([key, value]) => (
          <li
            key={key}
            className='flex items-center mt-1'
          >
            <Text classNames='w-60 font-medium'>{key}</Text>
            <Text classNames='flex-grow'>{value.description}</Text>
            <div className='flex flex-end'>
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

export default ResponsesList;
