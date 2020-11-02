import React from 'react'
import { render } from '@testing-library/react'
import ProductList from './ProductList'


const products1Mock = [
    {
        id: 'coke',
        label: 'Coca cola',
        priceLabel: '2.20€',
        priceInCents: 220,
        units: 15,
    },
]
const products2Mock = [
    products1Mock,{
        id: 'orange_fanta',
        label: 'Fanta Naranja',
        priceLabel: '2.30€',
        priceInCents: 230,
        units: 25,
    },
] 

test('renders ProductList  component', () => {    
    const { container } = render(<ProductList products={products1Mock} />)   
    expect(container.querySelector('.products_container')).toBeInTheDocument()
});

test('renders ProductList  component products container', () => {    
    const { container } = render(<ProductList products={products2Mock} />)   
    const products = container.getElementsByClassName('product_container')
    expect(products).toHaveLength(2)
});


test('renders ProductList  component product element', () => {    
    const { container } = render(<ProductList products={products1Mock} />)   
    expect(container.querySelector('.products_container > .product_container > .product_name')).toBeInTheDocument()
    expect(container.querySelector('.products_container > .product_container > .product_price')).toBeInTheDocument()
    expect(container.querySelector('.products_container > .product_container > .product_available')).toBeInTheDocument()
    expect(container.querySelector('.products_container > .product_container > .product_buy_btn')).toBeInTheDocument()
});


test('renders ProductList  component product element values', () => {    
    const { getByText } = render(<ProductList products={products1Mock} />)   
    expect(getByText('Coca cola')).toBeInTheDocument()
    expect(getByText('Price: 2.20€')).toBeInTheDocument()
    expect(getByText('Available: 15')).toBeInTheDocument()
    expect(getByText('Buy')).toBeInTheDocument()
});