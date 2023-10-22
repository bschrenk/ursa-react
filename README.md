# [Ursa React]()

Ursa React is a simple plain component library with the intention to provide clean simple components with no opinionated heavy CSS.

## Using the React components
### Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install ursa-react --save
```


## In you react app you can start using by adding the provider as below

```
root.render(
  <UrsaProvider customTheme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UrsaProvider>
);

```


## An optional custom theme can be applied or managed in your app to extend features of the library

```
// Define other any theme changes in your app
const customTheme = {
  colors: {
    primary: '',
  },
};

root.render(
  <UrsaProvider customTheme={customTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UrsaProvider>
);
```

## Add in the Global Styles to get a css reset and set fonts and things to remove default browsers styles

```
import { GlobalStyles, UrsaProvider } from 'ursa-react';

// Define other any theme changes in your app
const customTheme = {
  colors: {
    primary: '',
  },
};

root.render(
  <UrsaProvider customTheme={customTheme}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UrsaProvider>
);
```

## Take a tour of the storybook docs here 

[Ursa React Storybook Docs (https://bschrenk.github.io/ursa-react)](https://bschrenk.github.io/ursa-react)