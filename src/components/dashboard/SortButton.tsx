import React from 'react';

import Button from '../common/Button';
import Text from '../common/Text';
import Icon from '../common/Icon';

interface SortButtonProps {
  text: string;
  onClick: () => void;
}

const SortButton = ({ text, onClick }: SortButtonProps) => {
  return (
    <Button
      onClick={onClick}
      classNames='text-slate-500 hover:bg-slate-300 bg-slate-200 w-24 sm:mx-2 my-2 sm:my-0'
    >
      <div className='flex justify-center items-center'>
        <Text>{text}</Text>
        <Icon
          icon='arrow-down-up'
          classNames='text-md text-slate-500 ml-2'
        />
      </div>
    </Button>
  );
};

export default SortButton;
