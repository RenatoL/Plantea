<script setup lang="ts">
import '@/index.css'
import ProductCard from '@/components/ProductCardComponent.vue'
</script>

<template>
    <div>
        <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
            <div class="grid grid-cols-12 gap-2">
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
                <ProductCard class="xl:col-span-4" />
            </div>
        </div>
    </div>
</template>