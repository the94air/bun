<script setup>
import { ref } from "vue";
import { useStore } from "../stores/settings";

const settings = useStore();

const resetSettings = () => {
  settings.$reset();
};

let theme = ref("light");

const changeTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};
</script>

<template>
  <section class="sticky top-12">
    <div
      class="border border-slate-200 rounded-md p-8 mb-6"
      :class="theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'"
    >
      <div class="mb-8">
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "First unchecked checkbox"
                : settings.content.text
            }}
          </span>
          <input type="checkbox" />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Second checked checkbox"
                : settings.content.text
            }}
          </span>
          <input type="checkbox" checked />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Third unchecked & disabled checkbox"
                : settings.content.text
            }}
          </span>
          <input type="checkbox" disabled />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Fourth checked & disabled checkbox"
                : settings.content.text
            }}
          </span>
          <input type="checkbox" checked disabled />
          <div class="b-input"></div>
        </label>
      </div>
      <div>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "First unchecked radio"
                : settings.content.text
            }}
          </span>
          <input name="radio" type="radio" />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Second checked radio"
                : settings.content.text
            }}
          </span>
          <input name="radio" type="radio" checked />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Third unchecked & disabled radio"
                : settings.content.text
            }}
          </span>
          <input name="radio2" type="radio" disabled />
          <div class="b-input"></div>
        </label>
        <label class="b-contain">
          <span>
            {{
              settings.content.text === ""
                ? "Fourth checked & disabled radio"
                : settings.content.text
            }}
          </span>
          <input name="radio3" type="radio" checked disabled />
          <div class="b-input"></div>
        </label>
      </div>
    </div>
    <div>
      <button
        class="inline-block font-sm text-black bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded cursor-pointer select-none py-2 px-5"
        @click="resetSettings"
      >
        Reset all settings
      </button>
      <button
        class="inline-block font-sm text-black bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 rounded cursor-pointer select-none py-2 px-5 ml-4"
        @click="changeTheme"
      >
        Change theme: {{ theme }}
      </button>
    </div>
  </section>
</template>

<style>
.b-contain *,
.b-contain *::before,
.b-contain *::after {
  box-sizing: content-box !important;
}

.b-contain input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.b-contain span {
  line-height: v-bind("settings.content.lineHeight");
  font-size: v-bind("settings.contentFontSize");
  font-family: inherit;
}

.b-contain {
  display: table;
  position: relative;
  padding-left: v-bind("settings.inputPaddingLeft");
  cursor: pointer;
  margin-bottom: v-bind("settings.inputMarginBottom");
}

.b-contain input[type="checkbox"] ~ .b-input {
  position: absolute;
  top: 0;
  left: 0;
  height: v-bind("settings.inputHeight");
  width: v-bind("settings.inputWidth");
  background: v-bind("settings.input.backgroundColor");
  transition: background 250ms;
  border: v-bind("settings.inputBorder");
  border-radius: v-bind("settings.checkboxBorderRadius");
}

.b-contain input[type="radio"] ~ .b-input {
  position: absolute;
  top: 0;
  left: 0;
  height: v-bind("settings.inputHeight");
  width: v-bind("settings.inputWidth");
  background: v-bind("settings.input.backgroundColor");
  transition: background 250ms;
  border: v-bind("settings.inputBorder");
  border-radius: v-bind("settings.radioBorderRadius");
}

.b-contain input[type="checkbox"] ~ .b-input::after {
  content: "";
  position: absolute;
  display: none;
  left: v-bind("settings.checkmarkLeft");
  top: v-bind("settings.checkmarkTop");
  width: v-bind("settings.checkmarkWidth");
  height: v-bind("settings.checkmarkHeight");
  border: solid v-bind("settings.checkmark.color");
  border-width: v-bind("settings.checkmarkThickness");
  transition: background 250ms;
  transform: rotate(45deg);
}

.b-contain input[type="radio"] ~ .b-input::after {
  content: "";
  position: absolute;
  display: none;
  left: v-bind("settings.bullLeft");
  top: v-bind("settings.bullTop");
  width: v-bind("settings.bullWidth");
  height: v-bind("settings.bullHeight");
  border-radius: v-bind("settings.bullBorderRadius");
  background: v-bind("settings.bull.color");
  transition: background 250ms;
}

.b-contain input[type="checkbox"]:disabled ~ .b-input::after {
  border-color: v-bind("settings.checkmark.disabled.color");
}

.b-contain input:checked ~ .b-input::after {
  display: block;
}

.b-contain:hover input[type="checkbox"]:not([disabled]) ~ .b-input,
.b-contain input[type="checkbox"]:focus ~ .b-input {
  background: v-bind("settings.checkbox.interaction.backgroundColor");
  border-color: v-bind("settings.checkbox.interaction.borderColor");
}

.b-contain:hover input[type="radio"]:not([disabled]) ~ .b-input,
.b-contain input[type="radio"]:focus ~ .b-input {
  background: v-bind("settings.radio.interaction.backgroundColor");
  border-color: v-bind("settings.radio.interaction.borderColor");
}

.b-contain input:focus ~ .b-input {
  box-shadow: v-bind("settings.ringThickness");
}

.b-contain input[type="checkbox"]:checked ~ .b-input {
  background: v-bind("settings.checkbox.checked.backgroundColor");
  border-color: v-bind("settings.checkbox.checked.borderColor");
}

.b-contain input[type="radio"]:checked ~ .b-input {
  background: v-bind("settings.radio.checked.backgroundColor");
  border-color: v-bind("settings.radio.checked.borderColor");
}

.b-contain input[type="checkbox"]:disabled ~ .b-input,
.b-contain input[type="radio"]:disabled ~ .b-input {
  opacity: v-bind("settings.disabled.opacity");
  cursor: not-allowed;
}

.b-contain input[type="radio"]:disabled ~ .b-input::after {
  background: v-bind("settings.bull.disabled.color");
}

.b-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .b-input,
.b-contain input[type="checkbox"]:checked:focus ~ .b-input {
  background: v-bind("settings.checkbox.checked.interaction.backgroundColor");
  border-color: v-bind("settings.checkbox.checked.interaction.borderColor");
}

.b-contain:hover input[type="radio"]:not([disabled]):checked ~ .b-input,
.b-contain input[type="radio"]:checked:focus ~ .b-input {
  background: v-bind("settings.radio.checked.interaction.backgroundColor");
  border-color: v-bind("settings.radio.checked.interaction.borderColor");
}
</style>
