<script setup lang="ts">
import '@/index.css'
import ProductShortDescriptionComponent from '@/components/ProductShortDescriptionComponent.vue';
import { useRouter } from 'vue-router'
import { filename } from 'pathe/utils'
import { computed } from 'vue'

const props = defineProps(['id', 'refName', 'name', 'description', 'prices', 'category', 'type', 'mainImage', 'quantity'])
const refName = props.refName

const price = computed(() => {
    if (props.prices && props.prices.length > 0) {
        const activePrice = props.prices.find(p => p.priceActive) || props.prices[0];
        return {
            amount: activePrice.priceUnitAmount / 100, // Assuming the price is in cents
            currency: activePrice.priceCurrency
        };
    }
    return { amount: 0, currency: 'EUR' };
})

const router = useRouter()

const productView = () => {
    router.push({ name: 'product', params: { refName } }).catch(e => { })
}

const glob = import.meta.glob('@/assets/img/products/*.png', { eager: true })
const images = Object.fromEntries(
    Object.entries(glob).map(([id, value]) => [filename(id), value.default])
)
</script>

<template>
    <div class="col-span-12 md:col-span-6">
        <div @click="productView" class="before:link-cover">
            <div class="theme-tile rounded-2xl lg:rounded-4xl relative overflow-hidden h-full">
                <div class="p-2 xl:p-6 xl:py-2">
                    <div class="image overflow-hidden w-full aspect-square">
                        <picture>
                            <img :src="images[`${refName}`]" :alt="name" />
                        </picture>
                    </div>
                </div>
                <ProductShortDescriptionComponent :key="id" :name="name" :description="description"
                    :category="category" :type="type" :quantity="quantity" :price="price" />
            </div>
        </div>
    </div>
</template>
