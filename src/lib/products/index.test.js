import {ProductValues, getProducts, checkIfcanBuyProductById, getProductWithUnits, refillProductById, buyProduct, calculateChangeBuyingProduct} from '.'

describe('Given an array of products values', () => {
    

      it('when we check if I can buy a product without stock returns an error', () => {
        const products = [
          getProductWithUnits(ProductValues.COKE, 0),
          ProductValues.LEMON_FANTA,
          ProductValues.ORANGE_FANTA,
        ]
        
    
        expect( ()=>checkIfcanBuyProductById(products, ProductValues.COKE.id, 30) ).toThrow(`There are not ${ProductValues.COKE.label} available`)
        
      })

      it('when we check if I can buy a product without enough money  returns an error', () => {
        const products = getProducts()
        expect( ()=>checkIfcanBuyProductById(products, ProductValues.COKE.id, 30) ).toThrow(`There are not enough money to buy ${ProductValues.COKE.label}`)
        
      })

      it('when we check if I can buy a product with stock and with money returns no error', () => {
        const products = getProducts()
        const result = checkIfcanBuyProductById(products, ProductValues.COKE.id, 300)
        const expected = undefined
    
        expect(result).toEqual(expected)
        
      })


      it('when we buy a product without stock returns an error', () => {
        const products = [
          getProductWithUnits(ProductValues.COKE, 0),
          ProductValues.LEMON_FANTA,
          ProductValues.ORANGE_FANTA,
        ]
        
    
        expect(()=>buyProduct(products, ProductValues.COKE.id, 30)).toThrow(`There are not ${ProductValues.COKE.label} available`)
        
      })

      it('when we buy a product without enough money  returns an error', () => {
        const products = getProducts()
        expect( ()=>buyProduct(products, ProductValues.COKE.id, 30) ).toThrow(`There are not enough money to buy ${ProductValues.COKE.label}`)
        
      })

      it('when we buy a product with stock and with money returns array of product reducing one element in product and with the same quantity in others products', () => {
        const products = [
          getProductWithUnits(ProductValues.COKE, 2),
          getProductWithUnits(ProductValues.ZERO_COKE, 5),
          getProductWithUnits(ProductValues.LEMON_FANTA, 5),
          getProductWithUnits(ProductValues.ORANGE_FANTA, 5),
        ]

        const expected = [      
          getProductWithUnits(ProductValues.COKE, 1),
          getProductWithUnits(ProductValues.ZERO_COKE, 5),
          getProductWithUnits(ProductValues.LEMON_FANTA, 5),
          getProductWithUnits(ProductValues.ORANGE_FANTA, 5),
        ]

        const result = buyProduct(products, ProductValues.COKE.id, 300)
        
    
        expect(result).toEqual(expected)
        
      })


      it('when we refill 10 coke returns an array with 10 extra cokes and the same quantity of other coins', () => {
        const products = [
          getProductWithUnits(ProductValues.COKE, 2),
          getProductWithUnits(ProductValues.ZERO_COKE, 5),
          getProductWithUnits(ProductValues.LEMON_FANTA, 5),
          getProductWithUnits(ProductValues.ORANGE_FANTA, 5),
        ]
        
        const expected = [      
          getProductWithUnits(ProductValues.COKE, 12),
          getProductWithUnits(ProductValues.ZERO_COKE, 5),
          getProductWithUnits(ProductValues.LEMON_FANTA, 5),
          getProductWithUnits(ProductValues.ORANGE_FANTA, 5),
        ]
    
        const result = refillProductById(products, ProductValues.COKE.id, 10)
    
        expect(result).toEqual(expected)
        
      })


      it('when we calculate change of buying a product without stock returns an error', () => {
        const products = [
          getProductWithUnits(ProductValues.COKE, 0),
          ProductValues.LEMON_FANTA,
          ProductValues.ORANGE_FANTA,
        ]
        
    
        expect(()=>calculateChangeBuyingProduct(products, ProductValues.COKE.id, 30)).toThrow(`There are not ${ProductValues.COKE.label} available`)
        
      })

      it('when we calculate change of buying a product without enough money  returns an error', () => {
        const products = getProducts()
        expect(()=>calculateChangeBuyingProduct(products, ProductValues.COKE.id, 30)).toThrow(`There are not enough money to buy ${ProductValues.COKE.label}`)
        
      })

      it('when we calculate change of buying a product with stock and with more money than product price returns a value greater than 0', () => {
        const products = getProducts()
        const expected = 300 - ProductValues.COKE.priceInCents

        const result = calculateChangeBuyingProduct(products, ProductValues.COKE.id, 300)
        
    
        expect(result).toEqual(expected)
        
      })

      it('when we calculate change of buying a product with stock and with exact product price returns 0', () => {
        const products = getProducts()
        const expected = 0

        const result = calculateChangeBuyingProduct(products, ProductValues.COKE.id, ProductValues.COKE.priceInCents)
        
    
        expect(result).toEqual(expected)
        
      })

  })
  