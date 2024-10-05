import { firestore } from '../firebase'
import { getDoc, getDocs, collection, query, where, doc } from 'firebase/firestore'

const productsCollection = collection(firestore, 'products')

interface ProductPrice {
  priceId: string
  priceActive: boolean
  priceCurrency: string
  priceType: string
  priceProductId: string
  priceBillingScheme: string
  priceDescription: string
  priceUnitAmount: number
}

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

const getProductPrices = async (productId: string): Promise<ProductPrice[]> => {
  const pricesQuery = collection(productsCollection, productId, 'prices')
  const pricesSnapshot = await getDocs(pricesQuery)

  return pricesSnapshot.docs.map((doc) => ({
    priceId: doc.id,
    priceActive: doc.data().active,
    priceCurrency: doc.data().currency,
    priceType: doc.data().type,
    priceProductId: doc.data().product,
    priceBillingScheme: doc.data().billing_scheme,
    priceDescription: doc.data().description,
    priceUnitAmount: doc.data().unit_amount
  }))
}

const getAllActiveProducts = async (): Promise<Product[]> => {
  const productsQuery = query(productsCollection, where('active', '==', true))
  const productsSnapshot = await getDocs(productsQuery)

  const productsPromises = productsSnapshot.docs.map(async (doc) => {
    const productData = doc.data()
    const prices = await getProductPrices(doc.id)

    const product: Product = {
      id: doc.id,
      name: productData.name,
      description: productData.description,
      category: productData.stripe_metadata_cat,
      type: productData.stripe_metadata_type,
      mainImage: productData.images[0],
      refName: productData.stripe_metadata_refName,
      prices: prices
    }

    console.log(product.id, ' => ', product.prices)
    return product
  })

  return Promise.all(productsPromises)
}

const getQueriedProductById = async (productId: any) => {
  console.log('Product ID: ' + productId)
  const docRef = doc(firestore, 'products', productId)
  try {
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      return { ...docSnapshot.data(), id: docSnapshot.id }
    } else {
      console.log('Document does not exist!')
    }
  } catch (error) {
    console.log(error)
  }
}

const getQueriedProductByRefName = async (refName: any) => {
  const productsQuery = query(
    productsCollection,
    where('active', '==', true),
    where('refName', '==', refName)
  )

  const productsQuerySnap = await getDocs(productsQuery)

  if (productsQuerySnap.empty) {
    console.log('Product does not exist!')
  }

  if (productsQuerySnap.size > 1) {
    console.log('More than 1 active product matching!')
  }

  const firebaseProducts: any = []
  productsQuerySnap.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data())

    const product = {
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      category: doc.data().stripe_metadata_cat,
      type: doc.data().stripe_metadata_type,
      mainImage: doc.data().images[0],
      refName: doc.data().stripe_metadata_refName
    }
    firebaseProducts.push(product)
  })
  return firebaseProducts
}

export { getAllActiveProducts, getQueriedProductById, getQueriedProductByRefName }
