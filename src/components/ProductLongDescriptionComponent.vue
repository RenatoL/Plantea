<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps([
  'name',
  'refName',
  'description',
  'quantity',
  'prices',
  'currency',
  'category',
  'type',
  'mainImage'
])

import { ref } from 'vue'

const defaultPrice = computed(() => 
  props.prices.find(price => price.priceMetadata.isDefault) || props.prices[0]
)

const selectedPrice = ref(defaultPrice.value)

const quantity = computed(() => selectedPrice.value.priceMetadata.quantity)
const price = computed(() => ({
  amount: selectedPrice.value.priceUnitAmount / 100,
  currency: selectedPrice.value.priceCurrency
}))

const selectQuantity = (selectedQuantity: string) => {
  const newPrice = props.prices.find(price => price.priceMetadata.quantity === selectedQuantity)
  if (newPrice) {
    selectedPrice.value = newPrice
  }
}
</script>

<template>
  <div
    class="col col-span-12 md:col-span-6 flex flex-col items-center justify-center pt3 md:pt-10 pb-8 md:pb-3"
  >
    <div class="px-container-mobile md:px-container-desktop w-full max-w-[550px] relative">
      <h1 class="font-serif font-200 text-serif-26 md:text-serif-30">{{ name }}</h1>
      <p class="font-serif font-200 text-serif-26 md:text-serif-30">
        <span>{{ quantity }} — </span><span>{{ price.amount }} {{ price.currency }}</span>
      </p>
      <div class="rich-text mt-4 mb-2">
        <div class="rich-text rich-text-thin-sans text-sans-16 md:indent-6">
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <div>
        <div class="border-y border-solid text-mono-12 font-mono flex items-stretch flex-col xl:flex-row">
          <div class="flex py-1 xl:pr-1">
            <p class="pt-1 mr-1">Size:</p>
            <div class="relative">
              <select v-model="selectedPrice.priceMetadata.quantity" @change="selectQuantity($event.target.value)" class="w-[105px] left-1/2 block button button-pill">
                <option v-for="price in prices" :key="price.priceId" :value="price.priceMetadata.quantity">
                  {{ price.priceMetadata.quantity }}
                </option>
              </select>
            </div>
          </div>
          <div>
          <div class="flex py-1 xl:pr-1">                                                                        
             <p class="pt-1 mr-1">Quantity:</p>                                                                   
             <div class="relative">                                                                               
               <span class="w-[105px] left-1/2 block button button-pill no-hover">1</span>                        
               <button                                                                                            
                 aria-label="Decrement Quantity"                                                                  
                 class="button button-pill-height link-opacity-hover absolute top-0 left-0 bottom-0 w-[50%]"      
               >                                                                                                  
                 <span class="text-theme-color">-</span>                                                          
               </button>                                                                                          
               <button                                                                                            
                 aria-label="Increment Quantity"                                                                  
                 class="button button-pill-height link-opacity-hover absolute top-0 right-0 bottom-0 w-[50%]"     
               >                                                                                                  
                 <span class="text-theme-color">+</span>                                                          
               </button>                                                                                          
             </div>                                                                                               
           </div>                                                                                                 
           <div class="flex-grow xl:pl-1 border-solid border-t xl:border-t-0 xl:border-l">                        
             <div class="py-1 w-full justify-center">                                                             
               <span class="block button button-pill no-hover w-full">Makes ~ 3-4 cups</span>                     
             </div>                                                                                               
           </div> 
          </div>
        </div>
        <div class="mt-2">
          <button class="block w-full button button-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
