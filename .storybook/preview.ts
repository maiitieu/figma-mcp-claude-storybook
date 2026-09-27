import type { Preview } from '@storybook/react-vite';
import '@fontsource/inter/400.css';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    a11y: { test: 'error' },
    controls: { expanded: true },
  },
};
export default preview;
