export interface RestConnectorConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface RestConnectorI {
  baseUrl: string;
  get?: (path: string) => string | Record<string, any>;
}

class RestConnector implements RestConnectorI {
  public baseUrl: string;
  private headers: Record<string, any> | undefined;

  constructor(config: RestConnectorConfig) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  public get = async (path: string) => {
    const urlString = `https://${this.baseUrl}/${path}`;
    const result = await fetch(urlString, {
      method: 'GET',
      headers: {
        ...this.headers,
      },
    })
      .then((res) => res.json())
      .then((data) => data);

    return result;
  };
}

export default RestConnector;
