<script setup lang="ts">
</script>

<template>
    <div class="h-screen v w-screen flex flex-col">
        <navbar />
        <div class="w-full h-[60vh] md:h-screen flex flex-col items-end absolute ">


            <div class="bg-hero-sm xl:bg-hero-lg bg-cover bg-no-repeat w-full  h-full">
            </div>
            <div class="flex md:hidden absolute w-full top-20">
                <NuxtImg src="/svg/zumperStacked.svg" class="m-auto" height="88" width="110" />
            </div>
            <div class="hidden md:flex flex-col m-auto w-full bg-transparent absolute top-40">
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
                <div class=" flex flex-col w-[488px] m-auto mt-8 bg-[#F9F9F6] p-8 rounded-xl border">
                    <div class="relative">
                        <div>
                            <form action="/" class="relative">
                                <Icon name="heroicons:magnifying-glass" class=" absolute left-4 top-4 h-6 w-6"
                                    color="rgb(119 119 115)" />
                                <input type="text" class="w-full px-11 py-4">
                            </form>
                            <div class="absolute mt-5 py-3 px-4 bg-white w-full rounded-md h-3 pt-14">
                                <Icon name="heroicons:map-pin-solid" class=" absolute left-4 top-4 h-6 w-6"
                                    color="#dc2626" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex md:hidden  bg-yellow-150 md:bg-transparent h-[40vh] w-full">

        </div>
    </div>
</template>
