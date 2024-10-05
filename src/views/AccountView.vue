<template>
  <HeaderComponent />
  <button @click="handleSignOut" v-if="isLoggedIn">Logout</button>
  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/index.css'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/').catch((e) => {})
  })
}
</script>
