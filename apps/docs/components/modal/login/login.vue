<script setup lang="ts">
import { SocialProvider, type SocialNotRegisteredError } from "~/types"
const userStore = useUserStore()

const props = defineProps({
    openModal: Boolean,
})
const emit = defineEmits(['closeModal', 'openSignupModal'])
const openSignupModal = () => {
    emit('openSignupModal')
    emit('closeModal')
}
const snackbar = useSnackbar();
const cookie = useCookie('auth._token.auth0')

const handleGoogleLogin = async () => {
    // const result = await userStore.socialLogin({
    //     accessToken: response.access_token,
    //     provider: SocialProvider.GOOGLE
    // })
    // if (result && result.error?.message) {
    //     snackbar.add({
    //         type: "error",
    //         text: result.error.message
    //     })
    // } else {
    //     cookie.value = result?.data?.token
    // }
};


</script>

<template>
    <Modal :openModal="props.openModal" @closeModal="() => $emit('closeModal')">
        <div class=" px-6 py-10 flex flex-col text-left">
            <h1 class="font-inter font-medium text-xl pb-4">
                Login into Zumper
            </h1>
            <div class="py-4 border-b">

                <div class="flex space-x-4 justify-center my-4 items-center mx-auto">
                    <button
                        class="flex items-center space-x-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                        <Icon name="bxl:facebook" class="h-6 w-6" color="white" />
                        <span class="font-semibold text-sm">Login with Facebook</span>
                    </button>
                    <button
                        class="flex items-center space-x-3 p-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300">
                        <Icon name="bxl:google" class="h-6 w-6" color="white" />
                        <span class="font-semibold text-sm" @click="() => handleGoogleLogin()">Login with
                            Google</span>
                    </button>
                </div>

                <!-- Divider with "or" -->
                <div class="flex items-center mt-4 mb-6">
                    <div class="border-t flex-1"></div>
                    <span class="mx-4 text-gray-500 font-semibold">or</span>
                    <div class="border-t flex-1"></div>
                </div>

                <form action="" class="flex flex-col">
                    <input type="text" placeholder="Email" class="mb-5 px-3 py-4 rounded-md border">
                    <input type="Password" placeholder="Password" class="mb-5 px-3 py-4 rounded-md border">
                    <button type="submit" class="min-w-72 p-2 bg-gray-800 font-semibold text-white rounded-md">
                        Log in
                    </button>
                </form>
            </div>
            <div class="pt-4">
                <span class="font-inter text-base font-semibold text-gray-250">
                    Don't have an account?
                </span>
                <button class="underline" @click="openSignupModal"> Sign up for free </button>
            </div>
            <a href="#" class="underline">Forgot password?</a>
        </div>
    </Modal>
    <NuxtSnackbar />
</template>
