import GraphqlApiServer from 'src/packages/GQL/server';
import { NextApiRequest, NextApiResponse } from 'next';

const gqlServer = new GraphqlApiServer();

const startServer = gqlServer.server.start();

export default async function GraphqlAPI(
  req: NextApiRequest,
  res: NextApiResponse<{ name: string }>
) {
  console.log('server starting');
  await startServer;
  await gqlServer.server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
