<script setup>
import { ref, computed } from "vue";
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";

const props = defineProps({
  id: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);

const defaultValue = ref(props.modelValue);
const gradientColor = "";

const color = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<template>
  <div class="mb-6 last:mb-0">
    <div class="flex justify-between mb-2">
      <div>
        <slot />
      </div>
      <div class="flex">
        <input
          class="block appearance-none bg-white leading-tight rounded focus:outline-none border-2 border-slate-200 hover:border-slate-300 focus:border-black px-2 py-[0.2rem] text-center w-44"
          type="text"
          :value="color"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <button
          class="inline-block font-sm text-black bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded cursor-pointer select-none py-[0.2rem] px-3 ml-2"
          @click="$emit('update:modelValue', defaultValue)"
        >
          Reset
        </button>
      </div>
    </div>
    <ColorPicker
      v-model:pureColor="color"
      v-model:gradientColor="gradientColor"
    />
  </div>
</template>

<style>
.vc-color-wrap {
  width: 100% !important;
  height: 2rem !important;
  border-radius: 0.24rem;
}
</style>
