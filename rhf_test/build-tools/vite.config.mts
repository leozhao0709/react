import path from 'node:path';
import { mergeConfig, defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import tailwindcssNesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss';
import commonConfig from '../build-common-config/vite.config';
import react from '@vitejs/plugin-react';

export default mergeConfig(
  commonConfig,
  defineConfig({
    base: './',
    css: {
      postcss: {
        plugins: [tailwindcssNesting, tailwindcss]
      }
    },
    plugins: [
      react(),
      checker({
        eslint: {
          lintCommand:
            'eslint --config build-tools/.eslintrc.js --ext .ts,.tsx,.js,.jsx src/',
          dev: {
            logLevel: ['error'],
          },
        },
      }),
      // stylelint has issue with checker now: https://github.com/fi3ework/vite-plugin-checker/issues/260
      // checker({
      //   stylelint: {
      //     lintCommand:
      //       'stylelint --config build-tools/.stylelint.config.ts src/**/*.{scss,css}',
      //   },
      // }),
    ],
  }),
);
