import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';
import React from 'react';

interface UrsaProviderProps {
    children: ReactNode;
    customTheme?: DefaultTheme;
}

const UrsaProvider: React.FC<UrsaProviderProps> = ({ children, customTheme }) => {
    // Merge the custom theme with the default theme
    const themeData = {
        ...defaultTheme,
        ...customTheme,
    };

    return (
        <ThemeProvider theme={themeData} >
            {children}
        </ThemeProvider>
    );
}

export { UrsaProvider };

