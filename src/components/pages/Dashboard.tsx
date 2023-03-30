import React from 'react';

import { usePetstore } from '../../hooks/usePetstore';
import InfoSection from '../dashboard/InfoSection';
import PathsSection from '../dashboard/PathsSection';
import Spinner from '../common/spinner/Spinner';
import Error from '../common/Error';

const Dashboard = () => {
  const { data, isLoading, error } = usePetstore();

  if (error) {
    return <Error message={error.message} />;
  }

  if (isLoading || !data) {
    return <Spinner />;
  }

  return (
    <div>
      <InfoSection info={data.info} />
      <PathsSection
        paths={data.paths}
        tags={data.tags}
      />
    </div>
  );
};

export default Dashboard;
