import React, { useCallback, useEffect, useState, useRef } from 'react';

import Text from '../common/Text';
import PathsList from './PathsList';
import Icon from '../common/Icon';
import Button from '../common/Button';
import SortButton from './SortButton';

import type { Path, PathGroup } from '../../common/types';

interface PathsGroupProps {
  group: PathGroup;
}

const PathsGroup = ({ group }: PathsGroupProps) => {
  const [paths, setPaths] = useState(group.paths);
  const firstUpdate = useRef(true);
  const [showPaths, setShowPaths] = useState(false);
  const [isAsc, setIsAsc] = useState(false);

  const sortItems = useCallback(
    (key: string) => {
      const asc = !isAsc;
      let sortedItems = group.paths;

      sortedItems = sortedItems.sort((a: Path, b: Path) => {
        if (a[key] < b[key]) {
          return asc ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return asc ? 1 : -1;
        }
        return 0;
      });

      setPaths(sortedItems);
      setIsAsc(asc);
    },
    [group.paths, isAsc]
  );

  useEffect(() => {
    if (firstUpdate.current) {
      sortItems('path');
      firstUpdate.current = false;
      return;
    }
  }, [sortItems]);

  return (
    <div className='p-4 bg-slate-100 mb-8 rounded border border-slate-500'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-wrap flex-col sm:flex-row'>
          <div className='flex flex-col sm:flex-row sm:items-center mr-4'>
            <Text
              isSpan
              classNames='font-medium text-xl w-16'
            >
              {group.name}
            </Text>
            <Text
              isSpan
              classNames='font-light text-slate-500'
            >
              {group.description}
            </Text>
          </div>
          {showPaths && (
            <div className='flex flex-col sm:flex-row sm:items-center mr-4'>
              <SortButton
                text='Path'
                onClick={() => sortItems('path')}
              />
              <SortButton
                text='Method'
                onClick={() => sortItems('methodType')}
              />
            </div>
          )}
        </div>
        <div>
          <Button onClick={() => setShowPaths((prevState) => !prevState)}>
            <Icon
              icon={`caret-${showPaths ? 'up' : 'down'}-fill`}
              classNames='text-xl text-slate-500'
            />
          </Button>
        </div>
      </div>
      {showPaths && <PathsList paths={paths} />}
    </div>
  );
};

export default PathsGroup;
