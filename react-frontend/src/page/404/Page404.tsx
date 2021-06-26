import React from 'react'
import notFoundImage from './404Page.jpg'
import { Container, NotFoundText, Cover } from './Page404Style'

const Page404 = () => {
   return (
      <Container backgroundImage={notFoundImage}>
         <Cover>
            <NotFoundText>A keresett oldal nem található</NotFoundText>
         </Cover>
      </Container>
   )
}

export default Page404
