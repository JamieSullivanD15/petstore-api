import React from 'react';
import { useParams } from 'react-router-dom';

import { usePetstore } from '../../hooks/usePetstore';
import Header from '../path/Header';
import InfoSection from '../path/InfoSection';
import Spinner from '../common/spinner/Spinner';
import Error from '../common/Error';

import type { HttpMethod } from '../../common/types';

const Path = () => {
  const { operationId } = useParams();
  const { data, isLoading, error } = usePetstore();

  if (error) {
    return <Error message={error.message} />;
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  let methodType = '' as HttpMethod;
  const pathInfo = Object.entries(data.paths).find(([key, path]) =>
    Object.entries(path).find(([key, method]) => {
      if (Object(method).operationId === operationId) {
        methodType = key.toUpperCase() as HttpMethod;
        return true;
      }
      return false;
    })
  );

  if (!pathInfo) {
    return <Error />;
  }

  const path = pathInfo[0];
  const method = pathInfo[1][methodType.toLowerCase()];

  return (
    <>
      <Header
        path={path}
        method={method}
        methodType={methodType}
      />
      <InfoSection
        method={method}
        methodType={methodType}
      />
    </>
  );
};

export default Path;
