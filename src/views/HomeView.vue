<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import '@/index.css'
  import HeaderComponent from '@/components/HeaderComponent.vue'
  import FiltersComponent from '@/components/FiltersComponent.vue';
  import ContentComponent from '@/components/ContentComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
    <HeaderComponent />

    <FiltersComponent />

    <ContentComponent />

    <FooterComponent />
</template>


