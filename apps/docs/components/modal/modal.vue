<script setup lang="ts">
const props = defineProps({
    openModal: Boolean,
    closeButton: {
        type: Boolean,
        default: true
    },
    extraMargin: {
        type: Boolean,
        default: false
    },
})
const emit = defineEmits(['closeModal'])
</script>

<template>
    <div v-if="props.openModal" class="fixed inset-0 flex mb-96 mt-24 items-center justify-center"
        :class="{ 'mt-64': extraMargin }">
        <div @click="$emit('closeModal')" class="modal-overlay fixed inset-0 bg-gray-800 opacity-50"></div>
        <div class="bg-background mt-24 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="text-left">
                <div v-if="props.closeButton == true" class="px-6 py-4 flex flex-col items-end">
                    <button class="cursor-pointer" @click="$emit('closeModal')">
                        <Icon name="heroicons:x-mark-16-solid" class="ml-auto h-5 w-5" color="black" />
                    </button>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>