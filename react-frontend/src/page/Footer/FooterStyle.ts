import styled from 'styled-components'

export const FooterContainer = styled.footer`
   width: 100%;
   height: 110px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #111;
   color: #fff;
   font-size: 1.1rem;
   padding: 1rem 0;
`

export const IconContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 1rem;
`

const baseIconStyle = `
    margin-right: .5rem;
    font-size: 1.3rem;
    transition: color .1s linear;
`

export const ReactIconAnchor = styled.a`
   ${baseIconStyle}
   &:hover {
      color: #61dbfb;
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
