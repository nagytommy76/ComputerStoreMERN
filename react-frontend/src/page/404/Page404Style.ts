import styled from 'styled-components'

type Props = {
   backgroundImage: string
}

export const Container = styled.section<Props>`
   background-image: url(${(props) => props.backgroundImage});
   background-repeat: no-repeat;
   background-size: cover;
   height: 100vh;
`

export const Cover = styled.section`
   width: 100%;
   height: 100%;
   background-color: rgba(11, 11, 11, 0.4);
`

export const NotFoundText = styled.h1`
   color: white;
   position: absolute;
   font-size: 4rem;
   top: 30%;
   left: 10%;
`
