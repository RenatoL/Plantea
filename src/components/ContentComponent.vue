<script setup lang="ts">
import '@/index.css'
import ProductCard from '@/components/ProductCardComponent.vue'
import { getAllActiveProducts } from '@/services/DataService';
import { ref, onMounted } from 'vue';

const products = ref<any[]>([]);
const isLoading = ref(true);

onMounted(async () => {
    try {
        products.value = await getAllActiveProducts();
        isLoading.value = false;
        console.log("Content comp: products.value is: ", products.value);
    } catch (error) {
        console.error("Error fetching products:", error);
        isLoading.value = false;
    }
});
</script>

<template>
    <div>
        <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
            <div v-if="isLoading" class="text-center">
                Loading products...
            </div>
            <div v-else class="grid grid-cols-12 gap-2">
                <ProductCard 
                    v-for="product in products" 
                    :key="product.id" 
                    :name="product.name"
                    :refName="product.refName" 
                    :description="product.description" 
                    :mainImage="product.mainImage"
                    :category="product.category" 
                    :type="product.type" 
                    :prices="product.prices"
                    class="xl:col-span-4" 
                />
            </div>
        </div>
    </div>
</template>
