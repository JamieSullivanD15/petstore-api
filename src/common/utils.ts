import { DELETE, GET, POST, PUT } from './constants';

import type { HttpMethod } from './types';

export const getColour = (method: HttpMethod) => {
  let colour = '';
  switch (method) {
    case GET:
      colour = 'blue';
      break;
    case PUT:
      colour = 'amber';
      break;
    case POST:
      colour = 'emerald';
      break;
    case DELETE:
      colour = 'red';
      break;
    default:
      break;
  }
  return colour;
};

export const getDefinition = (definition: string) => {
  const split = definition.split('definitions/');
  return split[1];
};
