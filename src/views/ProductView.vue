<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';
import ProductDetailsComponent from '@/components/ProductDetailsComponent.vue';

</script>

<template>
    <HeaderComponent />
    <ProductDetailsComponent />
    <FooterComponent />
</template>


