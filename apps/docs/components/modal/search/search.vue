<script setup lang="ts">
const props = defineProps({
    isOpen: Boolean,
})
const searchFilterStore = useFilterParmStore()
const currentStep = ref(1)
function nextStep() {
    currentStep.value++
}

function previousStep() {
    if (currentStep.value > 1)
        currentStep.value--;
}

function handelSubmit() {
    if (currentStep.value == 1)
        nextStep()
    else
        console.log("done");
}
const BedroomsOptions = [
    'Studios',
    '1',
    '2',
    '3',
    '4+'
]
const BathroomsOptions = [
    '1',
    '2',
    '3',
    '4',
    '5+'
]
const emit = defineEmits(['closeModal', 'openModal'])


</script>

<template>
    <Modal :openModal="props.isOpen" :closeButton="false" @closeModal="() => emit('closeModal')">
        <div class="flex border-b border-gray-200 p-4">
            <div v-if="currentStep > 1">
                <button @click="previousStep">
                    <Icon name="heroicons:chevron-left" class="ml-auto h-5 w-5" color="black" />
                </button>
            </div>
            <div class="flex flex-grow justify-center items-center">

                <h2 class="text-base text-gray-600 font-semibold uppercase">
                    {{ currentStep }} of 2
                </h2>

            </div>
            <div>
                <button>
                    <span class="text-sm text-gray-600 font-semibold">
                        Skip
                    </span>
                </button>
            </div>
        </div>
        <div class="flex flex-col my-4 mx-3">
            <template v-if="currentStep == 2">
                <div class="flex mb-8 mt-8 justify-center items-center">
                    <h1 class="text-2xl font-bold">What's your budget?</h1>
                </div>
                <div class="flex flex-col p-8 justify-center items-center">
                    <div class="pb-12 relative inline-block">
                        <input type="text" :value="priceFormatter(searchFilterStore.budget, 5000)"
                            class="flex py-2 px-4 border border-gray-300 rounded-md font-inter font-semibold"
                            :style="{ width: `calc(${priceFormatter(searchFilterStore.budget, 5000).length}ch + 80px)` }" />
                        <div class="absolute  top-[22%] right-2 transform -translate-y-1/2 text-gray-250">/month</div>
                    </div>
                    <Slider :min="0" :max="5000" v-model:value="searchFilterStore.budget" />
                </div>
            </template>
            <template v-if="currentStep == 1">
                <div class="flex mb-8 mt-8 justify-center items-center">
                    <h1 class="text-2xl font-bold">How many rooms</h1>
                </div>
                <div class="flex flex-col m-4">
                    <h2 class="text-base font-medium">
                        Bedrooms
                    </h2>
                    <ButtonsGroups :selected="BedroomsOptions" @select="searchFilterStore.selectBedrooms"
                        :range="searchFilterStore.selectedBedrooms" />
                </div>
                <div class="flex flex-col m-4">
                    <h2 class="text-base font-medium">
                        Bathrooms
                    </h2>
                    <ButtonsGroups :selected="BathroomsOptions" @select="searchFilterStore.selectBathrooms"
                        :range="searchFilterStore.selectedBathrooms" />
                </div>
            </template>
            <div class="flex flex-col m-4">
                    <button @click="handelSubmit" class="min-w-72 mx-auto p-4 bg-gray-800 font-semibold text-white rounded-lg">
                        {{
                            currentStep == 1 ? "Next" : "Search"
                        }}
                    </button>
            </div>
        </div>
    </Modal>
</template>
