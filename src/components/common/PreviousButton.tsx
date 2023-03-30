import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Icon from './Icon';

const PreviousButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)}>
      <Icon
        icon='arrow-left-circle'
        classNames='text-4xl text-slate-800 hover:text-emerald-500 '
      />
    </Button>
  );
};

export default PreviousButton;
