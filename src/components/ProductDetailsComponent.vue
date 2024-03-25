<script setup lang="ts">
import '@/index.css'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ProductLongDescriptionComponent from './ProductLongDescriptionComponent.vue';

</script>

<template>
    <div>
        <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
            <div class="grid grid-cols-12 gap-2 ">
                <ProductCardComponent />
                <ProductLongDescriptionComponent />
            </div>
        </div>
    </div>
</template>