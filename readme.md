# TypeScript Template

## About

Just a template with everything I need to validate my .ts files with TypeScript and ESLint (and format other files with Prettier).

## Quick Start

1. Use `npm i` to install all dev dependencies.
1. Adjust your VS Code settings.
1. Enjoy!

## Local Development

1. `npm run dev` - start Vite development server
1. `npm run build` - create a production build in `dist` folder
1. `npm run preview` - start Vite server with production build
1. `npm run check` - check you code with TS and ESLint

## My Setup

-   Node 22.12.0
-   VS Code with ESLint and Prettier extensions installed.
-   Formatting/linting options in `settings.json` in VS Code:

    ```json
    {
        // General
        "js/ts.implicitProjectConfig.checkJs": true,

        // Formatting
        "html.format.wrapAttributes": "preserve-aligned",
        "editor.formatOnSave": true,
        "eslint.format.enable": true,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": "explicit"
        },
        "[markdown]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": false
        },
        "[html]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": false
        },
        "[css]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[scss]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": false
        },
        "[javascript]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        "[json]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": false
        },
        "[jsonc]": {
            "editor.defaultFormatter": "esbenp.prettier-vscode",
            "editor.formatOnSave": false
        },
        "[typescript]": {
            "editor.defaultFormatter": "dbaeumer.vscode-eslint"
        },
        "[typescriptreact]": {
            "editor.defaultFormatter": "dbaeumer.vscode-eslint"
        }
    }
    ```

## More info

ESLint has this cool little command to configure everything if we don't know which ESLint-related packages we need to install:  
`npm init @eslint/config@latest`  
Now it's not necessary to use it because we have everything in package.json and the npm i command is all we need.
