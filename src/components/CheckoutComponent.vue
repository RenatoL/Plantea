<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 items-start bg-plantea-heavy-metal-500">
    <div class="hidden lg:block sticky top-0">
      <div class="image h-[68vh]">
        <picture>
          <img src="../assets/img/BlackTea_stock_BG.jpg" />
        </picture>
      </div>
    </div>
    <div class="pt-18 lg:pt-20 pb-4">
      <div class="px-container-mobile md:px-container-desktop">
        <div class="mx-auto w-full text-plantea-white-smoke-500 text-center p-4 lg:max-w-[440px]">
          <h1 class="font-serif font-thin text-center text-4xl mb-2 lg:text-5xl lg:mb-3">
            Checkout
          </h1>
          <div class="flex flex-col gap-2 mb-2 font-serif font-thin">
            <StripeElements
              v-if="stripeLoaded"
              v-slot="{ elements, instance }"
              ref="elms"
              :stripe-key="stripeKey"
              :instance-options="instanceOptions"
              :elements-options="elementsOptions"
            >
              <StripeElement
                class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
                ref="card"
                :elements="elements"
                :options="cardOptions"
              />
            </StripeElements>
            <button
              @click="pay"
              class="block w-full p-4 text-plantea-heavy-metal-500 border-plantea-heavy-metal-500 rounded-md bg-plantea-white-smoke-500"
            >
              Pay
            </button>
          </div>
          <p>
            <button @click="payWithApple" class="p-1">
              <img
                class="w-10 aspect-square"
                src="../assets/img/google-signin-assets/web_neutral_rd_na.png"
                alt="Apple Pay"
                aria-label="Apple Logo for Payment"
              />
            </button>
            <button @click="payWithPaypal" class="p-1">
              <img
                class="w-10 aspect-square"
                src="../assets/img/facebook-signin-assets/facebook_2x.png"
                alt="Paypal Pay"
                aria-label="Paypal Logo for Payment"
              />
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loadStripe } from '@stripe/stripe-js'
import { ref, onBeforeMount } from 'vue'
import { useBasketStore } from '@/stores/basketStore'
import { StripeElements, StripeElement } from 'vue-stripe-js'

let stripeLoaded: any
let stripePromise: any
let instanceOptions: any
let elementsOptions: any
let cardOptions: any
let card: any
let elms: any
const stripeKey = ref(
  'pk_test_51OqzcQBl6CWDUv7M32dgN1BWs2Wq5NmXgxRlxdLN7zhXaLBl1I8l8jcOyvO8NwPNMMVSZINCYd0HFKD3epyFsJ2g00laDqpAjM'
)

const basketStore = useBasketStore()

onBeforeMount(() => {
  stripeLoaded = ref(false)
  stripePromise = loadStripe(stripeKey.value)
  stripePromise.then(() => {
    stripeLoaded.value = true
  })

  instanceOptions = ref({
    // https://stripe.com/docs/js/initializing#init_stripe_js-options
  })
  elementsOptions = ref({
    // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
  })
  cardOptions = ref({
    // https://stripe.com/docs/stripe.js#element-options
    value: {
      postalCode: '12345'
    }
  })

  card = ref()
  elms = ref()

})

const pay = async () => {
// Get stripe element                                                                                                                                                             
   const cardElement = card.value.stripeElement                                                                                                                                      
                                                                                                                                                                                     
   // Create payment method                                                                                                                                                          
   const { paymentMethod, error } = await elms.value.instance.createPaymentMethod({                                                                                                  
     type: 'card',                                                                                                                                                                   
     card: cardElement,                                                                                                                                                              
   })                                                                                                                                                                                
                                                                                                                                                                                     
   if (error) {                                                                                                                                                                      
     console.error(error)                                                                                                                                                            
     // Handle error (e.g., show error message to user)                                                                                                                              
     return                                                                                                                                                                          
   }                                                                                                                                                                                 
                                                                                                                                                                                     
   // Here you would typically send the payment method ID and basket items to your server                                                                                            
   // Your server would then create a PaymentIntent with Stripe and return the client secret                                                                                         
   // For this example, we'll just log the payment method and basket items                                                                                                           
   console.log('Payment Method:', paymentMethod)                                                                                                                                     
   console.log('Basket Items:', basketStore.items)                                                                                                                                   
   console.log('Total Amount:', basketStore.totalPrice)                                                                                                                              
                                                                                                                                                                                     
   // After successful payment, clear the basket                                                                                                                                     
   basketStore.clearBasket()                                                                                                                                                         
                                                                                                                                                                                     
   // Redirect to a success page or show a success message                                                                                                                           
   // router.push('/payment-success') 
}

const payWithApple = () => {}
const payWithPaypal = () => {}
</script>
