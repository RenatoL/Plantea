<template>
  <RouterView />
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

document.documentElement.classList.add('theme-day')
</script>