import { defineStore } from 'pinia'                                                                                                                                                 
 import { ref, computed } from 'vue'                                                                                                                                                 
 import type { Product, ProductPrice } from '@/types/Product'                                                                                                                        
                                                                                                                                                                                     
 interface BasketItem {                                                                                                                                                              
   product: Product                                                                                                                                                                  
   selectedPrice: ProductPrice                                                                                                                                                       
   quantity: number                                                                                                                                                                  
 }                                                                                                                                                                                   
                                                                                                                                                                                     
 export const useBasketStore = defineStore('basket', () => {                                                                                                                         
   const items = ref<BasketItem[]>([])                                                                                                                                               
                                                                                                                                                                                     
   const addItem = (product: Product, selectedPrice: ProductPrice, quantity: number = 1) => {                                                                                        
     const existingItem = items.value.find(                                                                                                                                          
       item => item.product.id === product.id && item.selectedPrice.priceId === selectedPrice.priceId                                                                                
     )                                                                                                                                                                               
                                                                                                                                                                                     
     if (existingItem) {                                                                                                                                                             
       existingItem.quantity += quantity                                                                                                                                             
     } else {                                                                                                                                                                        
       items.value.push({ product, selectedPrice, quantity })                                                                                                                        
     }                                                                                                                                                                               
   }                                                                                                                                                                                 
                                                                                                                                                                                     
   const removeItem = (productId: string, priceId: string) => {                                                                                                                      
     const index = items.value.findIndex(                                                                                                                                            
       item => item.product.id === productId && item.selectedPrice.priceId === priceId                                                                                               
     )                                                                                                                                                                               
     if (index !== -1) {                                                                                                                                                             
       items.value.splice(index, 1)                                                                                                                                                  
     }                                                                                                                                                                               
   }                                                                                                                                                                                 
                                                                                                                                                                                     
   const updateQuantity = (productId: string, priceId: string, quantity: number) => {                                                                                                
     const item = items.value.find(                                                                                                                                                  
       item => item.product.id === productId && item.selectedPrice.priceId === priceId                                                                                               
     )                                                                                                                                                                               
     if (item) {                                                                                                                                                                     
       item.quantity = quantity                                                                                                                                                      
     }                                                                                                                                                                               
   }                                                                                                                                                                                 
                                                                                                                                                                                     
   const clearBasket = () => {                                                                                                                                                       
     items.value = []                                                                                                                                                                
   }                                                                                                                                                                                 
                                                                                                                                                                                     
   const totalItems = computed(() => {                                                                                                                                               
     return items.value.reduce((total, item) => total + item.quantity, 0)                                                                                                            
   })                                                                                                                                                                                
                                                                                                                                                                                     
   const totalPrice = computed(() => {                                                                                                                                               
     return items.value.reduce((total, item) => {                                                                                                                                    
       return total + item.selectedPrice.priceUnitAmount * item.quantity                                                                                                             
     }, 0)                                                                                                                                                                           
   })                                                                                                                                                                                
                                                                                                                                                                                     
   return {                                                                                                                                                                          
     items,                                                                                                                                                                          
     addItem,                                                                                                                                                                        
     removeItem,                                                                                                                                                                     
     updateQuantity,                                                                                                                                                                 
     clearBasket,                                                                                                                                                                    
     totalItems,                                                                                                                                                                     
     totalPrice                                                                                                                                                                      
   }                                                                                                                                                                                 
 })