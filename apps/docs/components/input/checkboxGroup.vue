
<script setup lang="ts">

const choices = defineModel('choices')
const result = defineModel('result')
watch(() => choices.value,
    (_, newChoices) => {
        result.value.forEach((element, index) => {
            if (newChoices.some((choice) => choice.label == element.label && !choice.checked))
                result.value.splice(index, 1);
        });
        const toInclude = newChoices.filter(choice => choice.checked && !result.value.some((res) => choice.label == res.label));
        for (var i = 0; i < toInclude.length; i++) {
            result.value.push(toInclude[i]);
        }

    },
    { deep: true }
)
</script>
<template>
    <div v-for="(choice, index) in choices" class="flex" :class="{ 'mt-3': index != 0 }">
        <InputCheckbox v-model:checked="choice.checked">
            {{ choice.label }}
        </InputCheckbox>
    </div>
</template>