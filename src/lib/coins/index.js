export const CoinsValues = {
    TWO_EURO: {
        id: 'two_euro_coin',
        label: '2 euros',
        cents: 200,
        units: 5,
    },
    ONE_EURO: {
        id: 'one_euro_coin',
        label: '1 euro',
        cents: 100,
        units: 5,
    },
    FIFTY_CENTS: {
        id: 'fifty_cents_coin',
        label: '50 cents',
        cents: 50,
        units: 5,
    },
    TWENTY_CENTS: {
        id: 'twenty_cents_coin',
        label: '20 cents',
        cents: 20,
        units: 5,
    },
    TEN_CENTS: {
        id: 'ten_cents_coin',
        label: '10 cents',
        cents: 10,
        units: 5,
    },
    FIVE_CENTS: {
        id: 'five_cents_coin',
        label: '5 cents',
        cents: 5,
        units: 5,
    },
}

export const getCoins = () => [CoinsValues.TWO_EURO, CoinsValues.ONE_EURO, CoinsValues.FIFTY_CENTS, CoinsValues.TWENTY_CENTS, CoinsValues.TEN_CENTS, CoinsValues.FIVE_CENTS]

export const getCoinWithUnits = (coin, units) => {
    return {
        ...coin,
        units: units,
    }
}

export const calculateChange = (valueToChangeInCents, coins) => {
    const getUnits = (value, coin) => {
        const unitNeeded = Math.floor(value / coin.cents)
        return Math.min(unitNeeded, coin.units)
    }
    const getNextValueToChange = (currentValueToChange, coinValue, units) => currentValueToChange - (coinValue * units)

    const checkFullChangeCompleted = (value) => {
        if ( value > 0){
            throw new Error(`Cannot change last ${value} cents because there aren't enough coins` )
        }
    }

    const sortedCoins = coins.sort((a, b) => b.cents - a.cents)

    const change = []
    for (let j = 0; j < sortedCoins.length && valueToChangeInCents > 0; j++) {
        const currentCoin = sortedCoins[j]
        const unitsOfCurrentCoin = getUnits(valueToChangeInCents, currentCoin)
        if (unitsOfCurrentCoin > 0) {
            change.push(getCoinWithUnits(currentCoin, unitsOfCurrentCoin))
        }
        valueToChangeInCents = getNextValueToChange(valueToChangeInCents, currentCoin.cents, unitsOfCurrentCoin)
    }
    checkFullChangeCompleted( valueToChangeInCents )
    return change;
}


export const removeChangeFromCoins = (coins, change)=> {
    return coins.map( (coin)=> {
        const changeCoin = change.find( (changeCoin) => changeCoin.id === coin.id)
        return changeCoin ? getCoinWithUnits(coin, coin.units - changeCoin.units) : coin
    })
}


export const refillCoinById = (coins, coinId, units)=> coins.map( (coin)=> coin.id === coinId ? getCoinWithUnits(coin, coin.units + units) : coin)

