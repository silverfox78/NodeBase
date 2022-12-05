# Demo

## Instalacion

### Inicia proyecto Node

```sh
node -v
# v18.12.1 (www.nodejs.org)
npm -v
# 9.1.3 o npm install npm@latest -g (www.npmjs.com)
git init
npm config set init-author-name "Samuel Barrera" -g
npm config set init-author-email "sbarrera@gmail.com" -g
npm config set init-author-url "https://github.com/silverfox78" -g
npm config set init-license "MIT" -g
npm init --yes
```

### Instalacion de Typescript / Jest - Supertest / Express - Cors / Prettier / Eslint

```sh
npm install --save-dev typescript ts-node jest supertest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-typescript
npm install --save-dev ts-jest @jest/globals @types/jest
npm install --save-dev @types/express @types/node
npm install --save-dev @typescript-eslint/eslint-plugin
npm install --save-dev prettier eslint
npm install --save-dev husky
npm install --save-dev turbo
npm install express dotenv
npm install cors
```

### Configuracion inicial de Typescript

```sh
npx tsc --init
```

### Configuracion inicial de Jest

```sh
npx ts-jest config:init
```

### Configuracion inicial de Husky

```sh
npx husky install
```

### Ajustes al proyecto

```sh
npm pkg set name='ProyectoNode'
npm pkg set description='Prueba'
npm pkg set main='dist/app.js'
npm pkg set scripts.test="jest -c ./jest.config.js"
npm pkg set scripts.test:coverage="jest --coverage -c ./jest.config.js"
npm pkg set scripts.lint='eslint . --fix'
npm pkg set scripts.prepare="husky install"
npm pkg set scripts.build="tsc"
npm pkg set scripts.dev="tsc && node dist/app.js"
npx husky add .husky/pre-commit "npm test"
```

### Descarga archivos comunes

```sh
mkdir -p .vscode
curl https://cdn.global.com/config/v1/vscode_settings.json -o ./.vscode/settings.json
curl https://cdn.global.com/config/v1/eslintrc.json -o .eslintrc.json
curl https://cdn.global.com/config/v1/prettierrc.json -o .prettierrc.json
curl https://cdn.global.com/config/v1/tsconfig.json -o tsconfig.json
curl https://cdn.global.com/config/v1/jest.config.js -o jest.config.js
curl https://cdn.global.com/config/v1/pre-commit -o ./.husky/pre-commit
curl https://cdn.global.com/config/v1/turbo.json -o .turbo.json
curl https://cdn.global.com/config/v1/LICENSE -o LICENSE
```

### Crear archivos base...

```sh
mkdir -p src && echo '' > ./src/app.ts
```