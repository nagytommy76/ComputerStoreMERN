import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { FormContainerStyle } from '../Components/Form/FormStyle'

const BaseFields = React.lazy(() => import('../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../Components/InputFields/TextOrNumberInput'))

const BaseInputFeilds: React.FC = () => {
   const { productInputs, setProductInputs, validationErrors } = useContext(AdminContext)
   return (
      <FormContainerStyle>
         <BaseFields
            product={productInputs}
            setProduct={setProductInputs}
            validationErrors={validationErrors}
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
            id='sataType'
            labelText='Sata típusa'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, sataType: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.sataType || 3}
            validationErrorLocation='details.sataType'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='sizeInCol'
            labelText='Méret (col)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, sizeInCol: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.sizeInCol || 3.5}
            validationErrorLocation='details.sizeInCol'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='rpm'
            labelText='Fordulat (RPM)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, rpm: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.rpm || 5400}
            validationErrorLocation='details.rpm'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='cache'
            labelText='Cache (MB)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, cache: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.cache || 0}
            validationErrorLocation='details.cache'
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
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
