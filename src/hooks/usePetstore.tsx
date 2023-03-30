import { useQuery } from 'react-query';
import { fetchPetstore } from '../api/petstore';

import type { Info, Tag } from '../common/types';

interface PetstoreResponse {
  basePath: string;
  definitions: object;
  externalDocs: object;
  host: string;
  info: Info;
  paths: object;
  schemes: string[];
  securityDefinitions: object;
  swagger: string;
  tags: Tag[];
}

export const usePetstore = () =>
  useQuery<PetstoreResponse, Error>('petstore', fetchPetstore);
