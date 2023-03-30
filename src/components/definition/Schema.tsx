import React from 'react';

import Section from '../common/Section';
import Container from '../common/Container';
import Text from '../common/Text';
import Property from './Property';

import type { Definition } from '../../common/types';

interface SchemaProps {
  definition: Definition;
}

const Schema = ({ definition }: SchemaProps) => {
  return (
    <Section>
      <Container>
        <div className='flex justify-center'>
          <div className='max-w-sm w-full'>
            <div className='flex flex-wrap mb-2'>
              <Text classNames='text-2xl mr-20'>type</Text>
              <Text classNames='text-2xl text-blue-500'>{definition.type}</Text>
            </div>
            <Text classNames='text-2xl'>{'properties: {'}</Text>
            <div className='flex mt-2'>
              <div className='w-full'>
                {Object.entries(definition.properties).map(([key, value]) => (
                  <Property
                    key={key}
                    type={key}
                    value={value.type || value.$ref}
                    isRef={value.$ref}
                    classNames='px-4'
                  />
                ))}
              </div>
            </div>
            <Text classNames='text-2xl'>{'}'}</Text>
            {definition.required && (
              <>
                <Text classNames='text-2xl mt-2'>{'required: ['}</Text>
                <div className='flex flex-col flex-wrap px-4 mt-2'>
                  {definition.required.map((item: string) => (
                    <Text classNames='text-2xl mb-2'>{item},</Text>
                  ))}
                </div>
                <Text classNames='text-2xl'>{']'}</Text>
              </>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Schema;
