<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BasketComponent from '@/components/BasketComponent.vue';
</script>

<template>
  <HeaderComponent />

  <BasketComponent />

  <FooterComponent />
</template>
