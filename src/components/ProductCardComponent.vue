<script setup lang="ts">
import '@/index.css'
import ProductShortDescriptionComponent from '@/components/ProductShortDescriptionComponent.vue';

</script>

<template>
    <div class="col-span-12 md:col-span-6">
        <div class="theme-tile rounded-2xl lg:rounded-4xl relative overflow-hidden h-full">
            <div class="p-2 xl:p-6 xl:py-2">
                <div class="image overflow-hidden w-full aspect-square">
                    <picture>
                        <img src="../assets/img/products/veggietea2.png" alt="Product 1" class="" />
                    </picture>
                </div>
            </div>
            <ProductShortDescriptionComponent />
        </div>
    </div>
</template>