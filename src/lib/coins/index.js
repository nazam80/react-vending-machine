export const CoinsValues = {
    TWO_EURO: {
        label: '2 euros',
        cents: 200,
        units: 5,
    },
    ONE_EURO: {
        label: '1 euro',
        cents: 100,
        units: 5,
    },
    FIFTY_CENTS: {
        label: '50 cents',
        cents: 50,
        units: 5,
    },
    TWENTY_CENTS: {
        label: '20 cents',
        cents: 20,
        units: 5,
    },
    TEN_CENTS: {
        label: '10 cents',
        cents: 10,
        units: 5,
    },
    FIVE_CENTS: {
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
    return change;

}