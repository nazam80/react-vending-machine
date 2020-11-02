 import React from 'react'
 import { render, screen } from '@testing-library/react'
 import DisplayCredit from './DisplayCredit'

 test('renders DisplayCredit  component', () => {    
   const { container } = render(<DisplayCredit credit={100} />)   
   expect(container.querySelector('.display_container')).toBeInTheDocument()
 });

 test('renders DisplayCredit component with elements', () => {    
   const { container } = render(<DisplayCredit credit={100} />)      
   expect(container.querySelector('.display_container > .display_number')).toBeInTheDocument()
   expect(container.querySelector('.display_container > .display_currency')).toBeInTheDocument()
 });

 test('renders DisplayCredit component with text values', () => {    
    const { getByText } = render(<DisplayCredit credit={100} />)    
    expect(getByText('100')).toBeInTheDocument()
    expect(getByText('cents')).toBeInTheDocument()
  });

  