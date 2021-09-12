import { ValidationError } from '../AdminTypes'
import { CpuProductType } from '../../ShopPages/Cpu/CpuTypes'

export type CpuInputFieldProps = {
   product: CpuProductType
   setProduct: React.Dispatch<React.SetStateAction<CpuProductType>>
   validationErrors: ValidationError[]
}
