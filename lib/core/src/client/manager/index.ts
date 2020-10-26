import { document } from 'global';
import renderStorybookUI from '@storybook/ui';
import Provider from './provider';
import { importPolyfills } from './conditional-polyfills';

importPolyfills().then(() => {
  const rootEl = document.getElementById('root');
  // FIXME: Fix Provider functions signatures
  // @ts-ignore
  renderStorybookUI(rootEl, new Provider());
});
