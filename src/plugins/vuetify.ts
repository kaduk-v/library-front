import { type ThemeDefinition } from 'vuetify'

export enum VuetifyTheme {
  Light = 'light',
  Dark = 'dark',
}

export const themes: Record<VuetifyTheme, ThemeDefinition> = {
  [VuetifyTheme.Light]: {
    colors: {
      background: '#f4f5fb',
      surface: '#fff',
      primary: '#8b57ff',
      secondary: '#424242',
      accent: '#16b1ff',
      error: '#FF5252',
      info: '#8c57ff',
      success: '#56ca00',
      warning: '#ffb400',
    },
  },

  [VuetifyTheme.Dark]: {
    colors: {
      primary: '#61AFEF',
      secondary: '#98C379',
      accent: '#E06C75',
      background: '#282C34',
      surface: '#3C4048',
      error: '#E06C75',
      info: '#61AFEF',
      success: '#98C379',
      warning: '#E5C07B',
    },
  },
}
