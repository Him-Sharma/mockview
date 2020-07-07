import React from 'react'
import {render, screen} from '@testing-library/react'
import Control from './Control'

test('should display server url input', () => {
  render(<Control />)
  expect(screen.(headerMessage)).toBeInTheDocument()
})