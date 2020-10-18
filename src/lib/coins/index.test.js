import {CoinsValues, getCoins, calculateChange} from '.'

describe('Given an array of coins values', () => {
    it('when we calculate change for 6 euro returns 3 coins of 2 euro', () => {
      const expected = [
          {...CoinsValues.TWO_EURO, units: 3},
        ]
  
      const result = calculateChange(600, getCoins())
  
      expect(result).toEqual(expected)
      
    })
  
    it('when we calculate change for 7 euro returns 3 coins of 2 euro and 1 coin of 1 euro', () => {
        const expected = [
            {...CoinsValues.TWO_EURO, units: 3},
            {...CoinsValues.ONE_EURO, units: 1},
        ]
    
        const result = calculateChange(700, getCoins())
    
        expect(result).toEqual(expected)
        
      })
  
      
      it('when we calculate change for 750 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents', () => {
        const expected = [
            {...CoinsValues.TWO_EURO, units: 3},
            {...CoinsValues.ONE_EURO, units: 1},
            {...CoinsValues.FIFTY_CENTS, units: 1},
        ]
    
        const result = calculateChange(750, getCoins())
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change for 770 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents', () => {
        const expected = [
            {...CoinsValues.TWO_EURO, units: 3},
            {...CoinsValues.ONE_EURO, units: 1},
            {...CoinsValues.FIFTY_CENTS, units: 1},
            {...CoinsValues.TWENTY_CENTS, units: 1},
        ]
    
        const result = calculateChange(770, getCoins())
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change for 780 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents, 1 coin of 10 cents', () => {
        const expected = [
            {...CoinsValues.TWO_EURO, units: 3},
            {...CoinsValues.ONE_EURO, units: 1},
            {...CoinsValues.FIFTY_CENTS, units: 1},
            {...CoinsValues.TWENTY_CENTS, units: 1},
            {...CoinsValues.TEN_CENTS, units: 1},
        ]
    
        const result = calculateChange(780, getCoins())
    
        expect(result).toEqual(expected)
        
      })


      it('when we calculate change for 785 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents, 1 coin of 10 cents, 1 coin of 5 cents', () => {
        const expected = [
            {...CoinsValues.TWO_EURO, units: 3},
            {...CoinsValues.ONE_EURO, units: 1},
            {...CoinsValues.FIFTY_CENTS, units: 1},
            {...CoinsValues.TWENTY_CENTS, units: 1},
            {...CoinsValues.TEN_CENTS, units: 1},
            {...CoinsValues.FIVE_CENTS, units: 1},
        ]
    
        const result = calculateChange(785, getCoins())
    
        expect(result).toEqual(expected)
        
      })
  
  })
  