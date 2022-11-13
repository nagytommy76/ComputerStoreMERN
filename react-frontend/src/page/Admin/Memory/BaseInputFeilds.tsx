import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { FormContainerStyle } from '../Components/Form/FormStyle'
import { MEMORY_MANUFACTURERS } from './MemoryProperties'

const BaseFields = React.lazy(() => import('../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../Components/InputFields/TextOrNumberInput'))
const SelectDDRField = React.lazy(() => import('./Insert/SelectDDRField'))

const BaseInputFeilds: React.FC = () => {
   const { productInputs, setProductInputs, validationErrors } = useContext(AdminContext)
   return (
      <FormContainerStyle>
         <BaseFields
            product={productInputs}
            setProduct={setProductInputs}
            validationErrors={validationErrors}
            selectableItemsArray={MEMORY_MANUFACTURERS}
         />
         <SelectDDRField
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, memoryType: event.target.value },
               })
            }
            value={productInputs.details.memoryType}
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
            value={productInputs.details.capacity || 8}
            validationErrorLocation='details.capacity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='frequency'
            labelText='Frekvencia (MHz)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, frequency: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.frequency || 0}
            validationErrorLocation='details.frequency'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='latency'
            labelText='Késleltetés (CL)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, latency: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.latency || 15}
            validationErrorLocation='details.latency'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='voltage'
            labelText='Feszültség (V)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, voltage: event.target.value },
               })
            }
            value={productInputs.details.voltage || '1.35'}
            validationErrorLocation='details.voltage'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='moduleNumber'
            labelText='Modulok száma (DB)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, moduleNumber: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.moduleNumber || 1}
            validationErrorLocation='details.moduleNumber'
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
