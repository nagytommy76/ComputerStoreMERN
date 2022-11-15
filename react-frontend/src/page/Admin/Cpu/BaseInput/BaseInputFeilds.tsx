import React, { useContext } from 'react'
import { AdminContext } from '../../Context/AdminContext'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import { CPU_SOCKETS } from '../CpuProperties'

import Fade from '@mui/material/Fade'

const BaseFields = React.lazy(() => import('../../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../../Components/InputFields/TextOrNumberInput'))
const CheckBox = React.lazy(() => import('../../Components/InputFields/CheckBox/CheckBox'))
const BaseSelectField = React.lazy(() => import('../../Components/InputFields/Select/MUISelectFeild'))

const BaseInputFeilds: React.FC = () => {
   const [isCooler, setIsCooler] = React.useState(false)
   const { productInputs, setProductInputs, validationErrors } = useContext(AdminContext)
   const handleCheckbox = () => {
      setIsCooler(!isCooler)
      setProductInputs({ ...productInputs, details: { ...productInputs.details, stockCooler: !isCooler } })
   }
   return (
      <FormContainerStyle>
         <BaseFields
            product={productInputs}
            setProduct={setProductInputs}
            validationErrors={validationErrors}
            selectableItemsArray={['AMD', 'INTEL']}
         />
         <TextOrNumberInput
            id='coreCount'
            labelText='Magok Száma (db)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, coreCount: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.coreCount || 0}
            validationErrorLocation='details.coreCount'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='threadCount'
            labelText='Szálak Száma (db)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, threadCount: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.threadCount || 0}
            validationErrorLocation='details.threadCount'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='baseClock'
            labelText='Alap órajel (MHz)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, baseClock: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.baseClock || 0}
            validationErrorLocation='details.baseClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='boostClock'
            labelText='Turbó órajel (MHz)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, boostClock: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.boostClock || 0}
            validationErrorLocation='details.boostClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='TDP'
            labelText='Fogyasztás (Watt)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, TDP: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.TDP || 0}
            validationErrorLocation='details.TDP'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='l2Cache'
            labelText='L2 Cache (Mb)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, l2Cache: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.l2Cache || 0}
            validationErrorLocation='details.l2Cache'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='l3Cache'
            labelText='L3 Cache (Mb)'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, l3Cache: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.l3Cache || 0}
            validationErrorLocation='details.l3Cache'
            validationErrors={validationErrors}
         />
         <BaseSelectField
            id='socket'
            labelText='Foglalat'
            selectableItems={CPU_SOCKETS}
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, socket: event.target.value },
               })
            }
            value={productInputs.details.socket || ''}
            validationErrorLocation='details.socket'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, warranity: parseInt(event.target.value) },
               })
            }
            value={productInputs.details.warranity || 0}
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='integratedGraphicsName'
            labelText='Integrált grafikus neve'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, integratedGraphicsName: event.target.value },
               })
            }
            value={productInputs.details.integratedGraphicsName || 'Nincs'}
         />
         <TextOrNumberInput
            required={false}
            id='architecture'
            labelText='Arhitechtúra'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, architecture: event.target.value },
               })
            }
            value={productInputs.details.architecture || ''}
         />
         <TextOrNumberInput
            required={false}
            id='cpuCodeName'
            labelText='CPU Kódneve'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, cpuCodeName: event.target.value },
               })
            }
            value={productInputs.details.cpuCodeName || ''}
         />
         <TextOrNumberInput
            required={false}
            id='manufacturerPageUrl'
            labelText='Gyártói oldal'
            onChangeEvent={event =>
               setProductInputs({
                  ...productInputs,
                  details: { ...productInputs.details, manufacturerPageUrl: event.target.value },
               })
            }
            value={productInputs.details.manufacturerPageUrl || ''}
         />
         <CheckBox labelText='Gyári hűtő?' onChangeEvent={handleCheckbox} checked={isCooler} />
         <Fade in={isCooler}>
            <span>
               <TextOrNumberInput
                  id='cooler'
                  required={false}
                  labelText='Gyári hűtés'
                  onChangeEvent={event =>
                     setProductInputs({
                        ...productInputs,
                        details: { ...productInputs.details, stockCoolerName: event.target.value },
                     })
                  }
                  value={productInputs.details.stockCoolerName}
               />
            </span>
         </Fade>
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
