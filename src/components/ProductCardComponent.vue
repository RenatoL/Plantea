<script setup lang="ts">
import '@/index.css'
import ProductShortDescriptionComponent from '@/components/ProductShortDescriptionComponent.vue';
import { useRouter } from 'vue-router'
import { filename } from 'pathe/utils'

const props = defineProps(['id', 'refName', 'name', 'description', 'price', 'category', 'type', 'mainImage', 'quantity', 'currency'])
const refName = props.refName

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
                    :category="category" :type="type" :quantity="quantity" :price="price" :currency="currency" />
            </div>
        </div>
    </div>
</template>