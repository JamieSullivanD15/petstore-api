import React from 'react';

import PathItem from './PathItem';

import type { Path } from '../../common/types';

interface PathsListProps {
  paths: Path[];
}

const PathsList = ({ paths }: PathsListProps) => {
  return (
    <ul>
      {paths.map((path, i: number) => (
        <PathItem
          key={i}
          item={path}
        />
      ))}
    </ul>
  );
};

export default PathsList;
