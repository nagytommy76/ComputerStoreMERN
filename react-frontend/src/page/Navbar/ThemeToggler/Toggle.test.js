import React from 'react'
import { render, cleanup } from '../../../../test-utils'

import Toggle from './Toggle'

describe('Testing the theme <Toggle /> component in the navbar', () => {
    it('renders correctly, without errors', () => {
        const { getByTestId } = render(
            <Toggle />
        )
        getByTestId('toggler')
    })

    afterEach(cleanup)
})