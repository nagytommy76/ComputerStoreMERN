import styled from 'styled-components'

export const StyledFormControll = styled.section`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
`

export const StyledLabel = styled.label`
   width: 80%;
   padding: 0.8rem 0 0.8rem 0;
   font-size: 1.2rem;
   text-align: left;
`

export const StyledInput = styled.input`
   font-size: 1.3rem;
   padding: 1rem;
   border-radius: 5px;
   width: 80%;
   border: none;
   outline: none;
   box-sizing: border-box;
   transition: all 0.2s linear;

   &:focus {
      box-shadow: 0px 0px 15px #666;
   }
`
