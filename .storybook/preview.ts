import type { Preview } from "@storybook/react";

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { UrsaProvider } from '../src/ursaProvider'
import { defaultTheme } from '../src/defaultTheme';
import { globalStyles } from '../src/globalStyles';

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
    },
    defaultTheme: 'default',
    Provider: UrsaProvider,
    GlobalStyles: globalStyles,
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
