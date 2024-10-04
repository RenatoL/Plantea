<template>

    <HeaderComponent />

    <div class="grid grid-cols-1 lg:grid-cols-2 items-start bg-plantea-heavy-metal-500">
        <div class="hidden lg:block sticky top-0">
            <div class="image h-[68vh]">
                <picture>
                    <img src="../assets/img/BlackTea_stock_BG.jpg">
                </picture>
            </div>
        </div>
        <div class="pt-18 lg:pt-20 pb-4">
            <div class="px-container-mobile md:px-container-desktop">
                <div class="mx-auto w-full text-plantea-white-smoke-500 text-center p-4 lg:max-w-[440px]">


                    <h1 class="font-serif font-thin text-center text-4xl mb-2 lg:text-5xl lg:mb-3">Register</h1>

                    <div class="flex flex-col gap-2 mb-2 font-serif font-thin">
                        <input type="text" v-model="firstName"
                            class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
                            placeholder="First Name">
                            <input type="text" v-model="lastName"
                            class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
                            placeholder="Last Name">
                        <input type="email" v-model="email"
                            class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
                            placeholder="Email">
                        <input type="password" v-model="password"
                            class="block w-full p-4 border-2 focus:outline-none border-plantea-white-smoke-500 placeholder-plantea-white-smoke-500 rounded-2xl bg-plantea-heavy-metal-500"
                            placeholder="Password">
                        <button @click="register"
                            class="block w-full p-4 text-plantea-heavy-metal-500 border-plantea-heavy-metal-500 rounded-md bg-plantea-white-smoke-500">Submit</button>
                    </div>
                    <p v-if="errMsg">{{ errMsg }}</p>
                    <p><button @click="signInWithGoogle" class="p-1">
                            <img class="w-10 aspect-square"
                                src="../assets/img/google-signin-assets/web_neutral_rd_na.png" alt="Google Sign In"
                                aria-label="Google Logo for Sign In">
                        </button>
                        <button @click="signInWithFacebook" class="p-1">
                            <img class="w-10 aspect-square" src="../assets/img/facebook-signin-assets/facebook_2x.png"
                                alt="Google Sign In" aria-label="Facebook Logo for Sign In">
                        </button>
                    </p>
                    <p class="font-serif subpixel-antialiased">Already have an account? <router-link to="/account"
                            class="font-serif subpixel-antialiased underline underline-offset-4 decoration-dotted">Sign
                            in</router-link>
                    </p>

                </div>
            </div>
        </div>
    </div>

    <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';
import { ref } from "vue"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseApp, firebaseAuth } from '../firebase.ts'
import { useRouter } from "vue-router"


const router = useRouter()
const email = ref("")
const password = ref("")

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered!");
            router.push('/account').catch(e => { })
        })
        .catch((error) => {
            console.log(error.code)
            alert(error)
        });
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()

    return signInWithPopup(firebaseAuth, provider).then(() => router.replace({ name: 'account' }).catch(e => { }))
}
</script>