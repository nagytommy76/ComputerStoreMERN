import styled from 'styled-components'

export const AccordionContainer = styled.section`
   overflow: hidden;
   box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
`

export const AccordionTab = styled.section`
   width: 100%;
   height: 100px;
   color: black;
   overflow: hidden;
   &:hover {
      background: darken(#2c3e50, 10%);
   }
`

export const TabLabel = styled.label`
   display: flex;
   justify-content: space-between;
   padding: 1em;
   background: #2c3e50;
   font-weight: bold;
   cursor: pointer;
   color: #fff;
   transition: background 0.2s;
   &:hover {
      background: #1a3045;
   }
`

export const AccordionContent = styled.div`
   max-height: 0;
   padding: 0 1em;
   /* color: red; */
   background: white;
   transition: all 0.35s;
`

export const Input = styled.input`
   position: absolute;
   opacity: 0;
   z-index: -1;
`
