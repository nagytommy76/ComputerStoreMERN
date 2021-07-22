import styled from 'styled-components'

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
   width: 35px;
   height: 35px;
   cursor: pointer;
   border: none;
   background: hsl(0, 96%, 60%);
   color: white;
   font-weight: 700;
   border-radius: 5px;
   transition: background 0.25s;
   &:hover {
      background: hsl(0, 96%, 39%);
   }
`

export const InputFieldContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`
