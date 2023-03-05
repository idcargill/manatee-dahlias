import { ApolloServer } from 'apollo-server-micro';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  //   ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import DataSources from './dataSources';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import resolvers from './resolvers';
import path from 'path';

// Merge Schema
const mergedSchemaAsync = () => {
  const loadedFiles = loadFilesSync(
    path.join('./src/packages/GQL/dataSources/**/schema/*.graphql')
  );
  const mergedSchema = mergeTypeDefs(loadedFiles);
  return mergedSchema;
};

// Join Context
const mergedContext = DataSources.reduce((accu, source) => {
  Object.assign(accu, { [source.namespace]: source.context() });
  return accu;
}, {});

class GraphqlApiServer {
  public server: ApolloServer;
  static mergedContext = mergedContext;

  constructor() {
    this.server = this.buildServer();
  }

  private buildServer = () => {
    const schema = mergedSchemaAsync();

    const server = new ApolloServer({
      typeDefs: schema,
      resolvers: resolvers,
      csrfPrevention: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });

    return server;
  };
}

export default GraphqlApiServer;
