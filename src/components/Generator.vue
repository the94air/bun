<script setup>
import { useStore } from "../stores/settings";

const settings = useStore();
</script>

<template>
  <div class="mb-10">
    <h3 class="font-bold text-xl lg:text-2xl mb-4">HTML body</h3>
    <pre
      v-highlightjs
    ><code class="rounded-md py-6 px-6 html">&lt;label class="{{ settings.prefix }}-contain"&gt;
  &lt;span&gt;This is a checkbox&lt;/span&gt;
  &lt;input type="checkbox" /&gt;
  &lt;div class="{{ settings.prefix }}-input"&gt;&lt;/div&gt;
&lt;/label&gt;

&lt;label class="{{ settings.prefix }}-contain"&gt;
  &lt;span&gt;This is a radio&lt;/span&gt;
  &lt;input name="radio" type="radio" /&gt;
  &lt;div class="{{ settings.prefix }}-input"&gt;&lt;/div&gt;
&lt;/label&gt;</code></pre>
  </div>

  <div>
    <h3 class="font-bold text-xl lg:text-2xl mb-4">CSS style</h3>

    <pre
      class="max-h-96 overflow-y-auto rounded-md"
      v-highlightjs
    ><code class="py-6 px-6 css">.{{ settings.prefix }}-contain *,
.{{ settings.prefix }}-contain *::before,
.{{ settings.prefix }}-contain *::after {
  box-sizing: content-box !important;
}

.{{ settings.prefix }}-contain input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.{{ settings.prefix }}-contain span {
  line-height: {{ settings.content.lineHeight }};
  font-size: {{ settings.contentFontSize }};
  font-family: inherit;
}

.{{ settings.prefix }}-contain {
  display: table;
  position: relative;
  padding-left: {{ settings.inputPaddingLeft }};
  cursor: pointer;
  margin-bottom: {{ settings.inputMarginBottom }};
}

.{{ settings.prefix }}-contain input[type="checkbox"] ~ .{{ settings.prefix }}-input {
  position: absolute;
  top: 0;
  left: 0;
  height: {{ settings.inputHeight }};
  width: {{ settings.inputWidth }};
  background: {{ settings.input.backgroundColor }};
  transition: background 250ms;
  border: {{ settings.inputBorder }};
  border-radius: {{ settings.checkboxBorderRadius }};
}

.{{ settings.prefix }}-contain input[type="radio"] ~ .{{ settings.prefix }}-input {
  position: absolute;
  top: 0;
  left: 0;
  height: {{ settings.inputHeight }};
  width: {{ settings.inputWidth }};
  background: {{ settings.input.backgroundColor }};
  transition: background 250ms;
  border: {{ settings.inputBorder }};
  border-radius: {{ settings.radioBorderRadius }};
}

.{{ settings.prefix }}-contain input[type="checkbox"] ~ .{{ settings.prefix }}-input::after {
  content: "";
  position: absolute;
  display: none;
  left: {{ settings.checkmarkLeft }};
  top: {{ settings.checkmarkTop }};
  width: {{ settings.checkmarkWidth }};
  height: {{ settings.checkmarkHeight }};
  border: solid {{ settings.checkmark.color }};
  border-width: {{ settings.checkmarkThickness }};
  transition: background 250ms;
  transform: rotate(45deg);
}

.{{ settings.prefix }}-contain input[type="radio"] ~ .{{ settings.prefix }}-input::after {
  content: "";
  position: absolute;
  display: none;
  left: {{ settings.bullLeft }};
  top: {{ settings.bullTop }};
  width: {{ settings.bullWidth }};
  height: {{ settings.bullHeight }};
  border-radius: {{ settings.bullBorderRadius }};
  background: {{ settings.bull.color }};
  transition: background 250ms;
}

.{{ settings.prefix }}-contain input[type="checkbox"]:disabled ~ .{{ settings.prefix }}-input::after {
  border-color: {{ settings.checkmark.disabled.color }};
}

.{{ settings.prefix }}-contain input:checked ~ .{{ settings.prefix }}-input::after {
  display: block;
}

.{{ settings.prefix }}-contain:hover input[type="checkbox"]:not([disabled]) ~ .{{ settings.prefix }}-input,
.{{ settings.prefix }}-contain input[type="checkbox"]:focus ~ .{{ settings.prefix }}-input {
  background: {{ settings.checkbox.interaction.backgroundColor }};
  border-color: {{ settings.checkbox.interaction.borderColor }};
}

.{{ settings.prefix }}-contain:hover input[type="radio"]:not([disabled]) ~ .{{ settings.prefix }}-input,
.{{ settings.prefix }}-contain input[type="radio"]:focus ~ .{{ settings.prefix }}-input {
  background: {{ settings.radio.interaction.backgroundColor }};
  border-color: {{ settings.radio.interaction.borderColor }};
}

.{{ settings.prefix }}-contain input:focus ~ .{{ settings.prefix }}-input {
  box-shadow: {{ settings.ringThickness }};
}

.{{ settings.prefix }}-contain input[type="checkbox"]:checked ~ .{{ settings.prefix }}-input {
  background: {{ settings.checkbox.checked.backgroundColor }};
  border-color: {{ settings.checkbox.checked.borderColor }};
}

.{{ settings.prefix }}-contain input[type="radio"]:checked ~ .{{ settings.prefix }}-input {
  background: {{ settings.radio.checked.backgroundColor }};
  border-color: {{ settings.radio.checked.borderColor }};
}

.{{ settings.prefix }}-contain input[type="checkbox"]:disabled ~ .{{ settings.prefix }}-input,
.{{ settings.prefix }}-contain input[type="radio"]:disabled ~ .{{ settings.prefix }}-input {
  opacity: {{ settings.disabled.opacity }};
  cursor: not-allowed;
}

.{{ settings.prefix }}-contain input[type="radio"]:disabled ~ .{{ settings.prefix }}-input::after {
  background: {{ settings.bull.disabled.color }};
}

.{{ settings.prefix }}-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .{{ settings.prefix }}-input,
.{{ settings.prefix }}-contain input[type="checkbox"]:checked:focus ~ .{{ settings.prefix }}-input {
  background: {{ settings.checkbox.checked.interaction.backgroundColor }};
  border-color: {{ settings.checkbox.checked.interaction.borderColor }};
}

.{{ settings.prefix }}-contain:hover input[type="radio"]:not([disabled]):checked ~ .{{ settings.prefix }}-input,
.{{ settings.prefix }}-contain input[type="radio"]:checked:focus ~ .{{ settings.prefix }}-input {
  background: {{ settings.radio.checked.interaction.backgroundColor }};
  border-color: {{ settings.radio.checked.interaction.borderColor }};
}</code></pre>
  </div>
</template>
