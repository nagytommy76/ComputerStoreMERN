import React from 'react'
import { Link } from 'react-router-dom'
import { StyledListItems } from './LinkItemStyles'

const LinkItem: React.FC<{ to: string; linkText: string }> = ({ to, linkText }) => {
   return (
      <Link to={to}>
         <StyledListItems>{linkText}</StyledListItems>
      </Link>
   )
}

export default LinkItem
