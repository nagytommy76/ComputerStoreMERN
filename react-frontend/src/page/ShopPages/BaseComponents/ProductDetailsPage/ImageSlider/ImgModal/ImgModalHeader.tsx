import React, { useContext } from 'react'
import DetailsContext from '../../../../Context/DetailsContext'

import { StyledModalHeader, StyledTypography } from './Styles'
import CloseModalBtn from './CloseModalBtn'

const ImgModalHeader: React.FC<{ handleCloseModal: () => void }> = ({ handleCloseModal }) => {
   const { manufacturer, type, typeCode } = useContext(DetailsContext)
   return (
      <StyledModalHeader>
         <StyledTypography variant='h5'>
            {manufacturer} {type} {typeCode}
         </StyledTypography>
         <CloseModalBtn handleCloseModal={handleCloseModal} />
      </StyledModalHeader>
   )
}

export default ImgModalHeader
