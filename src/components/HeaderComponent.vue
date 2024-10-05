<template>
  <header
    class="sticky top-0 z-50 border-plantea-battle-gray-500 border-b bg-plantea-white-smoke-500 shadow-md py-2"
  >
    <div class="container flex justify-between items-center px-4 mx-auto">
      <h1>
        <router-link to="/">
          <img
            class="min-h-[100px] min-w-[110px] aspect-[561/500]"
            src="../assets/img/logo.png"
            alt="Plantea"
            aria-label="Plantea Logo"
          />
        </router-link>
      </h1>

      <nav class="flex items-center flex-nowrap p-5 m-5">
        <a class="">
          <!-- <MagnifyingGlassIcon class="h-10 w-10" /> -->
          <div class="mx-auto max-w-md">
            <form action="" class="md:flex relative mx-auto w-max">
              <input
                type="search"
                class="peer cursor-pointer relative z-10 h-12 rounded-full border-none bg-plantea-white-smoke-500 bg-opacity-0 pl-12 outline-none focus:cursor-text focus:ring-plantea-battle-gray-500 focus:pl-16 focus:pr-4 transition-all duration-300 w-8 focus:w-52"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="absolute inset-y-0 my-auto h-8 w-12 border-r-opacity-0 currentColor peer-focus:z-20 peer-focus:border-r"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </form>
          </div>
        </a>

        <router-link
          to="/account"
          class="btn-primary button button-circle-small p-5 m-5"
          alt="Account"
          aria-label="Account"
        >
          <div class="h-full flex justify-center items-center">
            <UserIcon />
          </div>
        </router-link>

        <router-link
          to="/cart"
          class="btn-primary button button-circle-small p-5 m-5"
          alt="Shopping Cart"
          aria-label="Shopping Cart"
        >
          <div class="h-full flex justify-center items-center">
            <ShoppingCartIcon />
          </div>
        </router-link>

        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>

        <p class="p-5 m-5 font-serif font-thin flex-nowrap subpixel-antialiased">EN / PT</p>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import '@/index.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const account = () => {
  router.push('account').catch((e) => {})
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
