<script setup lang="ts">
import { DropDownDesktop, DropDownMobile, ModalLogin, ModalSignup } from '#components'
import { ref, onMounted, onUnmounted } from 'vue';

const isLoginModalOpen = ref(false)
const openMenu = ref(false);
const isMobile = ref(false);
const isSignupModalOpen = ref(false)
const rentalsType = useState('rentalType', () => {
    return {
        type: "room",
        longDuration: true
    }
});
const setRentDuration = (isLong: boolean) => {
    rentalsType.value.longDuration = isLong
}
const closeLoginModal = () => {
    isLoginModalOpen.value = false
}
const openLoginModal = () => {
    isLoginModalOpen.value = true
}
const closeSignupModal = () => {
    isSignupModalOpen.value = false
}
const openSignupModal = () => {
    isSignupModalOpen.value = true
}
const updateWindowSize = () => {
    isMobile.value = screen.width <= 1024;
};
const toggleMenu = () => {
    openMenu.value = !openMenu.value;
}
const escape = () => {
    openMenu.value = false
}
onMounted(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
});
onUnmounted(() => {
    // Remove event listener when the component is unmounted
    window.removeEventListener('resize', updateWindowSize);
});
</script>

<template>
    <header class="absolute w-full z-10 h-[70px] flex px-6 bg-yellow-150 border-b shadow-sm">

        <div class="flex md:hidden justify-center items-center">
            <button>
                <Icon name="heroicons:bell" class="h-4 w-4"></Icon>
            </button>
        </div>
        <div class="hidden md:flex h-full min-w-56">
            <NuxtLink to="/" class="flex justify-center items-center">
                <NuxtImg src="/svg/zumperDarkText.svg" class="h-10 w-[112px]" />
            </NuxtLink>
        </div>
        <div class="flex flex-col w-full relative">
            <div class="md:hidden h-full flex justify-center items-center">
                <NuxtLink to="/">
                    <NuxtImg src="/svg/zumperDarkText.svg" class="block md:hidden md:h-12 h-8 md:w-[124px]" />
                </NuxtLink>
            </div>
            <div class="md:hidden flex justify-center">
                <div class="absolute top-14">
                    <div class=" relative text-ellipsis font-Inter font-medium grid bg-white rounded-lg shadow-lg border"
                        style="
    grid-template-columns: repeat(3, auto)
">
                        <button
                            class="w-fit min-w-24 block items-center p-3 relative min-h-6 overflow-ellipsis after:content-[''] after:absolute after:w-0.5 after:h-4 after:bg-gray-200 after:inline-block after:position-absolute after:right-0 after:top-4">
                            <span class="block overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
                                New York,NY
                            </span>
                        </button>
                        <button
                            class="flex min-w-20 items-center p-3 relative min-h-6 after:content-[''] after:absolute after:w-0.5 after:h-4 after:bg-gray-200 after:inline-block after:position-absolute after:right-0 after:top-4">
                            <span class="block overflow-hidden text-ellipsis whitespace-nowrap w-full text-center">
                                Beds / Baths
                            </span>
                        </button>
                        <button class="block p-3 min-w-12">
                            <span class="block overflow-hidden text-ellipsis w-full text-center">
                                Price
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex w-full justify-center items-center ">
                <div class="relative flex flex-col items-center justify-center">
                    <div class="relative hidden md:flex space-x-10 text-sm font-normal">
                        <button class="pt-2" @click="setRentDuration(true)"
                            :class="{ 'font-semibold': rentalsType.longDuration, 'border-b-2': rentalsType.longDuration, 'border-red-600': rentalsType.longDuration }">
                            Long-term rentals
                        </button>
                        <button class="pt-2" @click="setRentDuration(false)"
                            :class="{ 'font-semibold': !rentalsType.longDuration, 'border-b-2': !rentalsType.longDuration, 'border-red-600': !rentalsType.longDuration }">

                            Sort-term rentals
                        </button>
                    </div>
                    <div class="relative flex web-justify-center w-full items-center justify-center">
                        <div class="absolute items-center justify-center flex top-4 left-0 w-full">
                            <div
                                class="w-full items-center justify-center min-w-96 max-w-[500px] font-Inter font-medium grid grid-cols-3 bg-white rounded-lg shadow-lg border">
                                <button
                                    class="min-w-24 block overflow-hidden items-center p-3 relative min-h-6 overflow-ellipsis after:content-[''] after:absolute after:w-0.5 after:h-4 after:bg-gray-200 after:inline-block after:position-absolute after:right-0 after:top-4">
                                    <span
                                        class="block overflow-hidden whitespace-nowrap text-ellipsis w-full text-center">
                                        New York,NY
                                    </span>
                                </button>
                                <button
                                    class="min-w-24 items-center overflow-hidden justify-center p-3 relative min-h-6 after:content-[''] after:absolute after:w-0.5 after:h-4 after:bg-gray-200 after:inline-block after:position-absolute after:right-0 after:top-4">
                                    <span class="block overflow-hidden text-ellipsis whitespace-nowrap text-center">
                                        Studio-5 bed, 1-5 baths
                                    </span>
                                </button>
                                <button class="min-w-24 block p-3 overflow-hidden">
                                    <span class="block overflow-hidden text-ellipsis w-full text-center">
                                        Price
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex xl:hidden flex-1 justify-end">
            <button type="button" @click="toggleMenu">
                <Icon name="heroicons:bars-3-bottom-right-20-solid" class="h-6 w-6" color="black" />
            </button>
        </div>
        <div class="hidden xl:flex flex-1 items-center justify-end font-inter text-sm min-w-fit">
            <ul class="flex justify-center space-x-3 mr-3">
                <li>
                    <NuxtLink class="hover:text-neutral-600" href="/">Advertise</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="hover:text-neutral-600" href="/">Post a Listing</NuxtLink>
                </li>
            </ul>
            <button class="p-1 border rounded-full hover:bg-yellow-150 bg-white" @click="toggleMenu">
                <Icon name="heroicons:user-20-solid" class="h-5 w-5 bg-slate-600 rounded-full border" color="white" />
                <Icon name="heroicons:bars-3-16-solid" class="h-4 w-4  ml-2" color="black" />
            </button>
        </div>
        <component v-if="!isMobile" :is="DropDownDesktop" :top3rem="true" :openMenu="openMenu" @escape="escape"
            @openLoginModal="openLoginModal" @openSignupModal="openSignupModal" @toggleMenu="toggleMenu">
        </component>
        <component v-if="isMobile" :is="DropDownMobile" :openMenu="openMenu" @toggleMenu="toggleMenu" />
        <component :is="ModalLogin" :openModal="isLoginModalOpen" @openSignupModal="openSignupModal"
            @closeModal="closeLoginModal" />
        <component :is="ModalSignup" :openModal="isSignupModalOpen" @openLoginModal="openLoginModal"
            @closeModal="closeSignupModal" />
    </header>
</template>