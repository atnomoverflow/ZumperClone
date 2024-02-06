<script setup lang="ts">
import type { Options, MenuOptions } from '@/types';

const props = defineProps({
    openMenu: Boolean,
});
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
const menuStack = ref([] as String[]);
const emit = defineEmits(['toggleMenu', 'escape'])
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
const escape = (e: any) => {
    if ((e.key as string).toUpperCase() == 'ESC' || (e.key as string).toUpperCase() == 'ESCAPE') {
        emit('escape')
    }
};
onUnmounted(() => {
    // Remove event listener when the component is unmounted
    window.removeEventListener('keydown', escape);
});
onMounted(() => {
    window.addEventListener('keydown', escape);
});
</script>
<template>
    <div v-if="openMenu" class="relative">
        <button v-if="openMenu" @click="$emit('toggleMenu')" tabindex="-1" class="fixed inset-0 w-full h-full"></button>
        <div v-if="menuStack.length == 0"
            class="absolute w-52 right-0 top-3 mt-2 font-inter bg-white border rounded-lg shadow-md">
            <ul class="py-2 space-y-1 text-sm text-gray-700 border-b-2">
                <li>
                    <NuxtLink class="block px-4 py-2 hover:bg-gray-100" href="/">
                        Favorites
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="block px-4 py-2 hover:bg-gray-100" href="/">
                        Applications
                    </NuxtLink>
                </li>
                <li>
                    <button class="flex justify-start w-full px-4 py-2 hover:bg-gray-100"
                        @click="pushMenuOption('rentals')">
                        <span> Rentals </span>
                        <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                    </button>
                </li>
                <!-- Add more dropdown items as needed -->
            </ul>

            <ul class="py-2 space-y-1 text-sm text-gray-700 border-b-2">
                <header>
                    <h2 class="px-4 py-2 text-xs font-inter tracking-widest uppercase font-medium">
                        Proprieties
                    </h2>
                </header>
                <li>
                    <NuxtLink class="block px-4 py-2 hover:bg-gray-100" href="/">
                        Manage your listing
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="block px-4 py-2 hover:bg-gray-100" href="/">
                        Advertise on zumper
                    </NuxtLink>
                </li>
            </ul>
            <ul class="py-2 space-y-1 text-sm text-gray-700">
                <li>
                    <NuxtLink class="block px-4 py-2  hover:bg-gray-100" href="/">
                        Log in
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink class="block px-4 py-2  hover:bg-gray-100" href="/">
                        Signup
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div v-else class="absolute w-52 right-0 top-3 mt-2 font-inter bg-white border rounded-lg shadow-md">
            <ul class="py-2 space-y-1 text-sm text-gray-700">
                <li>
                    <button class="flex justify-start items-center w-full px-2 py-2 text-gray-500 hover:bg-gray-100"
                        @click="popMenuOption()">
                        <Icon name="heroicons:chevron-left-solid" class="h-4 w-4" color="text-gray-500" />
                        <span class="pl-2"> back </span>
                    </button>
                </li>
                <li v-for="item in options[currentOption].items">
                    <NuxtLink v-if="!isMenuOption(item)" class="block px-4 py-2 hover:bg-gray-100" :href="item.href">
                        {{ item.name }}
                    </NuxtLink>
                    <button v-if="isMenuOption(item)" class="flex justify-start w-full px-4 py-2 hover:bg-gray-100"
                        @click="pushMenuOption(item.menuName as MenuOptions)">
                        <span> {{ item.name }} </span>
                        <Icon name="heroicons:chevron-right-solid" class="ml-auto h-5 w-5" color="black" />
                    </button>
                </li>
            </ul>
        </div>
</div></template>