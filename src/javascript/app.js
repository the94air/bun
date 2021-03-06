import Vue from 'vue';
import App from './App';

require('./bootstrap');
require('prismjs/plugins/line-numbers/prism-line-numbers');

const app = new Vue({
	el: '#app',
	render: (h) => h(App),
});
