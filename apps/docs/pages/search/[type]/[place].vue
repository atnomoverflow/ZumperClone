<script setup>
import { MapboxMap } from '@studiometa/vue-mapbox-gl';
import Button from '~/components/ui/button/Button.vue';

const config = useRuntimeConfig()
const searchFilterStore = useFilterParmStore()

const mapboxMap = ref();
const pets = ref([
    {
        label: 'Dogs',
        checked: false,
        value: {
            type: 'Dogs'
        }
    },
    {
        label: 'Cats',
        checked: false,
        value: {
            type: 'Cats'
        }
    },
])
const types = ref([
    {
        label: 'Apartment',
        checked: false,
        value: {
            type: 'Apartment'
        }
    },
    {
        label: 'Condo',
        checked: false,
        value: {
            type: 'Condo'
        }
    },
    {
        label: 'House',
        checked: false,
        value: {
            type: 'House'
        }
    },
    {
        label: 'Room',
        checked: false,
        value: {
            type: 'Room'
        }
    },
    {
        label: 'Townhouse',
        checked: false,
        value: {
            type: 'Townhouse'
        }
    },
    {
        label: 'Other',
        checked: false,
        value: {
            type: 'Other'
        }
    }
])
const deals = ref([{
    label: 'Rent Special',
    checked: false,
    value: {
        type: 'Rent Special'
    }
},
{
    label: 'No Security Deposit',
    checked: false,
    value: {
        type: 'No Security Deposit'
    }
}, {
    label: 'Utility included',
    checked: false,
    value: {
        type: 'Utility included'
    }
},
{
    label: 'Sweet Deal',
    checked: false,
    value: {
        type: 'Sweet Deal'
    }
}])
const map = computed(() => mapboxMap.value.map);
const mapCenter = ref([0, 0]);
const rating = ref({})
const ratingValues = ref([
    {
        id: 0,
        label: "9.0 Excellent and above",
    },
    {
        id: 1,
        label: "7.0 Very Good and above",
    }, {
        id: 2,
        label: "5.0 Good and above",
    }, {
        id: 3,
        label: "Any rating",
    }
])
</script>

<template>
    <div class="relative h-screen v w-screen flex flex-col">
        <SearchNavbar></SearchNavbar>
        <div class="flex w-screen mt-28 md:mt-[70px] border-b shadow-sm">
            <div class="flex w-full items-center md:justify-center mx-4 my-4">
                <div class="flex items-center justify-center space-x-2">
                    <div class="flex relative">
                        <FilterSelect v-model:store="searchFilterStore.types" v-model:filter="types"
                            filterName="Types" />
                    </div>
                    <div class="flex relative">
                        <FilterSelect v-model:store="searchFilterStore.pets" v-model:filter="pets" filterName="Pets" />
                    </div>
                    <div class="flex relative">
                        <FilterSelect v-model:store="searchFilterStore.deals" v-model:filter="deals"
                            filterName="Deals" />
                    </div>
                    <div class="flex relative">
                        <FilterRadio v-model:store="searchFilterStore.rating" :filter="ratingValues"
                            filterName="Rating" />
                    </div>

                    <Button variant="outline"
                        class="hidden h-8 md:flex items-center justify-center py-1 px-3 border border-slate-400 hover:border-slate-700 rounded">
                        <span class="font-inter text-sm text-slate-700">
                            <Icon name="heroicons:calendar-days-16-solid" class="h-3 w-3 text-slate-700" />
                            Available now
                        </span>
                    </Button>
                </div>
                <div class="flex-grow hidden md:flex justify-end items-end">
                    <button
                        class="flex h-8 items-center justify-center py-1 px-3 border border-slate-400 hover:border-slate-700 rounded">
                        <span class="font-inter text-sm text-slate-700">
                            <Icon name="heroicons:bell" class="h-4 w-4 text-slate-700" />
                            Save search
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="pl-8 pr-4 flex flex-col  md:w-[1103px]">
                <div class="mt-6 mb-1">
                    <h1 class="font-semibold text-2xl">
                        Appartment for Rent in Ain Zaghwan, Tunis
                    </h1>
                </div>
                <div class="flex items-center">
                    <div class="font-normal text-sm text-gray-500">
                        13,528 rentals
                    </div>
                    <div class="flex flex-grow items-end justify-end">
                        <button>
                            <span class="font-inter text-sm">
                                Sort by : Relevance
                                <Icon name="heroicons:chevron-down-16-solid" class="h-4 w-4" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden lg:w-[calc(100vw-1103px)] md:flex">

                <MapboxMap ref="mapboxMap" map-style="mapbox://styles/mapbox/streets-v11" :zoom="1" :center="mapCenter"
                    :attributionControl="false" style="height: calc(100vh - 135px);"
                    :access-token="config.public.MAP_BOX_TOKEN" />
            </div>
        </div>
    </div>
</template>