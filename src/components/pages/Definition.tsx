import React from 'react';
import { useParams } from 'react-router-dom';

import { usePetstore } from '../../hooks/usePetstore';
import Error from '../common/Error';
import Spinner from '../common/spinner/Spinner';
import Schema from '../definition/Schema';
import Header from '../definition/Header';

const Definition = () => {
  const { type } = useParams();
  const { data, isLoading, error } = usePetstore();

  if (error) {
    return <Error message={error.message} />;
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  const definition = Object.entries(data.definitions).find(
    ([key]) => key === type
  );

  if (!definition) {
    return <Error />;
  }

  return (
    <div>
      <Header text={definition[0]} />
      <Schema definition={definition[1]} />
    </div>
  );
};

export default Definition;
