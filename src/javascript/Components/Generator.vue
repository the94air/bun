<template>
	<div class="generator">
		<div class="container">
			<div class="flex flex-wrap -mx-3">
				<div class="w-full md:w-1/2 px-3 mb-20">
					<div class="tips">
						<h2>Tips</h2>
						<ul>
							<li>It's recommended to use keyboard arrows to set range values.</li>
							<li>Click the color box to show the color picker.</li>
						</ul>
					</div>
					<div class="generator-settings">
						<h2>Text Settings</h2>
						<Range
							:ident="'text_line_height'"
							:label="'Text Line height'"
							v-model="css.span.line_height"
							:min="0"
							:max="4.0"
							:step="0.01"
							:tag="''"
						/>
						<h2>Inputs Settings</h2>
						<Range
							:ident="'input_left_padding'"
							:label="'Input left padding'"
							v-model="css.contain.padding_left"
							:min="0"
							:max="4.0"
							:step="0.01"
							:tag="'rem'"
						/>
						<Range
							:ident="'input_margin_bottom'"
							:label="'Input margin bottom'"
							v-model="css.contain.margin_bottom"
							:min="0"
							:max="3.0"
							:step="0.01"
							:tag="'rem'"
						/>
						<Range
							:ident="'input_height'"
							:label="'Input height'"
							v-model="css.input.height"
							:min="0"
							:max="3.0"
							:step="0.01"
							:tag="'rem'"
						/>
						<Range
							:ident="'input_width'"
							:label="'Input width'"
							v-model="css.input.width"
							:min="0"
							:max="3.0"
							:step="0.01"
							:tag="'rem'"
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
								:tag="'px'"
							/>
							<Picker
								:label="'Input border color'"
								v-model="css.input.border_color"
							/>
						</template>
						<h2>Checkbox Settings</h2>
						<Range
							:ident="'checkbox_border_radius'"
							:label="'Checkbox border radius'"
							v-model="css.input.checkbox.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
							:tag="'rem'"
						/>
						<Range
							:ident="'checkbox_checkmark_left_position'"
							:label="'Checkbox checkmark left position'"
							v-model="css.input.checkbox.checkmark.left"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'checkbox_checkmark_top_position'"
							:label="'Checkbox checkmark top position'"
							v-model="css.input.checkbox.checkmark.top"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'checkbox_checkmark_width'"
							:label="'Checkbox checkmark width'"
							v-model="css.input.checkbox.checkmark.width"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'checkbox_checkmark_height'"
							:label="'Checkbox checkmark height'"
							v-model="css.input.checkbox.checkmark.height"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'checkbox_checkmark_thickness'"
							:label="'Checkbox checkmark thickness'"
							v-model="css.input.checkbox.checkmark.thickness"
							:min="0"
							:max="10"
							:step="1"
							:tag="'px'"
						/>
						<h2>Radio Settings</h2>
						<Range
							:ident="'radio_border_radius'"
							:label="'Radio border radius'"
							v-model="css.input.radio.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
							:tag="'rem'"
						/>
						<Range
							:ident="'radio_dot_left_position'"
							:label="'Radio dot left position'"
							v-model="css.input.radio.dot.left"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'radio_dot_top_position'"
							:label="'Radio dot top position'"
							v-model="css.input.radio.dot.top"
							:min="0"
							:max="3.0"
							:step=".01"
							:tag="'rem'"
						/>
						<Range
							:ident="'radio_dot_width'"
							:label="'Radio dot width'"
							v-model="css.input.radio.dot.width"
							:min="0"
							:max="3.0"
							:step=".05"
							:tag="'rem'"
						/>
						<Range
							:ident="'radio_dot_height'"
							:label="'Radio dot height'"
							v-model="css.input.radio.dot.height"
							:min="0"
							:max="3.0"
							:step=".05"
							:tag="'rem'"
						/>
						<Range
							:ident="'radio_dot_border_radius'"
							:label="'Radio dot border radius'"
							v-model="css.input.radio.dot.border_radius"
							:min="0"
							:max="3.0"
							:step=".001"
							:tag="'rem'"
						/>
						<h2>Checkbox & Radio Settings</h2>
						<Picker
							:label="'Checkbox checkmark & radio dot color'"
							v-model="css.input.checkmark_and_dot.color"
						/>
						<Picker
							:label="'Checkbox checkmark & radio dot disabled color'"
							v-model="css.input.checkmark_and_dot.disabled.color"
						/>
						<Picker
							:label="'Checked input background'"
							v-model="css.input.checked.background"
						/>
						<Picker
							:label="'Checked input border color'"
							v-model="css.input.checked.border_color"
						/>
						<Picker
							:label="'Disabled input background'"
							v-model="css.input.disabled.background"
						/>
						<Picker
							:label="'Disabled input border color'"
							v-model="css.input.disabled.border_color"
						/>
						<Range
							:ident="'input_disabled_opacity'"
							:label="'Disabled input opacity'"
							v-model="css.input.disabled.opacity"
							:min="0"
							:max="1"
							:step=".1"
							:tag="''"
						/>
						<h2>Hover & Focus Settings</h2>
						<Picker
							:label="'Input hover & focus background'"
							v-model="css.input.hover_and_focus.background"
						/>
						<Picker
							:label="'Checked input hover and focus background'"
							v-model="css.input.checked.hover_and_focus.background"
						/>
						<Picker
							:label="'Checked input hover and focus border color'"
							v-model="css.input.checked.hover_and_focus.border_color"
						/>
						<Picker
							:label="'Input focus shadow color'"
							v-model="css.input.focus.outline_color"
						/>
						<Range
							:ident="'input_focus_shadow_thickness'"
							:label="'Input focus shadow width'"
							v-model="css.input.focus.outline_thickness"
							:min="0"
							:max="10"
							:step="1"
							:tag="'px'"
						/>
						<h2>Ripple Settings</h2>
						<Switchh
							:ident="'input_with_ripple'"
							:label="'Input with ripple?'"
							v-model="css.input.with_ripple"
						/>
						<template v-if="css.input.with_ripple">
							<Switchh
								:ident="'show_input_ripple'"
								:label="'Show input ripple?'"
								v-model="css.input.ripple.scale"
							/>
							<Range
								:ident="'input_ripple_width'"
								:label="'Input ripple width'"
								v-model="css.input.ripple.width"
								:min="0"
								:max="9"
								:step=".001"
								:tag="'rem'"
							/>
							<Range
								:ident="'input_ripple_height'"
								:label="'Input ripple height'"
								v-model="css.input.ripple.height"
								:min="0"
								:max="9"
								:step=".001"
								:tag="'rem'"
							/>
							<Range
								:ident="'input_ripple_margin_left'"
								:label="'Input ripple margin left'"
								v-model="css.input.ripple.margin_left"
								:min="-3"
								:max="3"
								:step=".001"
								:tag="'rem'"
							/>
							<Range
								:ident="'input_ripple_margin_top'"
								:label="'Input ripple margin top'"
								v-model="css.input.ripple.margin_top"
								:min="-3"
								:max="3"
								:step=".001"
								:tag="'rem'"
							/>
							<Picker
								:label="'Input ripple background'"
								v-model="css.input.ripple.background"
							/>
							<Range
								:ident="'input_ripple_border_radius'"
								:label="'Input ripple border radius'"
								v-model="css.input.ripple.border_radius"
								:min="0"
								:max="3.0"
								:step=".001"
								:tag="'rem'"
							/>
							<Range
								:ident="'input_ripple_opacity'"
								:label="'Input ripple opacity'"
								v-model="css.input.ripple.opacity"
								:min="0"
								:max="1"
								:step=".1"
								:tag="''"
							/>
						</template>
					</div>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-20">
					<div v-pin="{ containerSelector: '.container', padding: { top: 50, bottom: 0 }}">
						<div class="generator-preview" :style="{ background: previewBackground ? '#20262E' : 'white', color: previewBackground ? 'black' : 'white' }">
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
									border: solid {{ css.input.checkmark_and_dot.color }};
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
									background: {{ css.input.checkmark_and_dot.color }};
									transition: background 250ms;
								}

								.f-contain input:disabled ~ .f-input::after {
									border-color: {{ css.input.checkmark_and_dot.disabled.color }};
								}

								.f-contain input:checked ~ .f-input::after {
									display: block;
								}

								.f-contain:hover input ~ .f-input,
								.f-contain input:focus ~ .f-input {
									background: {{ css.input.hover_and_focus.background }};
								}

								.f-contain input:focus ~ .f-input {
									box-shadow: 0 0 0 {{ css.input.focus.outline_thickness }}px {{ css.input.focus.outline_color }};
								}

								.f-contain input:checked ~ .f-input {
									background: {{ css.input.checked.background }};
									border-color: {{ css.input.checked.border_color }};
								}

								.f-contain input[type="checkbox"]:disabled ~ .f-input {
									background: {{ css.input.disabled.background }}; 
									border-color: {{ css.input.disabled.border_color }};
									opacity: {{ css.input.disabled.opacity }};
									cursor: not-allowed;
								}

								.f-contain input[type="radio"]:disabled ~ .f-input {
									background: {{ css.input.disabled.background }};
									border-color: {{ css.input.disabled.border_color }};
									opacity: {{ css.input.disabled.opacity }};
									cursor: not-allowed;
								}

								.f-contain input[type="radio"]:disabled ~ .f-input::after {
									background: {{ css.input.checkmark_and_dot.disabled.color }};
								}

								.f-contain input:checked:focus ~ .f-input, .f-contain:hover input:not([disabled]):checked ~ .f-input {
									background: {{ css.input.checked.hover_and_focus.background }};
									border-color: {{ css.input.checked.hover_and_focus.border_color }};
								}

								.f-contain .f-input::before {
									content: '';
									display: {{ css.input.with_ripple ? 'block' : 'none' }};
									position: absolute;
									left: 0;
									top: 0;
									width: {{ css.input.ripple.width }}rem;
									height: {{ css.input.ripple.height }}rem;
									margin-left: {{ css.input.ripple.margin_left }}rem;
									margin-top: {{ css.input.ripple.margin_top }}rem;
									background: {{ css.input.ripple.background }};
									border-radius: {{ css.input.ripple.border_radius }}rem;
									opacity: {{ css.input.ripple.opacity }};
									z-index: 99999;
									transform: scale({{ css.input.ripple.scale ? '1' : '0' }});
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

								.f-contain:first-child .f-input::before {
									visibility: {{ css.input.ripple.scale ? 'visible' : 'hidden' }};
								}
							</Style>
							<div class="card" :style="{ background: previewBackground ? 'white' : '#20262E' }">
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
									<span>Fourth checkbox</span>
									<input type="checkbox" checked="" disabled>
									<div class="f-input"></div>
								</label>
							</div>
							<div class="card" :style="{ background: previewBackground ? 'white' : '#20262E' }">
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
									<span>Fourth radio</span>
									<input type="radio" name="radio2" checked="" disabled>
									<div class="f-input"></div>
								</label>
							</div>
						</div>
						<div class="preview-background">
							<p>Background</p>
							<button class="preview-color" :style="{ background: previewBackground ? 'white' : 'black', color: previewBackground ? 'black' : 'white' }" @click="previewBackground = !previewBackground">
								<div>Light / Dark</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="flex flex-wrap -mx-3">
				<div class="w-full md:w-1/2 px-3">
					<h2 class="text-lg mb-4">Results</h2>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-4 text-right">
					<button class="copy-button" v-clipboard="css_code" @click="clipboarded('css')">Copy CSS <span v-if="clipboard.css" class="text-green">✓</span></button>
					<button class="copy-button" v-clipboard="html_code" @click="clipboarded('html')">Copy HTML <span v-if="clipboard.html" class="text-green">✓</span></button>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-20">
					<p class="result-tag">CSS</p>
					<pre class="result-code language-css line-numbers"><code v-text="css_code" id="css-code"></code></pre>
				</div>
				<div class="w-full md:w-1/2 px-3 mb-20">
					<p class="result-tag">HTML</p>
					<pre class="result-code language-html line-numbers"><code v-text="html_code"></code></pre>
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
	import Prism from 'prismjs';

	export default {
		components: { Style, Range, Picker, Switchh },
		data() {
			return {
				previewBackground: true,
				clipboard: {
					html: false,
					css: false,
				},
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
						with_ripple: true,
						border_width: '1',
						border_color: 'rgba(184, 194, 204, 1)',
						checkbox: {
							border_radius: '0.125',
							checkmark: {
								left: '.45',
								top: '.18',
								width: '.25',
								height: '.6',
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
							}
						},
						checkmark_and_dot: {
							color: 'rgba(255, 255, 255, 1)',
							disabled: {
								color: 'rgba(135, 149, 161, 1)'
							}
						},
						hover_and_focus: {
							background: 'rgb(231, 238, 243)'
						},
						focus: {
							outline_thickness: '2',
							outline_color: 'rgba(52,144,220,0.5)',
						},
						checked: {
							background: 'rgba(52, 144, 220, 1)',
							border_color: 'rgba(52, 144, 220, 1)',
							hover_and_focus: {
								background: 'rgba(74, 156, 224, 1)',
								border_color: 'rgba(74, 156, 224, 1)',
							}
						},
						disabled: {
							background: 'rgba(241, 245, 248, 1)',
							border_color: 'rgba(184, 194, 204, 1)',
							opacity: '0.6',
						},
						ripple: {
							width: '3',
							height: '3',
							margin_left: '-0.85',
							margin_top: '-0.85',
							background: 'rgba(52, 144, 220, 1)',
							border_radius: '2',
							opacity: '.6',
							scale: false,
						},
					},
				}
			}
		},
		computed: {
			css_code() {
				return `.b-contain *, .b-contain *::before, .b-contain *::after {
	box-sizing: content-box !important;
}

.b-contain input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.b-contain span {
	line-height: ${ this.css.span.line_height };
	font-family: inherit;
	font-size: inherit;
}

.b-contain {
	display: table;
	position: relative;
	padding-left: ${ this.css.contain.padding_left }rem;
	cursor: pointer;
	margin-bottom: ${ this.css.contain.margin_bottom }rem;
}

.b-contain input[type="checkbox"] ~ .b-input {
	position: absolute;
	top: 0;
	left: 0;
	height: ${ this.css.input.height }rem;
	width: ${ this.css.input.width }rem;
	background: ${ this.css.input.background };
	transition: background 250ms;
	border: ${ this.css.input.with_border ? `${this.css.input.border_width}px solid ${this.css.input.border_color}` : 'none' };
	border-radius: ${ this.css.input.checkbox.border_radius }rem;
}

.b-contain input[type="radio"] ~ .b-input {
	position: absolute;
	top: 0;
	left: 0;
	height: ${ this.css.input.height }rem;
	width: ${ this.css.input.width }rem;
	background: ${ this.css.input.background };
	transition: background 250ms;
	border: ${ this.css.input.with_border ? `${this.css.input.border_width}px solid ${this.css.input.border_color}` : 'none' };
	border-radius: ${ this.css.input.radio.border_radius }rem;
}

.b-contain input[type="checkbox"] ~ .b-input::after {
	content: '';
	position: absolute;
	display: none;
	left: ${ this.css.input.checkbox.checkmark.left }rem;
	top: ${ this.css.input.checkbox.checkmark.top }rem;
	width: ${ this.css.input.checkbox.checkmark.width }rem;
	height: ${ this.css.input.checkbox.checkmark.height }rem;
	border: solid ${ this.css.input.checkmark_and_dot.color };
	border-width: 0 ${ this.css.input.checkbox.checkmark.thickness }px ${ this.css.input.checkbox.checkmark.thickness }px 0;
	transition: background 250ms;
	transform: rotate(45deg);
}

.b-contain input[type="radio"] ~ .b-input::after {
	content: '';
	position: absolute;
	display: none;
	left: ${ this.css.input.radio.dot.left }rem;
	top: ${ this.css.input.radio.dot.top }rem;
	width: ${ this.css.input.radio.dot.width }rem;
	height: ${ this.css.input.radio.dot.height }rem;
	border-radius: ${ this.css.input.radio.dot.border_radius }rem;
	background: ${ this.css.input.checkmark_and_dot.color };
	transition: background 250ms;
}

.b-contain input:disabled ~ .b-input::after {
	border-color: ${ this.css.input.checkmark_and_dot.disabled.color };
}

.b-contain input:checked ~ .b-input::after {
	display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
	background: ${ this.css.input.hover_and_focus.background };
}

.b-contain input:focus ~ .b-input {
	box-shadow: 0 0 0 ${ this.css.input.focus.outline_thickness }px ${ this.css.input.focus.outline_color };
}

.b-contain input:checked ~ .b-input {
	background: ${ this.css.input.checked.background };
	border-color: ${ this.css.input.checked.border_color };
}

.b-contain input[type="checkbox"]:disabled ~ .b-input {
	background: ${ this.css.input.disabled.background };
	border-color: ${ this.css.input.disabled.border_color };
	opacity: ${ this.css.input.disabled.opacity };
	cursor: not-allowed;
}

.b-contain input[type="radio"]:disabled ~ .b-input {
	background: ${ this.css.input.disabled.background };
	border-color: ${ this.css.input.disabled.border_color };
	opacity: ${ this.css.input.disabled.opacity };
	cursor: not-allowed;
}

.b-contain input[type="radio"]:disabled ~ .b-input::after {
	background: ${ this.css.input.checkmark_and_dot.disabled.color };
}

.b-contain input:checked:focus ~ .b-input, .b-contain:hover input:not([disabled]):checked ~ .b-input {
	background: ${ this.css.input.checked.hover_and_focus.background };
	border-color: ${ this.css.input.checked.hover_and_focus.border_color };
}

.b-contain .b-input::before {
	content: '';
	display: ${ this.css.input.with_ripple ? 'block' : 'none' };
	position: absolute;
	left: 0;
	top: 0;
	width: ${ this.css.input.ripple.width }rem;
	height: ${ this.css.input.ripple.height }rem;
	margin-left: ${ this.css.input.ripple.margin_left }rem;
	margin-top: ${ this.css.input.ripple.margin_top }rem;
	background: ${ this.css.input.ripple.background };
	border-radius: ${ this.css.input.ripple.border_radius }rem;
	opacity: ${ this.css.input.ripple.opacity };
	z-index: 99999;
	transform: scale(0);
}

@keyframes b-ripple {
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

@keyframes b-ripple-duplicate {
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

.b-contain input + .b-input::before {
	animation: b-ripple 250ms ease-out;
}

.b-contain input:checked + .b-input::before {
	animation-name: b-ripple-duplicate;
}

.b-contain .b-input::before {
	visibility: hidden;
}

.b-contain input:focus + .b-input::before {
	visibility: visible;
}

.b-contain:first-child .b-input::before {
	visibility: hidden;
}`
			},
			html_code() {
			return `<label class="b-contain">
	<span>First checkbox</span>
	<input type="checkbox">
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<span>Second checkbox</span>
	<input type="checkbox" checked="">
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<input type="checkbox" disabled>
	<span>Third checkbox</span>
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<span>Fourth checkbox</span>
	<input type="checkbox" checked="" disabled>
	<div class="b-input"></div>
</label>

<label class="b-contain">
	<span>First radio</span>
	<input type="radio" name="radio1">
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<span>Second radio</span>
	<input type="radio" name="radio1" checked="">
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<input type="radio" name="radio2" disabled>
	<span>Third radio</span>
	<div class="b-input"></div>
</label>
<label class="b-contain">
	<span>Fourth radio</span>
	<input type="radio" name="radio2" checked="" disabled>
	<div class="b-input"></div>
</label>`
			}
		},
		watch: {
			css:  {
				handler(value) {
					let block = document.getElementById('css-code');
					this.$nextTick(()=> Prism.highlightElement(block));
				},
				deep: true
			}
		},
		methods: {
			clipboarded(type) {
				let self = this;
				this.clipboard[type] = true;
				setTimeout(() => {
					self.clipboard[type] = false;
				}, 2000);
			}
		}
	}
</script>
