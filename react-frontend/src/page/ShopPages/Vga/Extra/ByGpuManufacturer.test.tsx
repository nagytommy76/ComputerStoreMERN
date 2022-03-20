import { screen, render, waitForElementToBeRemoved } from '../../../../test-utils'
import userEvent from '@testing-library/user-event'
import ByGpuManufacturerSelect from './ByGpuManufacturer'

test('should select the gpu manufacturer', async () => {
   render(<ByGpuManufacturerSelect />)
   await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés.../i }), {
      timeout: 5000,
   })
   const allOptions = screen.getAllByRole('option') as HTMLOptionElement[]
   const select = screen.getByRole('combobox', { name: /GPU gyártó/i })
   expect(allOptions[0].selected).toBeTruthy()
   expect(allOptions[1].selected).toBeFalsy()
   expect(allOptions[2].selected).toBeFalsy()

   userEvent.selectOptions(select, allOptions[1])

   expect(allOptions[0].selected).toBeFalsy()
   expect(allOptions[1].selected).toBeTruthy()
   expect(allOptions[2].selected).toBeFalsy()
})
