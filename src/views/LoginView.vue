<template>
  <HeaderComponent />

  <div class="grid grid-cols-1 lg:grid-cols-2 items-start bg-plantea-heavy-metal-500">
    <div class="hidden lg:block sticky top-0">
      <div class="image h-[68vh]">
        <picture>
          <img src="../assets/img/BlackTea_stock_BG.jpg" />
        </picture>
      </div>
    </div>
    <div class="pt-18 lg:pt-20 pb-4">
      <div class="px-container-mobile md:px-container-desktop">
        <div class="mx-auto w-full text-plantea-white-smoke-500 text-center p-4 lg:max-w-[440px]">
          <h1 class="font-serif font-thin text-center text-4xl mb-2 lg:text-5xl lg:mb-3">
            Sign In
          </h1>

          <div class="flex flex-col gap-2 mb-2 font-serif font-thin">
            <input
              type=""
              v-model="email"
              class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
              placeholder="Email"
            />
            <input
              type=""
              v-model="password"
              class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
              placeholder="Password"
            />
            <button
              @click="signIn"
              class="block w-full p-4 text-plantea-heavy-metal-500 border-plantea-heavy-metal-500 rounded-md bg-plantea-white-smoke-500"
            >
              Submit
            </button>
          </div>
          <p v-if="errMsg">{{ errMsg }}</p>
          <p>
            <button @click="signInWithGoogle" class="p-1">
              <img
                class="w-10 aspect-square"
                src="../assets/img/google-signin-assets/web_neutral_rd_na.png"
                alt="Google Sign In"
                aria-label="Google Logo for Sign In"
              />
            </button>
            <button @click="signInWithFacebook" class="p-1">
              <img
                class="w-10 aspect-square"
                src="../assets/img/facebook-signin-assets/facebook_2x.png"
                alt="Google Sign In"
                aria-label="Facebook Logo for Sign In"
              />
            </button>
          </p>
          <p class="font-serif subpixel-antialiased">
            Don't have an account?
            <button
              @click="register"
              class="font-serif subpixel-antialiased underline underline-offset-4 decoration-dotted"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref } from 'vue'
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { firebaseAuth } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const errMsg = ref() //ERROR MESSAGE

const signIn = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Successfully signed in!')
      router.push('/account').catch((e) => {})
    })
    .catch((error) => {
      console.log(error.code)
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()

  return signInWithPopup(firebaseAuth, provider).then(() =>
    router.push('/account').catch((e) => {})
  )
}

const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider()

  return signInWithPopup(firebaseAuth, provider).then(() =>
    router.push('/account').catch((e) => {})
  )
}

const register = () => {
  router.push('/account/register').catch((e) => {})
}
</script>
