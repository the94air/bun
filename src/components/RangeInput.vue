<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const props = defineProps({
  id: String,
  modelValue: Number,
  min: Number,
  max: Number,
  step: Number,
  tag: String,
});
defineEmits(["update:modelValue"]);

const defaultValue = ref(props.modelValue);
const defaultStep = ref(props.step);
const shiftStep = defaultStep.value * 10;
const rangeStep = ref(defaultStep.value);

const range = ref(null);

function fastSteps() {
  rangeStep.value = shiftStep;
}

function normalSteps(e) {
  if (e.key === "Shift" || e.key === "Tab") {
    rangeStep.value = defaultStep.value;
  }
}

onMounted(() => {
  range.value.addEventListener("keyup", normalSteps);
});

onBeforeUnmount(() => {
  range.value.removeEventListener("keyup", normalSteps);
});
</script>

<template>
  <div class="mb-6 last:mb-0">
    <div class="flex justify-between mb-2">
      <div><slot /></div>
      <div class="flex">
        <div class="flex items-center">
          <div>
            <input
              class="block appearance-none bg-white leading-tight rounded focus:outline-none border-2 hover:border-slate-300 focus:border-black px-2 py-[0.2rem] text-center w-16"
              type="text"
              :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
            />
          </div>
          <span v-if="tag" class="ml-2">
            {{ tag }}
          </span>
        </div>
        <button
          class="inline-block font-sm text-black bg-slate-300 hover:bg-slate-200 focus:bg-slate-200 rounded cursor-pointer select-none py-[0.2rem] px-3 ml-2"
          @click="$emit('update:modelValue', defaultValue)"
        >
          Reset
        </button>
      </div>
    </div>
    <input
      ref="range"
      type="range"
      :id="id"
      :min="min"
      :max="max"
      :step="rangeStep"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown.shift="fastSteps()"
    />
  </div>
</template>

<style>
input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 2.25rem;
  line-height: 2.25rem;
  vertical-align: middle;
  background: transparent;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.3rem;
  cursor: pointer;
  background: theme("colors.slate.200");
  border-radius: 0.25rem;
  border: none;
}
input[type="range"]::-webkit-slider-thumb {
  border: none;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #000000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -0.375rem;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: theme("colors.slate.200");
}
input[type="range"]:focus::-webkit-slider-thumb {
  -webkit-box-shadow: 0 0 0 2px #999999;
  box-shadow: 0 0 0 2px #999999;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.3rem;
  cursor: pointer;
  background: theme("colors.slate.200");
  border-radius: 0.25rem;
  border: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  border: none;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background: #000000;
  cursor: pointer;
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 2px #999999;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 0.3rem;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower,
input[type="range"]::-ms-fill-upper {
  background: theme("colors.slate.200");
  border: none;
  border-radius: 0.25rem;
}
input[type="range"]::-ms-thumb {
  border: none;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background: #000000;
  cursor: pointer;
  margin-top: -0.25rem;
}
input[type="range"]:focus::-ms-thumb {
  box-shadow: 0 0 0 2px #999999;
}
input[type="range"]:focus::-ms-fill-lower,
input[type="range"]:focus::-ms-fill-upper {
  background: theme("colors.slate.200");
}
</style>
