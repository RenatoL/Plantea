<script setup lang="ts">                                                                                                                                                            
 import { useBasketStore } from '@/stores/basketStore'                                                                                                                               
 import { useRouter } from 'vue-router'                                                                                                                                              
                                                                                                                                                                                     
 const basketStore = useBasketStore()                                                                                                                                                
 const router = useRouter()                                                                                                                                                          
                                                                                                                                                                                     
 const formatPrice = (price: number) => {                                                                                                                                            
   return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price / 100)                                                                                 
 }                                                                                                                                                                                   
                                                                                                                                                                                     
 const updateQuantity = (productId: string, priceId: string, newQuantity: number) => {                                                                                               
   if (newQuantity > 0) {                                                                                                                                                            
     basketStore.updateQuantity(productId, priceId, newQuantity)                                                                                                                     
   } else {                                                                                                                                                                          
     basketStore.removeItem(productId, priceId)                                                                                                                                      
   }                                                                                                                                                                                 
 }                                                                                                                                                                                   
                                                                                                                                                                                     
 const removeItem = (productId: string, priceId: string) => {                                                                                                                        
   basketStore.removeItem(productId, priceId)                                                                                                                                        
 }                                                                                                                                                                                   
                                                                                                                                                                                     
 const proceedToCheckout = () => {                                                                                                                                                   
   router.push('/checkout')                                                                                                                                                          
 }                                                                                                                                                                                   
 </script>                                                                                                                                                                           
                                                                                                                                                                                     
<template>                                                                                                                                                                          
   <div class="basket">                                                                                                                                                              
     <h2>Your Basket</h2>                                                                                                                                                            
     <div v-if="basketStore.items.length === 0">                                                                                                                                     
       Your basket is empty.                                                                                                                                                         
     </div>                                                                                                                                                                          
     <ul v-else>                                                                                                                                                                     
       <li v-for="item in basketStore.items" :key="`${item.product.id}-${item.selectedPrice.priceId}`">                                                                              
         <div>                                                                                                                                                                       
           <h3>{{ item.product.name }}</h3>                                                                                                                                          
           <p>{{ item.selectedPrice.priceDescription }}</p>                                                                                                                          
           <p>Quantity: {{ item.quantity }}</p>                                                                                                                                      
           <p>Price: {{ formatPrice(item.selectedPrice.priceUnitAmount * item.quantity) }}</p>                                                                                       
         </div>                                                                                                                                                                      
         <div>                                                                                                                                                                       
           <button @click="updateQuantity(item.product.id, item.selectedPrice.priceId, item.quantity - 1)">-</button>                                                                
           <button @click="updateQuantity(item.product.id, item.selectedPrice.priceId, item.quantity + 1)">+</button>                                                                
           <button @click="removeItem(item.product.id, item.selectedPrice.priceId)">Remove</button>                                                                                  
         </div>                                                                                                                                                                      
       </li>                                                                                                                                                                         
     </ul>                                                                                                                                                                           
     <div v-if="basketStore.items.length > 0">                                                                                                                                       
       <p>Total Items: {{ basketStore.totalItems }}</p>                                                                                                                              
       <p>Total Price: {{ formatPrice(basketStore.totalPrice) }}</p>                                                                                                                 
       <button @click="proceedToCheckout">Proceed to Checkout</button>                                                                                                               
     </div>                                                                                                                                                                          
   </div>                                                                                                                                                                            
 </template>  