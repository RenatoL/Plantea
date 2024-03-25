<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Vue3SlideUpDown } from "vue3-slide-up-down";

const show = ref(false)
let filterBtn = 'Filter'
let filterCountPlaceholder = ref('')

function filterDropdown() {
    show.value = !show.value
    filterBtn = show.value ? 'Close' : 'Filter'
    /* filterCountPlaceholder.value = show.value ? 'No filters selected' : '' */
}

function dummy() { }
</script>

<template>
    <div class="pt-12 md:pt-16">
        <div class="mb-3 md:mb-2">
            <div class="mx-auto max-w-grid px-5 md:px-10">
                <div class="pt-3 pb-2">
                    <div class="grid grid-cols-12 px-5 md:px-10 gap-y-1 items-center">
                        <div class="col-span-12 md:col-span-6">
                            <button
                                class="flex justify-start items-center font-200 font-serif text-serif-30 md:text-serif-48 tracking-tight"
                                aria-label="Open Collection Menu">
                                <span class="block mr-1">Shop</span>
                                <span class="block text-plantea-crusoe-green-500 uppercase">Tea / Accessories</span>
                            </button>
                        </div>
                        <div class="col-span-12 md:col-span-6">
                            <div class="md:flex justify-between items-center">
                                <div>
                                    <div class="hidden lg:block"></div>
                                    <p>{{ filterCountPlaceholder }}</p>
                                </div>
                                <div class="flex">
                                    <Vue3SlideUpDown :duration="250" v-model="show">
                                        <div class="hidden md:block">
                                            <button @click="dummy"
                                                class="block w-full min-w-32 md:w-[auto] button button-pill-secondary hover:bg-plantea-white-smoke-500"
                                                aria-label="Clear All Filters"><span
                                                    class="flex justify-center items-center"><span
                                                        class="flex justify-center items-center"><span class="block">Clear
                                                            All</span></span><span class="block" aria-hidden="true">
                                                    </span></span></button>
                                        </div>
                                    </Vue3SlideUpDown>
                                    <div class="flex gap-1">
                                        <div class="hidden lg:block"></div><button @click="filterDropdown"
                                            class="block w-full min-w-32 md:w-[auto] button button-pill-secondary hover:bg-plantea-white-smoke-500"
                                            aria-label="Open and Close Filter Menu"><span
                                                class="flex justify-center items-center"><span
                                                    class="flex justify-center items-center"><span class="block">{{
                                                        filterBtn }}</span></span><span class="block" aria-hidden="true">
                                                </span></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Vue3SlideUpDown :duration="250" v-model="show">
                        <div class="grid grid-cols-12 gap-y-1 items-center">
                            <div class="hidden xl:block col-span-6"></div>
                            <div class="col-span-12 md:col-span-6 pb-2">
                                <div class="grid grid-cols-12 gap-y-2 mb-3">
                                    <div class="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-4">
                                        <h2 class="mb-1">Type</h2>
                                        <ul class="">
                                            <li>
                                                <button class=" link-filter">Black</button>
                                            </li>
                                            <li>
                                                <button class=" link-filter">Green</button>
                                            </li>
                                            <li>
                                                <button class=" link-filter">White</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-4">
                                        <h2 class="mb-1">Sort</h2>
                                        <ul class="">
                                            <li><button class=" link-filter active">Newest</button>
                                            </li>
                                            <li><button class=" link-filter">Price:
                                                    Low</button></li>
                                            <li><button class=" link-filter">Price:
                                                    High</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    class="block button button-pill-secondary transition hover:bg-plantea-white-smoke-500">Apply
                                    Filters</button>
                            </div>
                        </div>
                    </Vue3SlideUpDown>

                </div>
            </div>
        </div>
    </div>
</template>