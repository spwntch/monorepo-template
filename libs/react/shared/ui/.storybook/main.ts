import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  staticDirs: [
    { from: '../../../../../assets/spwn/brand/public', to: '/brand' },
    { from: '../../../../../assets/storybook/public', to: '/images' },
  ],
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: { autodocs: 'tag' },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'libs/react/shared/ui/vite.config.ts',
      },
    },
  },
};

export default config;
