import React from 'react';
import Text from '../common/Text';
import Link from '../common/Link';
import { getDefinition } from '../../common/utils';

interface PropertyProps {
  type: string;
  value: string;
  isRef?: boolean;
  classNames?: string;
}

const Property = ({ type, value, isRef, classNames = '' }: PropertyProps) => {
  return (
    <div className={`flex flex-wrap justify-between mb-2 ${classNames}`}>
      <Text classNames='text-2xl'>{type}</Text>
      {isRef ? (
        <Link
          url={`/definition/${getDefinition(value)}`}
          label={getDefinition(value)}
          isNewTab={false}
          classNames='text-2xl'
        />
      ) : (
        <Text classNames='text-2xl text-blue-500'>{value}</Text>
      )}
    </div>
  );
};

export default Property;
