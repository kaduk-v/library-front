import { type ThemeDefinition } from 'vuetify'

export enum VuetifyTheme {
  Light = 'light',
  Dark = 'dark',
}

export const themes: Record<VuetifyTheme, ThemeDefinition> = {

  [VuetifyTheme.Light]: {
    colors: {
      primary: '#8c57ff',
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
      primary: '#9163f4',
      secondary: '#424242',
      accent: '#FF4081',
      error: '#FF5252',
      info: '#9163f4',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  },
}
