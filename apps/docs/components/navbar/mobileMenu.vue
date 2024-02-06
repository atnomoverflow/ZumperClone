<script setup lang="ts">
import type { MenuOptions, Options } from '~/types';

const props = defineProps({
    openMenu: Boolean
})
defineEmits(['toggleMenu'])
const menuStack = ref([] as String[]);
const options: Options = {
    rentals: {
        name: "rentals",
        items: [
            {
                name: 'Apartment for rent',
                menuName: 'apartmentRentMenu',
                isMenu: true
            },
            {
                name: 'House for rent',
                menuName: 'houseRentMenu',
                isMenu: true
            },
            {
                name: 'Rooms for rent',
                menuName: 'roomsRentMenu',
                isMenu: true
            }
        ]
    },
    apartmentRentMenu: {
        name: "Apartment for rent",
        items: [
            {
                name: 'Apartment for rent Tunis',
                href: ''
            },
            {
                name: 'Apartment for rent Gabes',
                href: ''
            },
            {
                name: 'Apartment for rent Sousse',
                href: ''
            },

        ]
    },
    houseRentMenu: {
        name: "House for rent",
        items: [
            {
                name: 'House for rent Tunis',
                href: ''
            },
            {
                name: 'House for rent Gabes',
                href: ''
            },
            {
                name: 'House for rent Sousse',
                href: ''
            },
        ]
    },
    roomsRentMenu: {
        name: "Rooms for rent",
        items: [
            {
                name: 'Room for rent Tunis',
                href: ''
            },
            {
                name: 'Room for rent Gabes',
                href: ''
            },
            {
                name: 'Room for rent Sousse',
                href: ''
            },
        ]
    },

}
watch(
    () => props.openMenu,
    () => {
        if (!props.openMenu)
            menuStack.value = []
    }
);
const currentOption = computed((): MenuOptions => {
    return menuStack.value[menuStack.value.length - 1] as MenuOptions;
})
const isMenuOption = (item: any): item is { name: string; isMenu: boolean; menuName: string } => {
    return item.isMenu;
};
const pushMenuOption = (optionName: MenuOptions) => {
    menuStack.value.push(optionName);
}
const popMenuOption = () => menuStack.value.pop()

</script>
<template>
    <div v-if="props.openMenu">
        <div v-if="menuStack.length == 0" class="fixed inset-0 z-20 overflow-y-auto bg-yellow-150">
            <div class="pt-6 pr-6 flex justify-end w-full">
                <button type="button" @click="$emit('toggleMenu')">
                    <Icon name="heroicons:x-mark-16-solid" class="h-8 w-8" color="black" />
                </button>
            </div>
            <div class="pt-6 pl-6">
                <NuxtLink to="/">
                    <NuxtImg src="/svg/zumperDarkText.svg" height="48" width="124" />
                </NuxtLink>
            </div>
            <nav class="pt-16 px-11 font-inter text-gray-700 capitalize subpixel-antialiased text-base font-bold">
                <ul class="flex flex-col space-y-5">
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="w-full h-full block">
                            home
                        </NuxtLink>
                    </li>
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="block w-full h-full">
                            Favorites
                        </NuxtLink>
                    </li>
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="block w-full h-full">
                            applications
                        </NuxtLink>
                    </li>
                    <li class="flex h-10 border-b-2 font-thin">
                        <button to="/" class="flex w-full h-full" @click="pushMenuOption('rentals')">
                            Rentals
                            <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                        </button>
                    </li>
                </ul>
                <div class="mt-14 mb-10">
                    <h2 class="text-xs tracking-widest uppercase font-light">
                        Proprieties
                    </h2>
                </div>
                <ul class="flex flex-col space-y-5">
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="flex w-full h-full">
                            Post a listing
                            <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                        </NuxtLink>
                    </li>
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="flex w-full h-full">
                            Manage yours listing
                            <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                        </NuxtLink>
                    </li>
                    <li class="block h-10 border-b-2">
                        <NuxtLink to="/" class="flex w-full h-full">
                            advertise with zumper
                            <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="flex flex-col mt-10 mb-14 w-full space-y-3">
                <button class="min-w-72 mx-auto p-4 bg-gray-800 font-semibold text-white rounded-lg">Login</button>
                <button class="min-w-72 mx-auto p-4 bg-gray-800 font-semibold text-white rounded-lg">Sign up</button>
            </div>
        </div>
        <div v-else class="fixed inset-0 z-20 overflow-y-auto bg-yellow-150">
            <div class="pt-6 pr-6 flex justify-end items-center w-full">
                <button class="flex justify-start items-center px-2 py-2 text-gray-500 hover:bg-gray-100"
                    @click="popMenuOption()">
                    <Icon name="heroicons:chevron-left-solid" class="h-5 w-5" color="text-gray-500" />
                </button>
                <h1 class="mx-auto font-inter text-gray-700 capitalize subpixel-antialiased text-lg font-bold">
                    {{ options[currentOption].name }}
                </h1>
                <button type="button" @click="$emit('toggleMenu')">
                    <Icon name="heroicons:x-mark-16-solid" class="ml-auto h-5 w-5" color="black" />
                </button>
            </div>
            <ul
                class="flex flex-col space-y-5 mt-14 font-inter text-gray-700 capitalize subpixel-antialiased text-base font-bold">
                <li v-for="item in options[currentOption].items" class="block h-10 border-b-2">
                    <NuxtLink v-if="!isMenuOption(item)" class="block px-4 py-2" :href="item.href">
                        {{ item.name }}
                    </NuxtLink>
                    <button v-if="isMenuOption(item)" class="flex justify-start w-full px-4 py-2"
                        @click="pushMenuOption(item.menuName as MenuOptions)">
                        <span> {{ item.name }} </span>
                        <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>