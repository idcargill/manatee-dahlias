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

  constructor(config: RestConnectorConfig) {
    this.baseUrl = config.baseUrl;
  }

  public get = async (path: string) => {
    const response = await fetch(`${this.baseUrl}/${path}`);
    const data = await response.json();
    console.log(response);
    return data;
  };
}

export default RestConnector;
