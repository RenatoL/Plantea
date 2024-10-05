<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps([
  'name',
  'description',
  'quantity',
  'prices',
  'category',
  'type',
  'mainImage'
])

const price = computed(() => {
  if (props.prices && props.prices.length > 0) {
    const activePrice = props.prices.find((p) => p.priceActive) || props.prices[0]
    return {
      amount: activePrice.priceUnitAmount / 100, // Assuming the price is in cents
      currency: activePrice.priceCurrency
    }
  }
  return { amount: 0, currency: 'EUR' }
})
</script>

<template>
  <div class="py-2 px-1 pt-0 pb-3">
    <div class="text-center font-serif font-200 text-serif-18">
      <p>
        {{ name }}
      </p>
      <p>
        <span
          >{{ quantity }}
          -
        </span>
        {{ price.amount.toFixed(2) }} {{ price.currency }}
      </p>
      <div class="flex-row flex-wrap gap-1 mt-2 justify-center flex">
        <span class="block button button-pill no-hover">{{ category }}</span>
        <span class="block button button-pill no-hover">{{ type }}</span>
      </div>
    </div>
  </div>
</template>
