import type { MantineThemeOverride } from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
    primaryColor: 'indigo',
    globalStyles: (theme) => ({
        '*, *::before, *::after': {
            boxSizing: 'border-box',
        },

        a: {
            textDecoration: 'none',
            color: 'inherit',
        },
    }),
};