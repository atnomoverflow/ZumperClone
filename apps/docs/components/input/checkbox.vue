<script setup lang="ts">
const props = defineProps({
    checked: { type: Boolean, default: false },
})
const emit = defineEmits(['update:checked'])
</script>
<template>
    <label class="relative text-sm text-gray-500 ms-3">
        <input type="checkbox" @input="$emit('update:checked', !props.checked)"
            class="absolute w-0 h-0 shrink-0 mt-0.5 border border-gray-200 rounded text-rose-600 focus:ring-rose-500 disabled:opacity-50 disabled:pointer-events-none">
        <span class="absolute border w-5 h-5 border-gray-200 -left-3">
            <svg v-if="props.checked" fill="none" height="18" viewBox="0 0 18 18" width="18"
                xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path clip-rule="evenodd"
                        d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3Z"
                        fill="#E5105A" fill-rule="evenodd"></path>
                </g>
                <path d="M5 9.27273L7.66667 12L13 6" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"></path>
            </svg>
        </span>
        <span class="pl-5">
            <slot></slot>
        </span>
    </label>
</template>