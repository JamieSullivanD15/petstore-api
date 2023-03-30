import React from 'react';

import Container from '../common/Container';
import Heading from '../common/Heading';
import Text from '../common/Text';
import Link from '../common/Link';
import Section from '../common/Section';

import type { Info } from '../../common/types';

interface InfoSectionProps {
  info: Info;
}

const InfoSection = ({ info }: InfoSectionProps) => {
  const { title, description, license, termsOfService } = info;

  const formatDescription = (description: string) => {
    // find url values
    const urlMatches = description.match(/(?<=\().*?(?=\))/g);

    if (!urlMatches) {
      return description;
    }

    // remove url values
    description = description.replaceAll(/\((.*?)\)/g, '');

    return description.split(/\[(.*?)\]/).map((part: string, i: number) => {
      if (/^http:\/\/swagger.io$/.test(part)) {
        return (
          <Link
            key={i}
            url={urlMatches[0]}
            label={part}
          />
        );
      }
      if (/^irc.freenode.net, #swagger$/.test(part)) {
        return (
          <Link
            key={i}
            url={urlMatches[1]}
            label={part}
          />
        );
      }
      return part;
    });
  };

  return (
    <Section classNames='bg-slate-100 border-b border-slate-500'>
      <Container>
        <div className='flex flex-col items-center mb-4'>
          <Heading classNames='mb-2'>{title}</Heading>
          <div>
            <Text
              classNames='mr-2 font-medium'
              isSpan
            >
              Base Url:
            </Text>
            <Text isSpan>petstore.swagger.io/v2</Text>
          </div>
          <Link
            url='https://petstore.swagger.io/v2/swagger.json'
            label='https://petstore.swagger.io/v2/swagger.json'
          />
        </div>
        <Text>{formatDescription(description)}</Text>
        <div className='mt-4'>
          <Link
            url={termsOfService}
            label='Terms of Service'
            classNames='mb-1 mr-6'
          />
          <Link
            url={license.url}
            label={license.name}
          />
        </div>
      </Container>
    </Section>
  );
};

export default InfoSection;
