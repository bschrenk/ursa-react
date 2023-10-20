import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle } from 'styled-components';
import { UrsaProvider } from '../src/ursaProvider'
import { defaultTheme } from '../src/defaultTheme';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    default: defaultTheme,
  },
  defaultTheme: 'default',
  Provider: UrsaProvider,
  GlobalStyles,
})];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
