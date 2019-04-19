<template>
	<div><pre :class="'language-' + lang"><code v-html="highlightedHtml"></code></pre></div>
</template>

<script>
	import Prism from 'prismjs';

    export default {
        props: {
            code: String,
            lang: String,
        },
        computed: {
            highlightedHtml() {
                return Prism.highlight(this.code, Prism.languages.html, this.lang);
            }
        },
    }
</script>