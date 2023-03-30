import React from 'react';

import { getColour } from '../../common/utils';
import Badge from '../common/Badge';
import Link from '../common/Link';
import Text from '../common/Text';
import Icon from '../common/Icon';

import type { HttpMethod, Path } from '../../common/types';

interface PathItemProps {
  item: Path;
}

const PathItem = ({ item }: PathItemProps) => {
  const { methodType, path, operationId, summary, security } = item;
  const lockIcon = security ? 'lock-fill' : 'unlock-fill';
  const method = methodType.toUpperCase() as HttpMethod;

  return (
    <li
      className={`
        py-2 
        px-4 
        my-4 
        rounded-md 
        border 
        flex 
        items-center 
        justify-between
        bg-${getColour(method)}-50
        border-${getColour(method)}-500
        `}
    >
      <div className='flex flex-col flex-wrap sm:flex-row sm:items-center'>
        <Badge
          text={method}
          classNames={`bg-${getColour(method)}-500`}
        />
        <Link
          url={`/path/${operationId}`}
          label={path}
          isNewTab={false}
          classNames='sm:mx-4 my-2 font-medium'
        />
        <Text classNames='text-slate-700 font-light'>{summary}</Text>
      </div>
      <Icon
        icon={lockIcon}
        classNames='text-slate-500 text-xl'
      />
    </li>
  );
};

export default PathItem;
