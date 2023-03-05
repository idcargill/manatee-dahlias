
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/index.ts",
  // documents: "/src/**/*.graphql",
  generates: {
    "./src/schema/generatedGQL/": {
      preset: "client",
      plugins: ['typescript'],
    },
  },
};

export default config;
