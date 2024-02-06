<script setup lang="ts">
const isSearching = ref(false);

const startSearch = () => {
    isSearching.value = true;
};
const stopSearch = () => {
    isSearching.value = false;
};
</script>
<template>
    <div class="flex flex-col items-end w-full h-[60vh] md:h-screen">
                <div class="w-full h-[200%] bg-hero-sm xl:bg-hero-lg bg-cover bg-no-repeat">
                </div>
                <div class="absolute flex md:hidden top-20 w-full">
                    <NuxtImg src="/svg/zumperStacked.svg" class="m-auto" height="88" width="110" />
                </div>
                <div class="absolute md:flex flex-col m-auto top-52 hidden w-full bg-transparent">
                    <div class="w-96 xl:w-[500px] m-auto">
                        <h1
                            class="text-4xl xl:text-6xl tracking-tighter subpixel-antialiased text-center font-inter font-bold ">
                            Find your forever. Or Your for Now.
                        </h1>
                    </div>
                    <div class="w-72 xl:w-[400px] m-auto mt-8">
                        <h1
                            class="text-base xl:text-2xl text-gray-250 tracking-wide subpixel-antialiased text-center font-inter font-medium">
                            Houses and apartment for rent that fit your timeline.
                        </h1>
                    </div>
                    <div class="flex flex-col w-[488px] m-auto mt-8 p-8 bg-[#F9F9F6] rounded-xl border">
                        <div class="relative">
                            <form action="/" class="relative">
                                <Icon name="heroicons:magnifying-glass" class="absolute left-4 top-4 h-6 w-6"
                                    color="rgb(119 119 115)" />
                                <input type="text" class="w-full px-11 py-4 rounded shadow-md" @focus="startSearch"
                                    @blur="stopSearch">
                            </form>
                            <div class="absolute mt-5 w-full" :class="{ 'hidden': !isSearching }">
                                <ul class="bg-white rounded-md shadow-md">
                                    <li class="py-6 items-center">
                                        <button
                                            class="flex justify-start py-2 px-6 w-full h-full hover:bg-gray-100 hover:border-l-2 hover:border-red-600">
                                            <Icon name="heroicons:paper-airplane-solid" class="h-4 w-4 -rotate-45"
                                                color="#dc2626" />
                                            <span
                                                class="ml-4 pl-2 text-gray-250 subpixel-antialiased text-center font-inter font-medium">
                                                Use your current location
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative flex md:hidden h-[40vh] w-full bg-yellow-150 md:bg-transparent"
                :class="{ '!fixed flex flex-col inset-0 z-20 overflow-y-auto !bg-white h-full': isSearching }">
                <div class="absolute w-full -top-12 flex items-center p-4" :class="{ '!static': isSearching }">

                    <button v-if="isSearching" class="flex justify-start items-center px-2 py-4 text-gray-500"
                        @click="stopSearch">
                        <Icon name="heroicons:chevron-left-solid" class="h-5 w-5" color="text-gray-500" />
                    </button>
                    <form action="/" class="flex w-full" :class="{ '!top-2': isSearching }">

                        <Icon v-if="!isSearching" name="heroicons:magnifying-glass" class="absolute left-6 top-8 h-6 w-6"
                            color="rgb(119 119 115)" />
                        <input type="text" @focus="startSearch"
                            class="w-full mx-auto px-11 py-4 rounded-md border-none shadow-2xl"
                            :class="{ 'hover:border-none focus:outline-none focus:border-transparent shadow-none px-2': isSearching }"
                            placeholder="Search by location">
                    </form>
                </div>
                <div class="mt-16 h-full bg-yellow-150" :class="{ 'hidden': isSearching }">
                    <div class="w-full px-11 m-auto">
                        <h1
                            class="text-4xl xl:text-6xl tracking-tighter subpixel-antialiased text-center font-inter font-extrabold ">
                            Find your forever. Or Your for Now.
                        </h1>
                    </div>
                    <div class="w-full m-auto mt-8">
                        <h1
                            class="text-base xl:text-2xl text-gray-250 tracking-wide subpixel-antialiased text-center font-inter font-medium">
                            Houses and apartment for rent that fit your timeline.
                        </h1>
                    </div>
                </div>
            </div>
</template>