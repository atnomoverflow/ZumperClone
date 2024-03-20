<script setup lang="ts">
import Button from '../ui/button/Button.vue';

const props = defineProps({ filterName: String })
const store = defineModel('store')
const filter = defineModel('filter')

const selectedFilter = ref([])
const isOpen = ref(false);
const formatFilter = computed(() => {
    if (store.value.length == 0)
        return props.filterName;
    if (store.value.length == 1)
        return store.value[0].label;
    else
        return `${store.value[0].label}+${store.value.length - 1}`;
});
const resetFilter = () => {
    for (var i = 0; i < filter.value.length; i++) {
        filter.value[i].checked = false
    }
    store.value = []
}
const resetFilterFromStore = () => {
    for (var i = 0; i < filter.value.length; i++) {
        if (store.value.some((val) => val.label == filter.value[i].label)) {
            filter.value[i].checked = true
        } else {
            filter.value[i].checked = false
        }
    }
}
const OpenDropDown = () => {
    resetFilterFromStore()
    selectedFilter.value = [...store.value]
    isOpen.value = true
}
const escape = () => {
    resetFilterFromStore()
    selectedFilter.value = [...store.value]
    isOpen.value = false
}
function handelSubmit() {
    store.value = selectedFilter.value
    isOpen.value = false

}
</script>

<template>
    <Button variant="outline" @click="OpenDropDown" class="h-8">
        <span class="font-inter text-sm text-slate-700">
            {{ formatFilter }}
            <Icon name="heroicons:chevron-down-16-solid" class="h-3 w-3" />
        </span>
    </Button>
    <ButtonsDropDown :openMenu="isOpen" @escape="escape" :style="{ top: '2rem', left: '0rem', width: '254px' }">
        <div class="p-4 border-b">
            <InputCheckboxGroup v-model:choices="filter" v-model:result="selectedFilter" />
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