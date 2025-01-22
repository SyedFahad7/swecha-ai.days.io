const lintStagedConfig = {
  '*.{js,jsx,mjs}': ['eslint --fix', 'prettier --write'],
  '*.{ts,tsx}': [() => 'tsc --project tsconfig.json', 'eslint --fix', 'prettier --write'],
  '*.{json,css,md}': ['prettier --write'],
};

export default lintStagedConfig;
