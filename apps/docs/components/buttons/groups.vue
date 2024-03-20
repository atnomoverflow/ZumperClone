<script setup lang="ts">
import Button from '../ui/button/Button.vue';

const props = defineProps({
    range: Array,
    selected: Array
})
const emit = defineEmits(['select'])
const minIndex = computed(() => findMinArray(props.range));
const maxIndex = computed(() => findMaxArray(props.range));
</script>

<template>
    <div class="w-full min-w-[initial] p-2 inline-flex items-center h-16 justify-between rounded-[100px]"
        style="background: rgba(235, 234, 230, 0.5);">
        <Button v-for="(item, index) in selected"
            class=" grow h-14  overflow-hidden  text-[rgb(69,68,66)] font-normal text-base leading-6 cursor-pointer m-0 p-0 border-0"
            :class="{
            'rounded-l-[100px]': index == minIndex,
            'rounded-r-[100px]': index == maxIndex,
            'bg-rose-600': index >= minIndex && index <= maxIndex,
            'text-white': index >= minIndex && index <= maxIndex,
            'hover:bg-yellow-75': !(index >= minIndex && index <= maxIndex),
            'rounded-[100px]': !(index >= minIndex && index <= maxIndex),

        }" @click="$emit('select', index)">
            {{ item }}
    </Button>
    </div>
</template>