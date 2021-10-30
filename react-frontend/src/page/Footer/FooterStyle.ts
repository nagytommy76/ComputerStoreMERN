import styled from 'styled-components'
import { footerHeight, mobileWindowSize } from '../../Theme/GlobalStyles'

const reactColor = '#61dbfb'

export const FooterContainer = styled.footer`
   width: 100%;
   height: ${footerHeight};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #111;
   color: #fff;
   font-size: 1.1rem;

   @media (max-width: ${mobileWindowSize}) {
   }
`

export const IconContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
`

export const AnchorStyle = styled.a`
   transition: color 0.1s linear;
   &:hover {
      color: ${reactColor};
   }
`

const baseIconStyle = `
    margin-right: .5rem;
    font-size: 1.3rem;
    transition: color .1s linear;
`

export const ReactIconAnchor = styled.a`
   ${baseIconStyle}
   &:hover {
      color: ${reactColor};
   }
`
export const NodeIconAnchor = styled.a`
   ${baseIconStyle}
   &:hover {
      color: #68a063;
   }
`
export const GitHubIconAnchor = styled.a`
   ${baseIconStyle}
   &:hover {
      color: #999;
   }
`

export const LinkedInIconAnchor = styled.a`
   ${baseIconStyle}
   &:hover {
      color: #0077b5;
   }
`
