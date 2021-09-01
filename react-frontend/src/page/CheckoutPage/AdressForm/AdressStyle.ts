import styled from 'styled-components'
// import { backgroundColor } from '../../../Theme/GlobalStyles'

export const AdressContainer = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
`

export const AdressFormStyle = styled.form<{ darkTheme: boolean }>`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   z-index: 2;
`

export const BackgroundImageStyle = styled.div<{ backgroundImage: string }>`
   width: 50%;
   height: 100%;
   position: absolute;

   background-image: url(${({ backgroundImage }) => backgroundImage});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   filter: blur(5px) brightness(95%);
`

export const FormControlRow = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
`

export const StyledHeading = styled.h1`
   font-size: 2.2rem;
   text-align: center;
`
