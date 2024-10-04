<script setup lang="ts">


defineProps(['name', 'description', 'quantity', 'price', 'currency', 'category', 'type', 'mainImage'])
</script>

<template>
    <div class="py-2 px-1 pt-0 pb-3">
        <div class="text-center font-serif font-200 text-serif-18">
            <p>
                    {{ name }}
            </p>
            <p>
                <span>{{ quantity }}
                    -
                </span>
                {{ price }} {{ currency }}
            </p>
            <div class="flex-row flex-wrap gap-1 mt-2 justify-center flex">
                <span class="block button button-pill no-hover">{{ category }}</span>
                <span class="block button button-pill no-hover">{{ type }}</span>
            </div>
        </div>
    </div>
</template>