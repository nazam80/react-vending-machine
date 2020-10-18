export const CoinsValues = {
    TWO_EURO: {
        label: '2 euros',
        cents: 200,        
    },
    ONE_EURO: {
        label: '1 euro',
        cents: 100,        
    },
    FIFTY_CENTS: {
        label: '50 cents',
        cents: 50,        
    },
    TWENTY_CENTS: {
        label: '20 cents',
        cents: 20,        
    },
    TEN_CENTS: {
        label: '10 cents',
        cents: 10,        
    },
    FIVE_CENTS: {
        label: '5 cents',
        cents: 5,        
    },
}

export const getCoins = () => [CoinsValues.TWO_EURO, CoinsValues.ONE_EURO, CoinsValues.FIFTY_CENTS, CoinsValues.TWENTY_CENTS, CoinsValues.TEN_CENTS, CoinsValues.FIVE_CENTS]



export const calculateChange = (valueInCents, coins) => {
    const sortedCoins = coins.sort((a,b) => b.cents-a.cents) 
    
    const change = []
    for (let j=0; j<sortedCoins.length && valueInCents>0; j++) {        
        change.push( {
            ...sortedCoins[j],
            units: Math.floor(valueInCents / sortedCoins[j].cents),
        })
        valueInCents = valueInCents % sortedCoins[j].cents
    }
    return change;

}