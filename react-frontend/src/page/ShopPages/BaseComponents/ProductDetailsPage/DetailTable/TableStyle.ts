import styled from 'styled-components'
import { mobileWindowSize } from '../../../../../Theme/GlobalStyles'

export const TableStyle = styled.table`
   flex: 1;
   margin-left: 0.5rem;
   border-collapse: collapse;
   height: 650px;
   @media (max-width: ${mobileWindowSize}) {
      min-height: 600px;
   }
`

export const TableRows = styled.tr`
   border-bottom: 1px solid #ea9f00;
   transition: background-color 0.2s linear;
   &:hover {
      background-color: hsla(0, 0%, 50%, 0.4);
   }
`

export const TableDataTitle = styled.td`
   font-weight: 600;
`
