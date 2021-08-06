import styled from 'styled-components'

const baseButtonConfig = `
width: 35px;
height: 35px;
cursor: pointer;
border: none;
font-weight: 700;
   border-radius: 5px;
   transition: background 0.25s;
`

export const InsertNewLinkButton = styled.button`
   width: 150px;
   height: 40px;
   margin: 0.3rem 0;
   cursor: pointer;
   border: none;
   border-radius: 15px;
   background: #f39c12;
   transition: all 0.1s linear;
   font-size: 1rem;
   padding: 0.5rem;
   &:hover {
      transform: scale(1.04);
   }
`

export const RemoveLinkButtonStyle = styled.button`
   ${baseButtonConfig}
   margin: 0 .4rem 0 .4rem;
   background: hsl(0, 96%, 60%);
   color: white;
   &:hover {
      background: hsl(0, 96%, 39%);
   }
`

export const LinkToPicture = styled.button`
   ${baseButtonConfig}
   background: hsl(95, 100%, 37%);
   color: white;
   &:hover {
      background: hsl(95, 100%, 15%);
   }
`

export const InputFieldContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
