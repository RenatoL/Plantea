<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';
import ProductCardComponent from '@/components/ProductCardComponent.vue'
import ProductLongDescriptionComponent from '@/components/ProductLongDescriptionComponent.vue';
import { getQueriedProductByRefName } from '@/services/DataService';
import { ref, onMounted, onBeforeMount } from 'vue';
import { filename } from 'pathe/utils'

const props = defineProps(['key', 'name', 'description', 'quantity', 'price', 'currency', 'category', 'type', 'refName'])

const products: any = ref([]);
const isLoading = ref(true)

/* get products */
onMounted(async () => {
    console.log("Props key: " + `${props.key}`)
    products.value = await getQueriedProductByRefName(`${props.key}`)
    isLoading.value = false
})


const glob = import.meta.glob('@/assets/img/products/*.png', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
)
</script>

<template>
    <HeaderComponent />
    <div>
        <div class="px-10 md:px-20 pb-2 md:pb-4 md:pt-4">
            <div class="grid grid-cols-12 gap-2 ">
                <ProductCardComponent :name="name" :description="description" :category="category" :type="type" />
                <ProductLongDescriptionComponent :name="name" :description="description" :category="category"
                    :type="type" />
            </div>
        </div>
    </div>
    <FooterComponent />
</template>
