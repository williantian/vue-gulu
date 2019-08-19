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
import Tabs from "./Tabs";
import TabsHead from './Tabs-head';
import TabsItem from './Tabs-item';
import TabsBody from './Tabs-body';
import TabsPane from './Tabs-pane';
import Popover from "./Popover";


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
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
 new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi',
		selectedTab:'sports',
  },
   methods: {
  	yyy(){
  		console.log('yyy')
		},
  	showToast1(){
  		this.showToast('top')
		},
		 showToast2(){
			 this.showToast('middle')
		 },
		 showToast3(){
			 this.showToast('bottom')
		 },
     showToast: function (position) {
       this.$toast('我是message', {
       	 position,
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