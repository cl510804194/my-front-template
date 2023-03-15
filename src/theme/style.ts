import { Theme } from '@chakra-ui/react';

export const styles: Theme['styles'] = {
  global: (props) => ({
    'html, body': {
      fontSize: 'sm',
      color: props.colorMode === 'dark' ? 'white' : 'gray.600',
      lineHeight: 'tall',
    },
    a: {
      color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
    },
  }),
};
