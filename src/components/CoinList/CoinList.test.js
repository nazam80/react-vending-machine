import React from 'react'
import { render } from '@testing-library/react'
import CoinList from './CoinList'

const coins1Mock = [
    {
        id: 'two_euro_coin',
        label: '2 euros',
        cents: 200,
        units: 5,
    },
] 


const coins2Mock = [
    ...coins1Mock,
    {
        id: 'one_euro_coin',
        label: '1 euro',
        cents: 100,
        units: 5,
    },
] 

test('renders CoinList  component', () => {    
    const { container } = render(<CoinList coins={coins1Mock} />)   
    expect(container.querySelector('.coins_container')).toBeInTheDocument()
});

test('renders CoinList  component coin container', () => {    
    const { container } = render(<CoinList coins={coins2Mock} />)   
    const coins = container.getElementsByClassName('coin_container')
    expect(coins).toHaveLength(2)
});

test('renders CoinList  component coin element', () => {    
    const { container } = render(<CoinList coins={coins1Mock} />)   
    expect(container.querySelector('.coins_container > .coin_container > .coin_name')).toBeInTheDocument()
    expect(container.querySelector('.coins_container > .coin_container > .coin_available')).toBeInTheDocument()
    expect(container.querySelector('.coins_container > .coin_container > .coin_add_btn')).toBeInTheDocument()
});


test('renders CoinList  component coin element values', () => {    
    const { getByText } = render(<CoinList coins={coins1Mock} />)   
    expect(getByText('2 euros')).toBeInTheDocument()
    expect(getByText('Available: 5')).toBeInTheDocument()
    expect(getByText('Add')).toBeInTheDocument()
});