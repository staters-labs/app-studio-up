export const colors = {
  // Primary colors — navy do logo Studio Up
  primary: {
    50: '#F4F5FE',
    100: '#E4E6F7',
    200: '#C3C7EA',
    300: '#9298D6',
    400: '#4C55A3',
    500: '#0B0E4D',
    600: '#080B3E',
    700: '#06082F',
    800: '#040620',
    900: '#020311',
  },

  // Neutral colors
  neutral: {
    0: '#FFFFFF',
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#ADB5BD',
    600: '#6C757D',
    700: '#495057',
    800: '#343A40',
    900: '#212529',
  },
  
  // Semantic colors
  success: {
    50: '#E6F7E6',
    500: '#28A745',
    600: '#218838',
  },
  
  warning: {
    50: '#FFF3CD',
    500: '#FFC107',
    600: '#E0A800',
  },
  
  error: {
    50: '#F8D7DA',
    500: '#DC3545',
    600: '#C82333',
  },
  
  info: {
    50: '#D1ECF1',
    500: '#17A2B8',
    600: '#138496',
  },

  // Superfícies e traços — medidos do mockup de autenticação
  surface: {
    screen: '#FFFFFF',
    raised: '#FFFFFF',
    subtle: '#F4F5FE',
    border: '#E8E9EC',
  },

  // Texto
  text: {
    primary: '#0A0A0A',
    secondary: '#6C757D',
    placeholder: '#A9ADB4',
    inverse: '#FFFFFF',
  },

  // Marcas de terceiros
  brand: {
    google: {
      blue: '#4285F4',
      green: '#34A853',
      yellow: '#FBBC05',
      red: '#EA4335',
    },
  },
} as const;

export type ColorType = typeof colors;
