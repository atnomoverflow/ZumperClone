<script setup lang="ts">
import { NavbarDesktopMenu, NavbarLoginModal, NavbarMobileMenu, NavbarSignUpModal } from '#components';
import { ref, onMounted, onUnmounted } from 'vue';


const isLoginModalOpen = ref(false)
const openMenu = ref(false);
const isMobile = ref(false);
const isSignupModalOpen = ref(false)


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
    <header class="absolute w-full z-10 flex p-6 bg-transparent md:bg-yellow-150">
        <div class="hidden md:block">
            <NuxtLink to="/">
                <NuxtImg src="/svg/zumperDarkText.svg" height="48" width="124" />
            </NuxtLink>
        </div>
        <div class="flex xl:hidden flex-1 justify-end">
            <button type="button" @click="toggleMenu">
                <Icon name="heroicons:bars-3-bottom-right-20-solid" class="h-6 w-6" color="black" />
            </button>
        </div>
        <div class="hidden xl:flex flex-1 items-center justify-end font-inter text-sm">
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
        <component v-if="!isMobile" :is="NavbarDesktopMenu" :openMenu="openMenu" @escape="escape"
            @openLoginModal="openLoginModal" @openSignupModal="openSignupModal" @toggleMenu="toggleMenu">
        </component>
        <component v-if="isMobile" :is="NavbarMobileMenu" :openMenu="openMenu" @toggleMenu="toggleMenu" />
        <component :is="NavbarLoginModal" :openModal="isLoginModalOpen" @openSignupModal="openSignupModal" @closeModal="closeLoginModal" />
        <component :is="NavbarSignUpModal" :openModal="isSignupModalOpen" @openLoginModal="openLoginModal" @closeModal="closeSignupModal" />
    </header>
</template>