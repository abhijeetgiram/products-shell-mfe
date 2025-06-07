# Products Shell MFE

## Localhost URLs

Products Shell MFE URL:
<a href="http://localhost:5000/" target="_blank">http://localhost:5000/</a>

Products Remote MFE URL:
<a href="http://localhost:5001/" target="_blank">http://localhost:5001/</a>

Orders Remote MFE URL:
<a href="http://localhost:5002/" target="_blank">http://localhost:5002/</a>

## Production URLs

Products Shell MFE URL:
<a href="https://products-shell-mfe.vercel.app/" target="_blank">https://products-shell-mfe.vercel.app/</a>

Products Remote MFE URL:
<a href="https://products-remote-mfe.vercel.app/" target="_blank">https://products-remote-mfe.vercel.app/</a>

Orders Remote MFE URL:
<a href="https://orders-remote-mfe.vercel.app/" target="_blank">https://orders-remote-mfe.vercel.app/</a>

# Local Setup

## Shell App

- npm install
- npm run dev

## Remote App

- npm install
- npm run preview:mfe

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
