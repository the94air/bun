<script setup>
import { useStore } from "../stores/settings";
import TextInput from "./TextInput.vue";
import RangeInput from "./RangeInput.vue";
import ColorInput from "./ColorInput.vue";

const settings = useStore();
</script>

<template>
  <div class="bg-slate-50 border border-slate-200 rounded-md p-3 md:px-5 mb-12">
    <h2 class="text-lg font-bold mb-2">Tips</h2>
    <ul class="list-disc list-inside">
      <li>It's recommended to use keyboard arrows to set range values.</li>
      <li>
        You can change range values 10x faster if you hold shift with the
        arrows.
      </li>
    </ul>
  </div>

  <div>
    <h2 class="font-bold text-2xl lg:text-3xl mb-6">Generator Settings</h2>

    <div>
      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Content</h3>

        <TextInput id="content-text" v-model.trim="settings.content.text">
          <label for="content-text">Text content</label>
        </TextInput>

        <RangeInput
          id="content-line-height"
          :min="0"
          :max="4"
          :step="0.01"
          tag=""
          v-model.number="settings.content.lineHeight"
        >
          <label for="content-line-height">Line height</label>
        </RangeInput>

        <RangeInput
          id="content-font-size"
          :min="0"
          :max="7"
          :step="0.01"
          tag="rem"
          v-model.number="settings.content.fontSize"
        >
          <label for="content-font-size">Font size</label>
        </RangeInput>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Input</h3>

        <RangeInput
          id="input-padding-left"
          :min="0"
          :max="20"
          :step="0.01"
          tag="rem"
          v-model.number="settings.input.paddingLeft"
        >
          <label for="input-padding-left">Padding left</label>
        </RangeInput>

        <RangeInput
          id="input-margin-bottom"
          :min="0"
          :max="20"
          :step="0.01"
          tag="rem"
          v-model.number="settings.input.marginBottom"
        >
          <label for="input-margin-bottom">Margin bottom</label>
        </RangeInput>

        <RangeInput
          id="input-height"
          :min="0"
          :max="6"
          :step="0.01"
          tag="rem"
          v-model.number="settings.input.height"
        >
          <label for="input-height">Height</label>
        </RangeInput>

        <RangeInput
          id="input-width"
          :min="0"
          :max="6"
          :step="0.01"
          tag="rem"
          v-model.number="settings.input.width"
        >
          <label for="input-width">Width</label>
        </RangeInput>

        <RangeInput
          id="input-border-width"
          :min="0"
          :max="10"
          :step="1"
          tag="px"
          v-model.number="settings.input.borderWidth"
        >
          <label for="input-border-width">Border width</label>
        </RangeInput>

        <ColorInput
          v-model="settings.input.backgroundColor"
          id="input-background-color"
        >
          <label for="input-background-color">Background color</label>
        </ColorInput>

        <ColorInput
          v-model="settings.input.borderColor"
          id="input-border-color"
        >
          <label for="input-border-color">Border color</label>
        </ColorInput>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Checkbox</h3>

        <RangeInput
          id="checkbox-border-radius"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.checkbox.borderRadius"
        >
          <label for="checkbox-border-radius">Border radius</label>
        </RangeInput>

        <section class="border border-slate-300 p-5 rounded-md mb-5">
          <h4 class="font-bold text-lg mb-2">Interaction</h4>

          <ColorInput
            v-model="settings.checkbox.interaction.backgroundColor"
            id="checkbox-interaction-background-color"
          >
            <label for="checkbox-interaction-background-color"
              >Background color</label
            >
          </ColorInput>

          <ColorInput
            v-model="settings.checkbox.interaction.borderColor"
            id="checkbox-interaction-border-color"
          >
            <label for="checkbox-interaction-border-color">Border color</label>
          </ColorInput>
        </section>

        <section class="border border-slate-300 p-5 rounded-md">
          <h4 class="font-bold text-lg mb-2">Checked</h4>

          <ColorInput
            v-model="settings.checkbox.checked.backgroundColor"
            id="checkbox-checked-background-color"
          >
            <label for="checkbox-checked-background-color"
              >Background color</label
            >
          </ColorInput>

          <ColorInput
            v-model="settings.checkbox.checked.borderColor"
            id="checkbox-checked-border-color"
          >
            <label for="checkbox-checked-border-color">Border color</label>
          </ColorInput>

          <section class="border border-slate-300 p-5 rounded-md">
            <h5 class="font-bold text-lg mb-2">Interaction</h5>

            <ColorInput
              v-model="settings.checkbox.checked.interaction.backgroundColor"
              id="checkbox-checked-interaction-background-color"
            >
              <label for="checkbox-checked-interaction-background-color"
                >Background color</label
              >
            </ColorInput>

            <ColorInput
              v-model="settings.checkbox.checked.interaction.borderColor"
              id="checkbox-checked-interaction-border-color"
            >
              <label for="checkbox-checked-interaction-border-color"
                >Border color</label
              >
            </ColorInput>
          </section>
        </section>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Checkmark</h3>

        <RangeInput
          id="checkmark-left"
          :min="0"
          :max="20"
          :step="1"
          tag="px"
          v-model.number="settings.checkmark.left"
        >
          <label for="checkmark-left">Left</label>
        </RangeInput>

        <RangeInput
          id="checkmark-top"
          :min="0"
          :max="20"
          :step="1"
          tag="px"
          v-model.number="settings.checkmark.top"
        >
          <label for="checkmark-top">Top</label>
        </RangeInput>

        <RangeInput
          id="checkmark-width"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.checkmark.width"
        >
          <label for="checkmark-width">Width</label>
        </RangeInput>

        <RangeInput
          id="checkmark-height"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.checkmark.height"
        >
          <label for="checkmark-height">Height</label>
        </RangeInput>

        <ColorInput v-model="settings.checkmark.color" id="checkmark-color">
          <label for="checkmark-color">Color</label>
        </ColorInput>

        <RangeInput
          id="checkmark-thickness"
          :min="0"
          :max="10"
          :step="1"
          tag="px"
          v-model.number="settings.checkmark.thickness"
        >
          <label for="checkmark-thickness">Thickness</label>
        </RangeInput>

        <section class="border border-slate-300 p-5 rounded-md">
          <h4 class="font-bold text-lg mb-2">Disabled</h4>

          <ColorInput
            v-model="settings.checkmark.disabled.color"
            id="checkmark-disabled-color"
          >
            <label for="checkmark-disabled-color">Color</label>
          </ColorInput>
        </section>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Radio</h3>

        <RangeInput
          id="radio-border-radius"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.radio.borderRadius"
        >
          <label for="radio-border-radius">Border radius</label>
        </RangeInput>

        <section class="border border-slate-300 p-5 rounded-md mb-5">
          <h4 class="font-bold text-lg mb-2">Interaction</h4>

          <ColorInput
            v-model="settings.radio.interaction.backgroundColor"
            id="checkmark-radio-interaction-background-color"
          >
            <label for="checkmark-radio-interaction-background-color"
              >Background color</label
            >
          </ColorInput>

          <ColorInput
            v-model="settings.radio.interaction.borderColor"
            id="checkmark-radio-interaction-border-color"
          >
            <label for="checkmark-radio-interaction-border-color"
              >Border color</label
            >
          </ColorInput>
        </section>

        <section class="border border-slate-300 p-5 rounded-md">
          <h4 class="font-bold text-lg mb-2">Checked</h4>

          <ColorInput
            v-model="settings.radio.checked.backgroundColor"
            id="checkmark-radio-checked-background-color"
          >
            <label for="checkmark-radio-checked-background-color"
              >Background color</label
            >
          </ColorInput>

          <ColorInput
            v-model="settings.radio.checked.borderColor"
            id="checkmark-radio-checked-border-color"
          >
            <label for="checkmark-radio-checked-border-color"
              >Border color</label
            >
          </ColorInput>

          <section class="border border-slate-300 p-5 rounded-md">
            <h5 class="font-bold text-lg mb-2">Interaction</h5>

            <ColorInput
              v-model="settings.radio.checked.interaction.backgroundColor"
              id="checkmark-radio-checked-interaction-background-color"
            >
              <label for="checkmark-radio-checked-interaction-background-color"
                >Background color</label
              >
            </ColorInput>

            <ColorInput
              v-model="settings.radio.checked.interaction.borderColor"
              id="checkmark-radio-checked-interaction-border-color"
            >
              <label for="checkmark-radio-checked-interaction-border-color"
                >Border color</label
              >
            </ColorInput>
          </section>
        </section>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Bull</h3>

        <RangeInput
          id="bull-left"
          :min="0"
          :max="20"
          :step="1"
          tag="px"
          v-model.number="settings.bull.left"
        >
          <label for="bull-left">Left</label>
        </RangeInput>

        <RangeInput
          id="bull-top"
          :min="0"
          :max="20"
          :step="1"
          tag="px"
          v-model.number="settings.bull.top"
        >
          <label for="bull-top">Top</label>
        </RangeInput>

        <RangeInput
          id="bull-width"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.bull.width"
        >
          <label for="bull-width">Width</label>
        </RangeInput>

        <RangeInput
          id="bull-height"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.bull.height"
        >
          <label for="bull-height">Height</label>
        </RangeInput>

        <ColorInput v-model="settings.bull.color" id="bull-color">
          <label for="bull-color">Color</label>
        </ColorInput>

        <RangeInput
          id="bull-border-radius"
          :min="0"
          :max="10"
          :step="0.01"
          tag="rem"
          v-model.number="settings.bull.borderRadius"
        >
          <label for="bull-border-radius">Border radius</label>
        </RangeInput>

        <section class="border border-slate-300 p-5 rounded-md">
          <h4 class="font-bold text-lg mb-2">Disabled</h4>

          <ColorInput
            v-model="settings.bull.disabled.color"
            id="bull-disabled-color"
          >
            <label for="bull-disabled-color">Color</label>
          </ColorInput>
        </section>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Disabled</h3>

        <RangeInput
          id="disabled-opacity"
          :min="0"
          :max="1"
          :step="0.01"
          tag=""
          v-model.number="settings.disabled.opacity"
        >
          <label for="disabled-opacity">Opacity</label>
        </RangeInput>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Ring</h3>

        <ColorInput v-model="settings.ring.color" id="ring-color">
          <label for="ring-color">Color</label>
        </ColorInput>

        <RangeInput
          id="ring-thickness"
          :min="0"
          :max="10"
          :step="1"
          tag="px"
          v-model.number="settings.ring.thickness"
        >
          <label for="ring-thickness">Thickness</label>
        </RangeInput>
      </section>

      <section
        class="bg-slate-50 py-8 px-6 border border-slate-200 rounded-md mb-10"
      >
        <h3 class="font-bold text-xl lg:text-2xl mb-4">Classes</h3>

        <TextInput id="prefix" v-model.trim="settings.prefix">
          <label for="prefix">Classes prefix</label>
        </TextInput>
      </section>
    </div>
  </div>
</template>
