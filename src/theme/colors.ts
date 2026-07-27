export const colors = {
  // Primary colors
  primary: {
    50: '#E6F0FA',
    100: '#CCE0F5',
    200: '#99C2EB',
    300: '#66A3E0',
    400: '#3385D6',
    500: '#1B3A5C',
    600: '#162F4A',
    700: '#102338',
    800: '#0B1826',
    900: '#050C13',
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
} as const;

export type ColorType = typeof colors;
