<template>
	<div class="generator">
		<div class="container">
			<div class="flex flex-wrap -mx-2">
				<div class="w-full md:w-1/2 px-2 mb-20">
					<div class="generator-settings">
						<Range
							:ident="'text_line_height'"
							:label="'Text Line height'"
							v-model="css.span.line_height"
							:min="0"
							:max="4.0"
							:step="0.01"
						/>
						<Range
							:ident="'input_left_padding'"
							:label="'Input left padding'"
							v-model="css.contain.padding_left"
							:min="0"
							:max="4.0"
							:step="0.01"
						/>
						<Range
							:ident="'input_margin_bottom'"
							:label="'Input margin bottom'"
							v-model="css.contain.margin_bottom"
							:min="0"
							:max="3.0"
							:step="0.01"
						/>
						<Range
							:ident="'input_height'"
							:label="'Input height'"
							v-model="css.input.height"
							:min="0"
							:max="3.0"
							:step="0.01"
						/>
						<Range
							:ident="'input_width'"
							:label="'Input width'"
							v-model="css.input.width"
							:min="0"
							:max="3.0"
							:step="0.01"
						/>
						<Picker
							:label="'Input background'"
							v-model="css.input.background"
						/>
						<Switchh
							:ident="'input_with_border'"
							:label="'Input with border?'"
							v-model="css.input.with_border"
						/>
						<template v-if="css.input.with_border">
							<Range
								:ident="'input_border_width'"
								:label="'Input border width'"
								v-model="css.input.border_width"
								:min="0"
								:max="10"
								:step="1"
							/>
							<Picker
								:label="'Input border color'"
								v-model="css.input.border_color"
							/>
						</template>
						<Range
							:ident="'checkbox_border_radius'"
							:label="'Checkbox border radius'"
							v-model="css.input.checkbox.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
						/>
						<Range
							:ident="'radio_border_radius'"
							:label="'Radio border radius'"
							v-model="css.input.radio.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
						/>
						<Range
							:ident="'checkbox_checkmark_left_position'"
							:label="'Checkbox checkmark left position'"
							v-model="css.input.checkbox.checkmark.left"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Range
							:ident="'checkbox_checkmark_top_position'"
							:label="'Checkbox checkmark top position'"
							v-model="css.input.checkbox.checkmark.top"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Range
							:ident="'checkbox_checkmark_width'"
							:label="'Checkbox checkmark width'"
							v-model="css.input.checkbox.checkmark.width"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Range
							:ident="'checkbox_checkmark_height'"
							:label="'Checkbox checkmark height'"
							v-model="css.input.checkbox.checkmark.height"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Picker
							:label="'Checkbox checkmark color'"
							v-model="css.input.checkbox.checkmark.color"
						/>
						<Range
							:ident="'checkbox_checkmark_thickness'"
							:label="'Checkbox checkmark thickness'"
							v-model="css.input.checkbox.checkmark.thickness"
							:min="0"
							:max="10"
							:step="1"
						/>
						<Range
							:ident="'radio_dot_left_position'"
							:label="'Radio dot left position'"
							v-model="css.input.radio.dot.left"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Range
							:ident="'radio_dot_top_position'"
							:label="'Radio dot top position'"
							v-model="css.input.radio.dot.top"
							:min="0"
							:max="3.0"
							:step=".01"
						/>
						<Range
							:ident="'radio_dot_width'"
							:label="'Radio dot width'"
							v-model="css.input.radio.dot.width"
							:min="0"
							:max="3.0"
							:step=".05"
						/>
						<Range
							:ident="'radio_dot_height'"
							:label="'Radio dot height'"
							v-model="css.input.radio.dot.height"
							:min="0"
							:max="3.0"
							:step=".05"
						/>
						<Range
							:ident="'radio_dot_border_radius'"
							:label="'Radio dot border radius'"
							v-model="css.input.radio.dot.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
						/>
						<Picker
							:label="'Radio dot color'"
							v-model="css.input.radio.dot.color"
						/>
					</div>
				</div>
				<div class="w-full md:w-1/2 px-2 mb-20">
					<div class="generator-preview" v-pin="{containerSelector: '.container', padding: {top: 10, bottom: 10}}">
						<Style>
							.f-contain *, .f-contain *::before, .f-contain *::after {
								box-sizing: content-box !important;
							}

							.f-contain input {
								position: absolute;
								z-index: -1;
								opacity: 0;
							}

							.f-contain span {
								line-height: {{ css.span.line_height }};
								font-family: inherit;
								font-size: inherit;
							}

							.f-contain {
								display: table;
								position: relative;
								padding-left: {{ css.contain.padding_left }}rem;
								cursor: pointer;
								margin-bottom: {{ css.contain.margin_bottom }}rem;
							}

							.f-contain input[type="checkbox"] ~ .f-input {
								position: absolute;
								top: 0;
								left: 0;
								height: {{ css.input.height }}rem;
								width: {{ css.input.width }}rem;
								background: {{ css.input.background }};
								transition: background 250ms;
								border: {{ css.input.with_border ? `${css.input.border_width}px solid ${css.input.border_color}` : 'none' }};
								border-radius: {{ css.input.checkbox.border_radius }}rem;
							}

							.f-contain input[type="radio"] ~ .f-input {
								position: absolute;
								top: 0;
								left: 0;
								height: {{ css.input.height }}rem;
								width: {{ css.input.width }}rem;
								background: {{ css.input.background }};
								transition: background 250ms;
								border: {{ css.input.with_border ? `${css.input.border_width}px solid ${css.input.border_color}` : 'none' }};
								border-radius: {{ css.input.radio.border_radius }}rem;
							}

							.f-contain input[type="checkbox"] ~ .f-input::after {
								content: '';
								position: absolute;
								display: none;
								left: {{ css.input.checkbox.checkmark.left }}rem;
								top: {{ css.input.checkbox.checkmark.top }}rem;
								width: {{ css.input.checkbox.checkmark.width }}rem;
								height: {{ css.input.checkbox.checkmark.height }}rem;
								border: solid {{ css.input.checkbox.checkmark.color }};
								border-width: 0 {{ css.input.checkbox.checkmark.thickness }}px {{ css.input.checkbox.checkmark.thickness }}px 0;
								transition: background 250ms;
								transform: rotate(45deg);
							}

							.f-contain input[type="radio"] ~ .f-input::after {
								content: '';
								position: absolute;
								display: none;
								left: {{ css.input.radio.dot.left }}rem;
								top: {{ css.input.radio.dot.top }}rem;
								width: {{ css.input.radio.dot.width }}rem;
								height: {{ css.input.radio.dot.height }}rem;
								border-radius: {{ css.input.radio.dot.border_radius }}rem;
								background: {{ css.input.radio.dot.color }};
								transition: background 250ms;
							}

							.f-contain input:disabled ~ .f-input::after {
								border-color: #8795A1;
							}

							.f-contain input:checked ~ .f-input::after {
								display: block;
							}

							.f-contain:hover input ~ .f-input,
							.f-contain input:focus ~ .f-input {
								background: #e7eef3;
							}

							.f-contain input:focus ~ .f-input {
								box-shadow: 0 0 0 2px rgba(52,144,220,0.5);
							}

							.f-contain input:checked ~ .f-input {
								background: #3490DC;
								border-color: #3490DC;
							}

							.f-contain input[type="checkbox"]:disabled ~ .f-input {
								background: #F1F5F8;
								border-color: #B8C2CC;
								opacity: 0.6;
								cursor: not-allowed;
							}

							.f-contain input[type="radio"]:disabled ~ .f-input {
								background: #F1F5F8;
								border-color: #B8C2CC;
								opacity: 0.6;
								cursor: not-allowed;
							}

							.f-contain input[type="radio"]:disabled ~ .f-input::after {
								background: #8795A1;
							}

							.f-contain input[type="checkbox"]:checked:focus ~ .f-input, .f-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .f-input {
								background: #4a9ce0;
								border-color: #4a9ce0;
							}

							.f-contain input[type="checkbox"]:checked:focus ~ .f-input, .f-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .f-input {
								background: #4a9ce0;
								border-color: #4a9ce0;
							}

							.f-contain .f-input::before {
								content: '';
								display: block;
								position: absolute;
								left: 0;
								top: 0;
								width: 3rem;
								height: 3rem;
								margin-left: -0.85rem;
								margin-top: -0.85rem;
								background: #3490DC;
								border-radius: 100%;
								opacity: .6;
								z-index: 99999;
								transform: scale(0);
							}

							@keyframes f-ripple {
								0% {
									transform: scale(0);
								}

								20% {
									transform: scale(1);
								}

								100% {
									opacity: 0;
									transform: scale(1);
							  	}
							}

							@keyframes f-ripple-duplicate {
								0% {
									transform: scale(0);
								}

								30% {
									transform: scale(1);
								}

								60% {
									transform: scale(1);
								}

								100% {
									opacity: 0;
									transform: scale(1);
							  	}
							}

							.f-contain input + .f-input::before {
								animation: f-ripple 250ms ease-out;
							}

							.f-contain input:checked + .f-input::before {
								animation-name: f-ripple-duplicate;
							}

							.f-contain .f-input::before {
								visibility: hidden;
							}

							.f-contain input:focus + .f-input::before {
								visibility: visible;
							}
						</Style>
						<div class="card">
							<label class="f-contain">
								<span>First checkbox</span>
								<input type="checkbox">
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<span>Second checkbox</span>
								<input type="checkbox" checked="">
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<input type="checkbox" disabled>
								<span>Third checkbox</span>
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<span>Forth checkbox</span>
								<input type="checkbox" checked="" disabled>
								<div class="f-input"></div>
							</label>
						</div>

						<div class="card">
							<label class="f-contain">
								<span>First radio</span>
								<input type="radio" name="radio1">
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<span>Second radio</span>
								<input type="radio" name="radio1" checked="">
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<input type="radio" name="radio2" disabled>
								<span>Third radio</span>
								<div class="f-input"></div>
							</label>
							<label class="f-contain">
								<span>Forth radio</span>
								<input type="radio" name="radio2" checked="" disabled>
								<div class="f-input"></div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Style from './Style';
	import Range from './Range';
	import Picker from './Picker';
	import Switchh from './Switchh';

	export default {
		data() {
			return {
				css: {
					span: {
						line_height: '1.54',
					},
					contain: {
						padding_left: '1.8',
						margin_bottom: '.5',
					},
					input: {
						height: '1.25',
						width: '1.25',
						background: 'rgba(241, 245, 248, 1)',
						with_border: true,
						border_width: '1',
						border_color: 'rgba(184, 194, 204, 1)',
						checkbox: {
							border_radius: '0.125',
							checkmark: {
								left: '.45',
								top: '.18',
								width: '.25',
								height: '.6',
								color: 'rgba(255, 255, 255, 1)',
								thickness: '2',
							}
						},
						radio: {
							border_radius: '2.0',
							dot: {
								left: '.25',
								top: '.25',
								width: '.75',
								height: '.75',
								border_radius: '2.0',
								color: 'rgba(255, 255, 255, 1)',
							}
						},
					},
				}
			}
		},
		components: { Style, Range, Picker, Switchh },
	}
</script>

<style scoped>
	.pin-wrapper {
		padding-bottom: 1000px;
	}
</style>