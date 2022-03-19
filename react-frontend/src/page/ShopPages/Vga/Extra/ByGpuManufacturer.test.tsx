import { screen, render, waitForElementToBeRemoved } from '../../../../test-utils'
import ByGpuManufacturerSelect from './ByGpuManufacturer'

test('should select the gpu manufacturer', async () => {
   render(<ByGpuManufacturerSelect />)
   await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés.../i }), {
      timeout: 5000,
   })
   const allSelect = screen.getAllByRole('combobox', { name: /GPU gyártó/i }) as HTMLSelectElement[]
   //    console.log(allSelect[0])

   //    expect(allSelect[0].selected).toBeTruthy()

   screen.debug()
})
