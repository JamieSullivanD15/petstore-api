export interface Info {
  contact: {
    email: string;
  };
  description: string;
  license: {
    name: string;
    url: string;
  };
  termsOfService: string;
  title: string;
  version: string;
}

export interface Tag {
  description: string;
  externalDocs: {
    description: string;
    url: string;
  };
  name: string;
}

export interface Method {
  consumes: string[];
  description: string;
  operationId: string;
  parameters: [];
  produces: string[];
  responses: object;
  security: object[];
  summary: string;
  tags: string[];
}

export interface Path extends Method {
  [key: string]: {};
  path: string;
  methodType: HttpMethod;
}

export interface PathGroup extends Tag {
  paths: [];
}

export interface Definition {
  properties: object;
  type: string;
  required: [];
  xml: {
    name: string;
  };
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
