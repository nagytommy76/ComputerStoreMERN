import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import { CpuInputFieldProps } from '../Types'

import Fade from '@mui/material/Fade'

const BaseFields = React.lazy(() => import('../../Components/BaseInputs'))
const TextOrNumberInput = React.lazy(() => import('../../Components/InputFields/TextOrNumberInput'))
const CheckBox = React.lazy(() => import('../../Components/InputFields/CheckBox/CheckBox'))

const BaseInputFeilds: React.FC<CpuInputFieldProps> = ({ product, setProduct, validationErrors }) => {
   const [isCooler, setIsCooler] = React.useState(false)
   const handleCheckbox = () => {
      setIsCooler(!isCooler)
      setProduct({ ...product, details: { ...product.details, stockCooler: !isCooler } })
   }
   return (
      <FormContainerStyle>
         <BaseFields product={product} setProduct={setProduct} validationErrors={validationErrors} />
         <TextOrNumberInput
            id='coreCount'
            labelText='Magok Száma (db)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, coreCount: parseInt(event.target.value) } })
            }
            value={product.details.coreCount || 0}
            validationErrorLocation='details.coreCount'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='threadCount'
            labelText='Szálak Száma (db)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, threadCount: parseInt(event.target.value) } })
            }
            value={product.details.threadCount || 0}
            validationErrorLocation='details.threadCount'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='baseClock'
            labelText='Alap órajel (MHz)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, baseClock: parseInt(event.target.value) } })
            }
            value={product.details.baseClock || 0}
            validationErrorLocation='details.baseClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='boostClock'
            labelText='Turbó órajel (MHz)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, boostClock: parseInt(event.target.value) } })
            }
            value={product.details.boostClock || 0}
            validationErrorLocation='details.boostClock'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='TDP'
            labelText='Fogyasztás (Watt)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, TDP: parseInt(event.target.value) } })
            }
            value={product.details.TDP || 0}
            validationErrorLocation='details.TDP'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='l2Cache'
            labelText='L2 Cache (Mb)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, l2Cache: parseInt(event.target.value) } })
            }
            value={product.details.l2Cache || 0}
            validationErrorLocation='details.l2Cache'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='l3Cache'
            labelText='L3 Cache (Mb)'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, l3Cache: parseInt(event.target.value) } })
            }
            value={product.details.l3Cache || 0}
            validationErrorLocation='details.l3Cache'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='socket'
            labelText='Foglalat'
            onChangeEvent={(event) => setProduct({ ...product, details: { ...product.details, socket: event.target.value } })}
            value={product.details.socket || ''}
            validationErrorLocation='details.socket'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            id='warranity'
            labelText='Garancia'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, warranity: parseInt(event.target.value) } })
            }
            value={product.details.warranity || 0}
            validationErrorLocation='details.warranity'
            validationErrors={validationErrors}
         />
         <TextOrNumberInput
            required={false}
            id='integratedGraphicsName'
            labelText='Integrált grafikus neve'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, integratedGraphicsName: event.target.value } })
            }
            value={product.details.integratedGraphicsName || 'Nincs'}
         />
         <TextOrNumberInput
            required={false}
            id='architecture'
            labelText='Arhitechtúra'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, architecture: event.target.value } })
            }
            value={product.details.architecture || ''}
         />
         <TextOrNumberInput
            required={false}
            id='cpuCodeName'
            labelText='CPU Kódneve'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, cpuCodeName: event.target.value } })
            }
            value={product.details.cpuCodeName || ''}
         />
         <TextOrNumberInput
            required={false}
            id='manufacturerPageUrl'
            labelText='Gyártói oldal'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, manufacturerPageUrl: event.target.value } })
            }
            value={product.details.manufacturerPageUrl || ''}
         />
         <CheckBox labelText='Gyári hűtő?' onChangeEvent={handleCheckbox} checked={isCooler} />
         <Fade in={isCooler}>
            <div style={{ width: '100%' }}>
               <TextOrNumberInput
                  id='cooler'
                  required={false}
                  labelText='Gyári hűtés'
                  onChangeEvent={(event) =>
                     setProduct({ ...product, details: { ...product.details, stockCoolerName: event.target.value } })
                  }
                  value={product.details.stockCoolerName}
               />
            </div>
         </Fade>
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
