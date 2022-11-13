import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { FormContainerStyle } from '../Components/Form/FormStyle'
import { SSD_MANUFACTURERS } from './SSDProperties'

import { SSD_SIZES, SSD_CONNECTIONS, NAND_TECHNOLOGY } from './SSDProperties'

const BaseFields = React.lazy(() => import('../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../Components/InputFields/TextOrNumberInput'))
const BaseMUISelect = React.lazy(() => import('../Components/InputFields/Select/MUISelectFeild'))

const BaseInputFields = () => {
   const { productInputs, setProductInputs, validationErrors } = useContext(AdminContext)

   return (
      <FormContainerStyle>
         <BaseFields
            product={productInputs}
            setProduct={setProductInputs}
            validationErrors={validationErrors}
            selectableItemsArray={SSD_MANUFACTURERS}
         />
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia (hónap)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, warranity: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.warranity || 12}
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='capacity'
            labelText='Kapacitás (GB)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, capacity: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.capacity || 0}
            validationErrorLocation='details.capacity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='manufacturerPageUrl'
            labelText='Gyártói honlap link'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, manufacturerPageUrl: event.target.value },
               })
            }
            value={productInputs.details.manufacturerPageUrl || ''}
            validationErrorLocation='details.manufacturerPageUrl'
            validationErrors={validationErrors}
         />
         <BaseMUISelect
            selectableItems={SSD_SIZES}
            id='size'
            labelText='Méret'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, size: event.target.value },
               })
            }
            value={productInputs.details.size || ''}
            validationErrorLocation='details.size'
            validationErrors={validationErrors}
         />
         <BaseMUISelect
            selectableItems={SSD_CONNECTIONS}
            id='connection'
            labelText='Csatoló felület'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, connection: event.target.value },
               })
            }
            value={productInputs.details.connection || ''}
            validationErrorLocation='details.connection'
            validationErrors={validationErrors}
         />
         <BaseMUISelect
            selectableItems={NAND_TECHNOLOGY}
            id='nandTechnology'
            labelText='NAND Technológia '
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, nandTechnology: event.target.value },
               })
            }
            value={productInputs.details.nandTechnology || ''}
            validationErrorLocation='details.nandTechnology'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='maxReadSpeed'
            labelText='Maximális olvasási sebesség (MB/s)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, readingSpeed: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.readingSpeed || 0}
            validationErrorLocation='details.readingSpeed'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='maxWriteSpeed'
            labelText='Minimum írási sebesség (MB/s)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, writingSpeed: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.writingSpeed || 0}
            validationErrorLocation='details.writingSpeed'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='tbw'
            labelText='TBW (TB)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, tbw: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.tbw || 0}
            validationErrorLocation='details.tbw'
            validationErrors={validationErrors}
         />
      </FormContainerStyle>
   )
}

export default BaseInputFields
