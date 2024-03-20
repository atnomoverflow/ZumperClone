<script setup lang="ts">
import Button from '../ui/button/Button.vue';
import Label from '../ui/label/Label.vue';
import RadioGroup from '../ui/radio-group/RadioGroup.vue';
import RadioGroupItem from '../ui/radio-group/RadioGroupItem.vue';

const props = defineProps({ filterName: String, filter: Array })
const store = defineModel('store')


const selectedFilter = ref("")
const isOpen = ref(false);
const formatFilter = computed(() => {
    if ((Object.keys(store.value).length === 0))
        return props.filterName;
    else
        return `${store.value.label}`;
});

const resetFilter = () => {
    selectedFilter.value = ""
    store.value = {}
}

const OpenDropDown = () => {
    selectedFilter.value = Object.keys(store.value).length == 0 ? `${props.filter.length}` : `${store.value.id}`
    isOpen.value = true
}
const escape = () => {
    selectedFilter.value = Object.keys(store.value).length == 0 ? `${props.filter.length}` : `${store.value.id}`
    isOpen.value = false
}
function handelSubmit() {
    store.value = props.filter?.find((val) => {
        var id = parseInt(selectedFilter.value)
        return id != NaN && val.id == id
    })
    isOpen.value = false
}
</script>

<template>
    <Button variant="outline" @click="OpenDropDown" class="h-8  py-1 px-3 ">
        <span class="font-inter text-sm text-slate-700">
            {{ formatFilter }}
            <Icon name="heroicons:chevron-down-16-solid" class="h-3 w-3" />
        </span>
    </Button>
    <ButtonsDropDown :openMenu="isOpen" @escape="escape" :style="{ top: '2rem', left: '0rem', width: '254px' }">
        <div class="p-4 border-b">
            <RadioGroup v-model:modelValue="selectedFilter">
                <div v-for="item in props.filter" class="flex items-center space-x-2">
                    <RadioGroupItem :id="item.label" :value="item.id.toString()" />
                    <Label :for="item.label">
                        {{ item.label }}
                    </Label>
                </div>
            </RadioGroup>
            <!-- <InputRadioGroup v-model:checked="selectedFilter" :values="props.filter" /> -->
        </div>
        <div class="flex p-4 justify-between">
            <Button @click="resetFilter" class="h-8 p-2">
                clear
            </Button>
            <Button variant="outline" @click="handelSubmit" class="w-40 h-8 p-2">
                View 11 Rentals
            </Button>
        </div>
    </ButtonsDropDown>
</template>