import styled from 'styled-components'

type Props = {
   image: string
}

export const ImageStyle = styled.section<Props>`
   background-image: url(${(props) => props.image});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   height: 100%;
`

export const AuthContainer = styled.section`
   /* 7rem navbar height */
   /* min-height: calc(100vh - 7rem); */
   min-height: 100vh;
   display: grid;
   grid-template-columns: repeat(2, 50%);
   justify-content: center;
   align-items: center;
`

export const AuthFormStyle = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
`
