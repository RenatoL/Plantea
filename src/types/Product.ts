interface Product {
    id: string
    name: string
    description: string
    category: string
    type: string
    mainImage: string
    refName: string
    prices: ProductPrice[]
  }

  interface ProductPrice {
    priceId: string
    priceActive: boolean
    priceCurrency: string
    priceType: string
    priceProductId: string
    priceBillingScheme: string
    priceDescription: string
    priceUnitAmount: number
    priceMetadata: PriceMetadata[]
  }
  
  interface PriceMetadata {
    [key: string]: boolean;
  
  }

  export type { Product, ProductPrice, PriceMetadata }