<script setup lang="ts">
import '@/index.css'
import ProductCard from '@/components/ProductCardComponent.vue'
import { getAllActiveProducts } from '@/services/DataService';
import { ref, onMounted, onBeforeMount } from 'vue';

const products: any = ref([]);
const isLoading = ref(true)

/* get products */
onBeforeMount(async () => {
    products.value = await getAllActiveProducts()
    isLoading.value = false
})
</script>

<template>
    <div>
        <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
            <div class="grid grid-cols-12 gap-2">
                <ProductCard v-for="product in products" :key="product.id" :name="product.name"
                    :refName="product.refName" :description="product.description" :mainImage="product.mainImage"
                    :category="product.category" :type="product.type" 
                    :price="product.price" class="xl:col-span-4" />
            </div>
        </div>
    </div>
</template>