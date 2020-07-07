import React from 'react'
import {render, screen} from '@testing-library/react'
import Header from './Header'

test('should load header with text', () => {
  const headerMessage = 'Mockview: mocks, with a view'
  render(<Header />)
  expect(screen.getByText(headerMessage)).toBeInTheDocument()
})