import React from 'react'
import { FormContainerStyle } from '../../Components/Form/FormStyle'
import { CpuInputFieldProps } from '../Types'
import { errorMsg } from '../../../Helpers/SetErrorMsg'

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
            inputType='number'
            min='0'
            max='128'
            labelText='Magok Száma (db) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, coreCount: parseInt(event.target.value) } })
            }
            value={product.details.coreCount}
            errorMsg={errorMsg(validationErrors, 'details.coreCount')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='128'
            labelText='Szálak Száma (db) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, threadCount: parseInt(event.target.value) } })
            }
            value={product.details.threadCount}
            errorMsg={errorMsg(validationErrors, 'details.threadCount')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='10000'
            labelText='Alap órajel (MHz) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, baseClock: parseInt(event.target.value) } })
            }
            value={product.details.baseClock}
            errorMsg={errorMsg(validationErrors, 'details.baseClock')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='10000'
            labelText='Turbó órajel (MHz) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, boostClock: parseInt(event.target.value) } })
            }
            value={product.details.boostClock}
            errorMsg={errorMsg(validationErrors, 'details.boostClock')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='500'
            labelText='Fogyasztás (Watt) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, TDP: parseInt(event.target.value) } })
            }
            value={product.details.TDP}
            errorMsg={errorMsg(validationErrors, 'details.TDP')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='250'
            labelText='L2 Cache (Mb) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, l2Cache: parseInt(event.target.value) } })
            }
            value={product.details.l2Cache}
            errorMsg={errorMsg(validationErrors, 'details.l2Cache')}
         />
         <TextOrNumberInput
            inputType='number'
            min='0'
            max='250'
            labelText='L3 Cache (Mb) *'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, l3Cache: parseInt(event.target.value) } })
            }
            value={product.details.l3Cache}
            errorMsg={errorMsg(validationErrors, 'details.l3Cache')}
         />
         <TextOrNumberInput
            labelText='Foglalat *'
            onChangeEvent={(event) => setProduct({ ...product, details: { ...product.details, socket: event.target.value } })}
            value={product.details.socket}
            errorMsg={errorMsg(validationErrors, 'details.socket')}
         />
         <TextOrNumberInput
            labelText='Garancia *'
            inputType='number'
            min='0'
            max='150'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, warranity: parseInt(event.target.value) } })
            }
            value={product.details.warranity}
            errorMsg={errorMsg(validationErrors, 'details.warranity')}
         />
         <TextOrNumberInput
            labelText='Integrált grafikus neve'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, integratedGraphicsName: event.target.value } })
            }
            value={product.details.integratedGraphicsName}
         />
         <TextOrNumberInput
            labelText='Arhitechtúra'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, architecture: event.target.value } })
            }
            value={product.details.architecture}
         />
         <TextOrNumberInput
            labelText='CPU Kódneve'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, cpuCodeName: event.target.value } })
            }
            value={product.details.cpuCodeName}
         />
         <TextOrNumberInput
            labelText='Gyártói oldal'
            onChangeEvent={(event) =>
               setProduct({ ...product, details: { ...product.details, manufacturerPageUrl: event.target.value } })
            }
            value={product.details.manufacturerPageUrl}
         />
         <CheckBox labelText='Gyári hűtő' onChangeEvent={handleCheckbox} checked={isCooler} />
         {isCooler && (
            <TextOrNumberInput
               labelText='Gyári hűtés'
               onChangeEvent={(event) =>
                  setProduct({ ...product, details: { ...product.details, stockCoolerName: event.target.value } })
               }
               value={product.details.stockCoolerName}
            />
         )}
      </FormContainerStyle>
   )
}

export default BaseInputFeilds
