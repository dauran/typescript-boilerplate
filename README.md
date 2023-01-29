# Typescript Boilerplate

edit `.nvmrc` with the wanted node version

list of devDependencies

```bash
pnpm add -D @jest/types @types/jest @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-deprecation eslint-plugin-no-only-tests eslint-plugin-security eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-n jest prettier ts-jest ts-node typescript
```

Run the tests (jest)

```bash
pnpm run test:unit
pnpm run test:unit:watch
pnpm run test:unit:watch ./src/index.test.ts
```

Start the script

```bash
pnpm run start
```

Linter (eslint)

```bash
pnpm run lint
```

Formater (prettier)

```bash
pnpm run format
```
