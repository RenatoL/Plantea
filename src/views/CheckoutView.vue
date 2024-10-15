<template>
  <HeaderComponent />
  <CheckoutComponent />
  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CheckoutComponent from '@/components/CheckoutComponent.vue'
</script>
