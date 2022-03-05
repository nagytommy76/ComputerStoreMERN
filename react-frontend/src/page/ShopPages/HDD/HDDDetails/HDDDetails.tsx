import React from 'react'
import DetailsSuspense from '../../../../SuspenseComponents/DetailsPage/DetailsSuspense'
import { HddDetailsContext } from '../Context/HddDetailsContext'
import { useLocation } from 'react-router-dom'
import useGetDetails from '../../Hooks/useGetDetails'

const ProductDetails = React.lazy(() => import('../../BaseComponents/ProductDetailsPage/ProductDetails'))
const HDDDetailsTable = React.lazy(() => import('./HDDTable'))

const HDDDetails = () => {
   const { state } = useLocation()
   console.log(state)
   const hddDetails = useGetDetails('hdd', state._id)
   console.log(hddDetails)
   return (
      <React.Suspense fallback={<DetailsSuspense />}>
         <ProductDetails>
            <HDDDetailsTable />
         </ProductDetails>
      </React.Suspense>
   )
}

export default HDDDetails
