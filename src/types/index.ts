import React, { FunctionComponent, LazyExoticComponent } from 'react';

export interface FireBaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export type RouteConfig<T extends unknown= unknown> = {
  [path: string]: LazyExoticComponent<FunctionComponent<React.FC<T>>>;
};
