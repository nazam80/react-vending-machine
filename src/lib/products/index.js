export const ProductValues = {
    COKE: {
        id: 'coke',
        label: 'Coca cola',
        priceLabel: '2.20€',
        priceInCents: 220,
        units: 5,
    },
    ZERO_COKE: {
        id: 'zero_coke',
        label: 'Coca cola zero',
        priceLabel: '1.90€',
        priceInCents: 190,
        units: 5,
    },
    ORANGE_FANTA: {
        id: 'orange_fanta',
        label: 'Fanta Naranja',
        priceLabel: '2.30€',
        priceInCents: 230,
        units: 5,
    },
    LEMON_FANTA: {
        id: 'lemon_fanta',
        label: 'Fanta limón',
        priceLabel: '2.10€',
        priceInCents: 210,
        units: 5,
    },
}

export const getProducts = () => [ProductValues.COKE, ProductValues.ZERO_COKE, ProductValues.ORANGE_FANTA, ProductValues.LEMON_FANTA]


export const checkIfcanBuyProductById = (products, productId, moneyInCents) => {
    const product = findProductById(products, productId)
    if(product){
        checkIfcanBuyProduct(product, moneyInCents)
    }else{
        throw new Error('Product not found with id ' + productId)
    }
}
const findProductById = (products, productId) => products.find(p => p.id === productId)

const checkIfcanBuyProduct = (product, moneyInCents) => {
    if (product.units <= 0) {
        throw new Error(`There are not ${product.label} available`)
    } else if (moneyInCents < product.priceInCents) {
        throw new Error(`There are not enough money to buy ${product.label}`)
    }    
}


export const getProductWithUnits = (product, units) => {
    return {
        ...product,
        units: units,
    }
}

export const refillProductById = (products, productId, units) => products.map((product) => product.id === productId ? getProductWithUnits(product, product.units + units) : product)


export const buyProduct = (products, productId, moneyInCents) => {
    checkIfcanBuyProductById(products, productId, moneyInCents)
    return refillProductById(products, productId, -1)
}


export const calculateChangeBuyingProduct = (products, productId, moneyInCents) => {
    const product = findProductById(products, productId)
    checkIfcanBuyProduct(product, moneyInCents)
    return moneyInCents - product.priceInCents
}
