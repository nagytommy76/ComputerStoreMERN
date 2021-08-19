import React from 'react'
import { Link } from 'react-router-dom'
import { StyledListItems } from './LinkItemStyles'

const LinkItem: React.FC<{ to: string; linkText: string; ClickEvent?: React.MouseEventHandler<HTMLAnchorElement> }> = ({
   to,
   linkText,
   ClickEvent
}) => {
   return (
      <Link to={to} onClick={ClickEvent}>
         <StyledListItems>{linkText}</StyledListItems>
      </Link>
   )
}

export default LinkItem
