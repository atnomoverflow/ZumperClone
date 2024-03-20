<script setup lang="ts">
import { SocialProvider } from '~/types';
const props = defineProps({
    openModal: Boolean,
})
const emit = defineEmits(['closeModal', 'openLoginModal'])

const openLoginModal = () => {
    emit('openLoginModal')
    emit('closeModal')
}
const userStore = useUserStore()

const snackbar = useSnackbar();
const cookie = useCookie('auth._token.auth0')
const handleGoogleLogin = async () => {
    // console.log(response)
    // const result = await userStore.registerSocial({
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
        <div class="px-6 py-10 flex flex-col text-left">
            <h1 class="font-inter font-medium text-xl pb-4">
                Create an account
            </h1>
            <div class="py-4 border-b">

                <div class="flex space-x-4 justify-center my-4 items-center mx-auto">
                    <button
                        class="flex items-center space-x-3 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                        <Icon name="bxl:facebook" class="h-6 w-6" color="white" />
                        <span class="font-semibold text-sm">Sign up with Facebook</span>
                    </button>
                    <button @click="() => handleGoogleLogin()"
                        class="flex items-center space-x-3 p-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300">
                        <Icon name="bxl:google" class="h-6 w-6" color="white" />
                        <span class="font-semibold text-sm">Sign up with Google</span>
                    </button>
                </div>

                <!-- Divider with "or" -->
                <div class="flex items-center mt-4 mb-6">
                    <div class="border-t flex-1"></div>
                    <span class="mx-4 text-gray-500 font-semibold">or</span>
                    <div class="border-t flex-1"></div>
                </div>

                <form action="" class="flex flex-col">
                    <input type="text" placeholder="Full name" class="mb-5 px-3 py-4 rounded-md border">
                    <input type="text" placeholder="Email" class="mb-5 px-3 py-4 rounded-md border">
                    <input type="Password" placeholder="Password" class="mb-5 px-3 py-4 rounded-md border">
                    <button type="submit" class="min-w-72 p-2 bg-gray-800 font-semibold text-white rounded-md">
                        Sign up
                    </button>
                </form>
            </div>
            <div class="pt-4">
                <span class="font-inter text-base font-semibold text-gray-250">
                    You already have an account?
                </span>
                <button class="underline" @click="openLoginModal"> Sign up for free </button>
            </div>
        </div>
    </Modal>
</template>
