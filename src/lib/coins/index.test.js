import {CoinsValues, getCoins, getCoinWithUnits, calculateChange} from '.'

describe('Given an array of coins values', () => {
    it('when we calculate change for 6 euro returns 3 coins of 2 euro', () => {
      const expected = [
          getCoinWithUnits(CoinsValues.TWO_EURO, 3),
        ]
      
      const result = calculateChange(600, getCoins())
      
      expect(result).toEqual(expected)
      
    })
  
    it('when we calculate change for 7 euro returns 3 coins of 2 euro and 1 coin of 1 euro', () => {
        const expected = [ 
          getCoinWithUnits(CoinsValues.TWO_EURO, 3),
          getCoinWithUnits(CoinsValues.ONE_EURO, 1),
        ]
    
        const result = calculateChange(700, getCoins())
    
        expect(result).toEqual(expected)
        
      })
  
      
      it('when we calculate change for 750 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents', () => {
        const expected = [
            getCoinWithUnits(CoinsValues.TWO_EURO, 3),
            getCoinWithUnits(CoinsValues.ONE_EURO, 1),
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 1),
        ]
    
        const result = calculateChange(750, getCoins())
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change for 770 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents', () => {
        const expected = [
            getCoinWithUnits(CoinsValues.TWO_EURO, 3),
            getCoinWithUnits(CoinsValues.ONE_EURO, 1),
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TWENTY_CENTS, 1),
        ]
    
        const result = calculateChange(770, getCoins())
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change for 780 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents, 1 coin of 10 cents', () => {
        const expected = [
            getCoinWithUnits(CoinsValues.TWO_EURO, 3),
            getCoinWithUnits(CoinsValues.ONE_EURO, 1),
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TWENTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TEN_CENTS, 1),
        ]
    
        const result = calculateChange(780, getCoins())
    
        expect(result).toEqual(expected)
        
      })


      it('when we calculate change for 785 cents returns 3 coins of 2 euro, 1 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents, 1 coin of 10 cents, 1 coin of 5 cents', () => {
        const expected = [
            getCoinWithUnits(CoinsValues.TWO_EURO, 3),
            getCoinWithUnits(CoinsValues.ONE_EURO, 1),
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TWENTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TEN_CENTS, 1),
            getCoinWithUnits(CoinsValues.FIVE_CENTS, 1),
        ]
    
        const result = calculateChange(785, getCoins())
    
        expect(result).toEqual(expected)
        
      })


      it('when we calculate change for 285 cents without coins of 2 euro returns 2 coin of 1 euro, 1 coin of 50 cents, 1 coin of 20 cents, 1 coin of 10 cents, 1 coin of 5 cents', () => {
        const coins =[getCoinWithUnits(CoinsValues.TWO_EURO, 0), CoinsValues.ONE_EURO, CoinsValues.FIFTY_CENTS, CoinsValues.TWENTY_CENTS, CoinsValues.TEN_CENTS, CoinsValues.FIVE_CENTS]
        
        const expected = [           
            getCoinWithUnits(CoinsValues.ONE_EURO, 2),
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TWENTY_CENTS, 1),
            getCoinWithUnits(CoinsValues.TEN_CENTS, 1),
            getCoinWithUnits(CoinsValues.FIVE_CENTS, 1),
        ]
    
        const result = calculateChange(285, coins)
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change for 130 cents without coins of 1 euro and 50 cents returns 6 coin of 20 cents, 1 coin of 10 cents', () => {
        const coins = [CoinsValues.TWO_EURO, getCoinWithUnits(CoinsValues.ONE_EURO,0), getCoinWithUnits(CoinsValues.FIFTY_CENTS, 0), CoinsValues.TWENTY_CENTS, CoinsValues.TEN_CENTS, CoinsValues.FIVE_CENTS]
         
        const expected = [                       
            getCoinWithUnits(CoinsValues.TWENTY_CENTS, 5), //default max units are 5
            getCoinWithUnits(CoinsValues.TEN_CENTS, 3),            
        ]
    
        const result = calculateChange(130, coins)
    
        expect(result).toEqual(expected)
        
      })
  
      it('when we calculate change for 130 cents without coins of 1 euro and 20 cents returns 2 coin of 50 cents, 3 coins of 10 cents', () => {
        const coins = [CoinsValues.TWO_EURO,  getCoinWithUnits(CoinsValues.ONE_EURO, 0), CoinsValues.FIFTY_CENTS, getCoinWithUnits(CoinsValues.TWENTY_CENTS, 0), CoinsValues.TEN_CENTS, CoinsValues.FIVE_CENTS]
        
        const expected = [      
            getCoinWithUnits(CoinsValues.FIFTY_CENTS, 2),                 
            getCoinWithUnits(CoinsValues.TEN_CENTS, 3),
        ]
    
        const result = calculateChange(130, coins)
    
        expect(result).toEqual(expected)
        
      })

  })
  