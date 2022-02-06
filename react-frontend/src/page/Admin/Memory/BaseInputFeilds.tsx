import React from 'react'
import { FormContainerStyle } from '../Components/Form/FormStyle'
import { MemoryInputFieldProps } from './Types'

const BaseFields = React.lazy(() => import('../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../Components/InputFields/TextOrNumberInput'))
const SelectDDRField = React.lazy(() => import('./Insert/SelectDDRField'))

const BaseInputFeilds: React.FC<MemoryInputFieldProps> = ({ product, setProduct, validationErrors }) => {
   return (
      <FormContainerStyle>
         <BaseFields product={product} setProduct={setProduct} validationErrors={validationErrors} />
         <SelectDDRField
            onChangeEvent={event => setProduct({ ...product, details: { ...product.details, memoryType: event.target.value } })}
            value={product.details.memoryType}
         />
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia (hónap)'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, warranity: parseInt(event.target.value) } })
            }
            value={product.details.warranity || 12}
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='capacity'
            labelText='Kapacitás (GB)'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, capacity: parseInt(event.target.value) } })
            }
            value={product.details.capacity || 8}
            validationErrorLocation='details.capacity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='frequency'
            labelText='Frekvencia (MHz)'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, frequency: parseInt(event.target.value) } })
            }
            value={product.details.frequency || 0}
            validationErrorLocation='details.frequency'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='latency'
            labelText='Késleltetés (CL)'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, latency: parseInt(event.target.value) } })
            }
            value={product.details.latency || 15}
            validationErrorLocation='details.latency'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='voltage'
            labelText='Feszültség (V)'
            onChangeEvent={event => setProduct({ ...product, details: { ...product.details, voltage: event.target.value } })}
            value={product.details.voltage || '1.35'}
            validationErrorLocation='details.voltage'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='moduleNumber'
            labelText='Modulok száma (DB)'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, moduleNumber: parseInt(event.target.value) } })
            }
            value={product.details.moduleNumber || 1}
            validationErrorLocation='details.moduleNumber'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='manufacturerPageUrl'
            labelText='Gyártói honlap link'
            onChangeEvent={event =>
               setProduct({ ...product, details: { ...product.details, manufacturerPageUrl: event.target.value } })
            }
            value={product.details.manufacturerPageUrl || ''}
            validationErrorLocation='details.manufacturerPageUrl'
            validationErrors={validationErrors}
         />
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
