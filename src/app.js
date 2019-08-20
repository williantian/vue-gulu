import Vue from 'vue'
import Button from "./button/Button";
import Icon from "./Icon";
import ButtonGroup from './button/ButtonGroup'
import Input from "./Input";
import Row from './grid/Row';
import Col from './grid/Col';
import Header from './layout/Header';
import Sider from './layout/Sider';
import Content from './layout/Content';
import Layout from './layout/Layout';
import Footer from './layout/Footer';
import Toast from './toast';
import plugin from './plugin';
import Tabs from "./tabs/Tabs";
import TabsHead from './tabs/Tabs-head';
import TabsItem from './tabs/Tabs-item';
import TabsBody from './tabs/Tabs-body';
import TabsPane from './tabs/Tabs-pane';
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