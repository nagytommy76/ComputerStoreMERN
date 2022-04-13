import styled from 'styled-components'
import { backgroundColor } from '../../../../../Theme/GlobalStyles'

export const ChartContainer = styled.div<{ isDarkTheme: boolean }>(({ isDarkTheme }) => ({
   backgroundColor: `${isDarkTheme ? '#EEE' : backgroundColor}`,
   color: `${isDarkTheme ? 'black' : 'white'}`,
   fontSize: '1.05rem',
   padding: '.5rem 1rem',
   borderRadius: '5px',
}))
