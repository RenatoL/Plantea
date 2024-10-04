import { firestore } from '../firebase'
import { getDoc, getDocs, collection, query, where, doc } from 'firebase/firestore'

const productsCollection = collection(firestore, 'products')

const getAllActiveProducts = async () => {
  const productsQuery = query(productsCollection, where('active', '==', true))
  const productsQuerySnap = await getDocs(productsQuery)

  const firebaseProducts: any = []
  productsQuerySnap.forEach(async (doc) => {
    const productPrices: any = []
    const querySnapshot = await getDocs(collection(productsCollection, doc.id, 'prices'))
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const productPrice = {
        priceId: doc.id,
        priceActive: doc.data().active,
        priceCurrency: doc.data().currency,
        priceType: doc.data().type,
        priceProductId: doc.data().product,
        priceBillingScheme: doc.data().billing_scheme,
        priceDescription: doc.data().description,
        priceUnitAmount: doc.data().unit_amount
      }
      productPrices.push(productPrice)
    })
    console.log(doc.id, ' => ', doc.data())
    const product = {
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      category: doc.data().stripe_metadata_cat,
      type: doc.data().stripe_metadata_type,
      mainImage: doc.data().images[0],
      refName: doc.data().stripe_metadata_refName,
      prices: productPrices
    }

    console.log(product.id, ' => ', product.prices)
    firebaseProducts.push(product)
  })
  return firebaseProducts
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
