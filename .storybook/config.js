import { configure, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../src/themeObj';

addDecorator(muiTheme([theme]))
// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
