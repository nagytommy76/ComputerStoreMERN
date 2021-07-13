import styled from 'styled-components'
import { BaseStylingForUnderline } from '../NavbarStyles'

const BaseStyledListItems = `
   margin: 2rem 1.2rem 2rem 1.2rem;
   padding: 0 0.7rem 0 0.7rem;
   font-size: 1.3rem;
   cursor: pointer;
   display: block;
   position: relative;
   overflow: hidden;
`

export const StyledListItems = styled.li`
   ${BaseStyledListItems}
   ${BaseStylingForUnderline}
`

export const TogglerCartListItems = styled.li`
   ${BaseStyledListItems}
`
