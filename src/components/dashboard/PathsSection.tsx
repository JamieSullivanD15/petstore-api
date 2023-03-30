import React from 'react';

import Container from '../common/Container';
import { PET, STORE, USER } from '../../common/constants';
import PathsGroup from './PathsGroup';
import Section from '../common/Section';

import type { Method, PathGroup, Tag } from '../../common/types';

interface PathsSectionProps {
  paths: object;
  tags: Tag[];
}

const PathsSection = ({ paths, tags }: PathsSectionProps) => {
  const getMethods = (path: string, pathObj: object, arr: any[]) => {
    Object.entries(pathObj).forEach(([key, value]) => {
      arr.push({
        ...(value as Method),
        path,
        methodType: key,
      });
    });
    return arr;
  };

  const getPathGroups = () => {
    // create object with a paths property for each tag key
    const pathsObj = tags.reduce(
      (acc: any, val: Tag) => ({
        ...acc,
        [val.name]: { ...val, paths: [] },
      }),
      []
    );

    // assign methods array with path and method type to each tag in pathsObj
    Object.entries(paths).forEach(([key, path]) => {
      if (key.includes(PET)) {
        pathsObj[PET].paths = getMethods(key, path, pathsObj[PET].paths);
      }
      if (key.includes(STORE)) {
        pathsObj[STORE].paths = getMethods(key, path, pathsObj[STORE].paths);
      }
      if (key.includes(USER)) {
        pathsObj[USER].paths = getMethods(key, path, pathsObj[USER].paths);
      }
    });

    return pathsObj;
  };

  return (
    <Section>
      <Container>
        {Object.values(getPathGroups() as PathGroup).map(
          (group: object, i: number) => (
            <PathsGroup
              key={i}
              group={group as PathGroup}
            />
          )
        )}
      </Container>
    </Section>
  );
};

export default PathsSection;
