<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'

const props = defineProps([
  'name',
  'description',
  'quantity',
  'prices',
  'category',
  'type',
  'mainImage'
])

const defaultPrice = computed(() => 
  props.prices.find(price => price.priceMetadata.isDefault) || props.prices[0]
)

const selectedPrice = ref(defaultPrice.value)

const computedQuantity = computed(() => selectedPrice.value.priceMetadata.quantity)

const price = computed(() => ({
  amount: selectedPrice.value.priceUnitAmount / 100,
  currency: selectedPrice.value.priceCurrency
}))
</script>

<template>
  <div class="py-2 px-1 pt-0 pb-3">
    <div class="text-center font-serif font-200 text-serif-18">
      <p>
        {{ name }}
      </p>
      <p>
        <span>{{ computedQuantity }} — </span><span>{{ price.amount }} {{ price.currency }}</span>
      </p>
      <div class="flex-row flex-wrap gap-1 mt-2 justify-center flex">
        <span class="block button button-pill no-hover">{{ category }}</span>
        <span class="block button button-pill no-hover">{{ type }}</span>
      </div>
    </div>
  </div>
</template>
