<script setup lang="ts">
const props = defineProps({
    openMenu: Boolean,
    style: {
        type: Object,
        default: {},
    }
});

const emit = defineEmits(['escape'])

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
    <div class="block transition-all duration-200 ease-out" :class="{ 'opacity-0': !props.openMenu }">
        <button @click="$emit('escape')" tabindex="-1" class="fixed z-40 inset-0 w-full h-full"
            :class="{ 'hidden': !props.openMenu }"></button>
        <div class="absolute z-50 w-52 right-0 mt-2 font-inter bg-white border rounded-lg shadow-md"
            :style="{ ...style }">
            <slot></slot>
        </div>
    </div>
</template>