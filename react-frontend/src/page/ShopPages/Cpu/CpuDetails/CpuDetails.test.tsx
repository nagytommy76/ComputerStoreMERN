import { render, screen, waitForElementToBeRemoved } from '../../../../test-utils'
import CpuDetails from './CpuDetails'

function mockFunction() {
   return {
      ...jest.requireActual('react-router-dom'),
      useLocation: jest.fn().mockReturnValue({
         pathname: '/cpu/cpu-details',
         search: '',
         hash: '',
         state: {
            manufacturer: 'AMD',
            price: 31200,
            type: 'Ryzen 3 1200',
            typeCode: 'YD1200BBAEBOX',
            details: {}
         },
         key: '5nvxpbdafa'
      })
   }
}

jest.mock('react-router-dom', () => mockFunction())

// describe('Cpu details page testing', () => {
//    test('should display the CPU details properly', async () => {
//       render(<CpuDetails />)
//       // await waitForElementToBeRemoved(() => screen.getByRole('heading', { name: /Töltés/i }))
//       await screen.findByRole('heading', { name: /AMD Ryzen 3 1200 YD1200BBAEBOX/i })
//       screen.debug()
//    })
// })

test.todo('Cpu details')
