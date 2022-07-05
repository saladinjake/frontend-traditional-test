import { ThemeProvider as BlackTheme } from 'styled-components'

import africanistical from '../themes/theme'
import GlobalStyles from './globals'

const ThemeAfricanistic = ({ children }) => (
  <BlackTheme theme={africanistical}>
    <GlobalStyles />
    {children}
  </BlackTheme>
)

export default ThemeAfricanistic
