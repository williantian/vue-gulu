import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from './ButtonGroup'
import Input from "./Input";
import Row from './Row';
import Col from './Col';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Layout from './layout';
import Footer from './footer';
import Toast from './toast';
import plugin from './plugin';


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.use(plugin);
 new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi',
  },
   methods: {
     showToast: function () {
       this.$toast('我是message', {
       	 position: 'middle',
				 closeButton: {
					 text: '知道了',
					 callback: ()=>{
						 console.log('知道了');
					 }
				 },
				 autoClose: false,
				 enableHtml: false
       })
     }
   },
   created(){

   }

});