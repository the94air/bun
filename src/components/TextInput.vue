<script setup>
import { ref } from "vue";

const props = defineProps({
  id: String,
  modelValue: String,
});
defineEmits(["update:modelValue"]);

const defaultValue = ref(props.modelValue);
</script>

<template>
  <div class="mb-6 last:mb-0">
    <div class="flex justify-between mb-2">
      <div>
        <slot />
      </div>
      <div>
        <button
          class="inline-block font-sm text-black bg-slate-300 hover:bg-slate-200 focus:bg-slate-200 rounded cursor-pointer select-none py-[0.2rem] px-3 ml-2"
          @click="$emit('update:modelValue', defaultValue)"
        >
          Reset
        </button>
      </div>
    </div>
    <input
      class="w-full block appearance-none bg-white leading-tight rounded focus:outline-none border-2 hover:border-slate-300 focus:border-black px-3 py-2"
      type="text"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
