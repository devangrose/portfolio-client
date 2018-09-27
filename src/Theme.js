// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#2196f3' },
  secondary: { main: '#76ff03' }
};
const themeName = 'ThemeYo';

export default createMuiTheme({ palette, themeName });
