<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ProductLongDescriptionComponent from '@/components/ProductLongDescriptionComponent.vue'
import { getQueriedProductByRefName } from '@/services/DataService'
import { ref, onMounted, onBeforeMount } from 'vue'
import { filename } from 'pathe/utils'

const props = defineProps([
  'id',
  'name',
  'description',
  'quantity',
  'price',
  'currency',
  'category',
  'type',
  'refName'
])

const products: any = ref([])
const isLoading = ref(true)

/* get products */
onMounted(async () => {
  try {
  products.value = await getQueriedProductByRefName(`${props.refName}`)
  isLoading.value = false
  } catch (error) {
      console.error('Error fetching products:', error)
      isLoading.value = false
  }
})

const glob = import.meta.glob('@/assets/img/products/*.png', { eager: true })
const images = Object.fromEntries(
  Object.entries(glob).map(([id, value]) => [filename(id), value.default])
)
</script>

<template>
  <HeaderComponent />
  <div>
    <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
      <div class="grid grid-cols-12 gap-2">
        <ProductCardComponent v-for="product in products"
          :id="product.id"
          :name="product.name"
          :refName="product.refName"
          :description="product.description"
          :mainImage="product.mainImage"
          :category="product.category"
          :type="product.type"
          :prices="product.prices"
        />
        <ProductLongDescriptionComponent v-for="product in products"
          :id="product.id"
          :name="product.name"
          :refName="product.refName"
          :description="product.description"
          :mainImage="product.mainImage"
          :category="product.category"
          :type="product.type"
          :prices="product.prices"
          :product="product"
        />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
