(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{11:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},12:function(t,n,e){var r=e(26)("wks"),o=e(27),i=e(11).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},13:function(t,n,e){var r=e(22),o=e(33);t.exports=e(14)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},14:function(t,n,e){t.exports=!e(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},15:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},16:function(t,n,e){var r=e(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},17:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},171:function(t,n,e){},172:function(t,n,e){},173:function(t,n,e){"use strict";var r=e(174),o=e.n(r);n.default=o.a},174:function(t,n){},175:function(t,n,e){},176:function(t,n,e){"use strict";var r=e(177),o=e.n(r);n.default=o.a},177:function(t,n){},178:function(t,n,e){},179:function(t,n,e){},18:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},180:function(t,n,e){},19:function(t,n,e){var r=e(11),o=e(13),i=e(23),u=e(27)("src"),c=e(44),a=(""+c).split("toString");e(20).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var s="function"==typeof e;s&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(s&&(i(e,u)||o(e,u,t[n]?""+t[n]:a.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},20:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},21:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},22:function(t,n,e){var r=e(16),o=e(37),i=e(32),u=Object.defineProperty;n.f=e(14)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},23:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},24:function(t,n,e){var r=e(11),o=e(20),i=e(13),u=e(19),c=e(36),a=function(t,n,e){var s,l,f,p,v=t&a.F,d=t&a.G,h=t&a.S,g=t&a.P,x=t&a.B,y=d?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,b=d?o:o[n]||(o[n]={}),_=b.prototype||(b.prototype={});for(s in d&&(e=n),e)f=((l=!v&&y&&void 0!==y[s])?y:e)[s],p=x&&l?c(f,r):g&&"function"==typeof f?c(Function.call,f):f,y&&u(y,s,f,t&a.U),b[s]!=f&&i(b,s,p),g&&_[s]!=f&&(_[s]=f)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},243:function(t,n,e){"use strict";var r=e(171);e.n(r).a},244:function(t,n,e){"use strict";var r=e(172);e.n(r).a},245:function(t,n,e){"use strict";var r=e(273),o=e(173),i=(e(246),e(1)),u=Object(i.a)(o.default,r.a,r.b,!1,null,"53256475",null);n.default=u.exports},246:function(t,n,e){"use strict";var r=e(175);e.n(r).a},247:function(t,n,e){"use strict";var r=e(271),o=e(176),i=(e(248),e(1)),u=Object(i.a)(o.default,r.a,r.b,!1,null,"503a5ea5",null);n.default=u.exports},248:function(t,n,e){"use strict";var r=e(178);e.n(r).a},249:function(t,n,e){"use strict";var r=e(179);e.n(r).a},25:function(t,n,e){"use strict";var r=e(16),o=e(30),i=e(34),u=e(21),c=e(40),a=e(41),s=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;e(42)("replace",2,function(t,n,e,d){return[function(r,o){var i=t(this),u=null==r?void 0:r[n];return void 0!==u?u.call(r,i,o):e.call(String(i),r,o)},function(t,n){var o=d(e,t,this,n);if(o.done)return o.value;var f=r(t),p=String(this),v="function"==typeof n;v||(n=String(n));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}for(var y=[];;){var b=a(f,p);if(null===b)break;if(y.push(b),!g)break;""===String(b[0])&&(f.lastIndex=c(p,i(f.lastIndex),x))}for(var _,m="",S=0,w=0;w<y.length;w++){b=y[w];for(var E=String(b[0]),k=s(l(u(b.index),p.length),0),j=[],$=1;$<b.length;$++)j.push(void 0===(_=b[$])?_:String(_));var O=b.groups;if(v){var C=[E].concat(j,k,p);void 0!==O&&C.push(O);var M=String(n.apply(void 0,C))}else M=h(E,p,k,j,O,n);k>=S&&(m+=p.slice(S,k)+M,S=k+E.length)}return m+p.slice(S)}];function h(t,n,r,i,u,c){var a=r+t.length,s=i.length,l=v;return void 0!==u&&(u=o(u),l=p),e.call(c,l,function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":c=u[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var p=f(l/10);return 0===p?e:p<=s?void 0===i[p-1]?o.charAt(1):i[p-1]+o.charAt(1):e}c=i[l-1]}return void 0===c?"":c})}})},250:function(t,n,e){"use strict";var r=e(180);e.n(r).a},26:function(t,n,e){var r=e(20),o=e(11),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(35)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},27:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},271:function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},273:function(t,n,e){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},o=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return o})},277:function(t,n,e){"use strict";e.r(n);e(25),e(79);var r={name:"GuluLayout",data:function(){return{layoutClasses:{hasSider:!1}}},mounted:function(){var t=this;this.$children.map(function(n){"GuluSider"===n.$options.name&&(t.layoutClasses.hasSider=!0)})}},o=(e(243),e(1)),i=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClasses},[this._t("default")],2)},[],!1,null,"6980098d",null).exports,u={name:"Header"},c=(e(244),Object(o.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"599386a2",null).exports),a=e(245),s=e(247),l={name:"GuluSider",data:function(){return{visible:!0}},methods:{}},f=(e(249),Object(o.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.visible?e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"sider"},[t._t("default"),t._v(" "),e("button",{on:{click:function(n){t.visible=!1}}},[t._v("close")])],2)]):t._e()},[],!1,null,"cd503a58",null).exports),p={components:{GLayout:i,GHeader:c,GFooter:a.default,GContent:s.default,GSider:f},data:function(){return{content:'\n          <g-layout style="color: white; margin-bottom:50px;">\n            <g-header style="height: 50px; background:lightskyblue;">\n              header\n            </g-header>\n            <g-content style="height: 100px; background:deepskyblue;">\n              content\n            </g-content>\n            <g-footer style="height: 50px; background:lightskyblue;">\n              footer\n            </g-footer>\n          </g-layout>\n      '.replace(/^ {8}/gm,"").trim()}}},v=(e(250),Object(o.a)(p,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("布局")]),t._v(" "),t._m(0),t._v(" "),e("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      header\n    ")]),t._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[t._v("\n      content\n    ")]),t._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[t._v("\n      footer\n    ")])],1),t._v(" "),t._m(1),t._v(" "),e("pre",[e("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"fc6d38c0",null));n.default=v.exports},28:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},29:function(t,n,e){"use strict";var r,o,i=e(43),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=void 0!==/()??/.exec("")[1];(s||l)&&(a=function(t){var n,e,r,o,a=this;return l&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),r=u.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),l&&r&&r.length>1&&c.call(r[0],e,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)}),r}),t.exports=a},30:function(t,n,e){var r=e(18);t.exports=function(t){return Object(r(t))}},32:function(t,n,e){var r=e(17);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},33:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},34:function(t,n,e){var r=e(21),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},35:function(t,n){t.exports=!1},36:function(t,n,e){var r=e(45);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},37:function(t,n,e){t.exports=!e(14)&&!e(15)(function(){return 7!=Object.defineProperty(e(38)("div"),"a",{get:function(){return 7}}).a})},38:function(t,n,e){var r=e(17),o=e(11).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},40:function(t,n,e){"use strict";var r=e(46)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},41:function(t,n,e){"use strict";var r=e(47),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},42:function(t,n,e){"use strict";e(48);var r=e(19),o=e(13),i=e(15),u=e(18),c=e(12),a=e(29),s=c("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var p=c(t),v=!i(function(){var n={};return n[p]=function(){return 7},7!=""[t](n)}),d=v?!i(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[s]=function(){return e}),e[p](""),!n}):void 0;if(!v||!d||"replace"===t&&!l||"split"===t&&!f){var h=/./[p],g=e(u,p,""[t],function(t,n,e,r,o){return n.exec===a?v&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),x=g[0],y=g[1];r(String.prototype,t,x),o(RegExp.prototype,p,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},43:function(t,n,e){"use strict";var r=e(16);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},44:function(t,n,e){t.exports=e(26)("native-function-to-string",Function.toString)},45:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},46:function(t,n,e){var r=e(21),o=e(18);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},47:function(t,n,e){var r=e(28),o=e(12)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},48:function(t,n,e){"use strict";var r=e(29);e(24)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},79:function(t,n,e){var r=e(22).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||e(14)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);