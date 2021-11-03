import { render, screen, waitForElementToBeRemoved } from '../../../test-utils'
import Adress from './Adress'

describe('Test the checkout page addres section', () => {
   test('should ', async () => {
      render(<Adress />)
      await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés/i }))
      screen.debug()
   })
})

// Tesztelni:
// 1. Ha nincs kitöltve semmi és úgy nyom rá a user a KÜLDÉS gombra
// 2. Ha ki van töltve. de hibás valami
// 3. Ha ki van töltve, sikeres minden. Megjelenik-e a módosítás gomb?!
