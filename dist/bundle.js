!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tlVueSlide=t():e.tlVueSlide=t()}(window,function(){return function(e){var t=window.webpackHotUpdatetlVueSlide;window.webpackHotUpdatetlVueSlide=function(e,n){!function(e,t){if(!x[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(v[n]=t[n]);0==--y&&0===b&&j()}(e,n),t&&t(e,n)};var n,i=!0,r="15526ed0bbc89d4b8041",o=1e4,s={},a=[],c=[];function l(e){var t=M[e];if(!t)return A;var i=function(i){return t.hot.active?(M[i]?-1===M[i].parents.indexOf(e)&&M[i].parents.push(e):(a=[e],n=i),-1===t.children.indexOf(i)&&t.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+e),a=[]),A(i)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var o in A)Object.prototype.hasOwnProperty.call(A,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(i,o,r(o));return i.e=function(e){return"ready"===f&&h("prepare"),b++,A.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(w[e]||S(e),0===b&&0===y&&j())}},i.t=function(e,t){return 1&t&&(e=i(e)),A.t(e,-2&t)},i}function u(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._acceptedDependencies[e[i]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:E,status:function(e){if(!e)return f;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var t=d.indexOf(e);t>=0&&d.splice(t,1)},data:s[e]};return n=void 0,t}var d=[],f="idle";function h(e){f=e;for(var t=0;t<d.length;t++)d[t].call(null,e)}var p,v,m,y=0,b=0,w={},g={},x={};function _(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(t=o,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,o=A.p+""+r+".hot-update.json";i.open("GET",o,!0),i.timeout=t,i.send(null)}catch(e){return n(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===i.status)e();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(i.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;g={},w={},x=e.c,m=e.h,h("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});v={};return S(0),"prepare"===f&&0===b&&0===y&&j(),t});var t}function S(e){x[e]?(g[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):w[e]=!0}function j(){h("ready");var e=p;if(p=null,e)if(i)Promise.resolve().then(function(){return E(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&t.push(_(n));e.resolve(t)}}function E(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,i,o,c,l;function u(e){for(var t=[e],n={},i=t.slice().map(function(e){return{chain:[e],id:e}});i.length>0;){var r=i.pop(),o=r.id,s=r.chain;if((c=M[o])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],u=M[l];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),d(n[l],[o])):(delete n[l],t.push(l),i.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];-1===e.indexOf(i)&&e.push(i)}}t=t||{};var p={},y=[],b={},w=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var O;l=_(g);var S=!1,j=!1,E=!1,D="";switch((O=v[g]?u(l):{type:"disposed",moduleId:g}).chain&&(D="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(S=new Error("Aborted because of self decline: "+O.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(S=new Error("Aborted because "+l+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(O),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),E=!0;break;default:throw new Error("Unexception type "+O.type)}if(S)return h("abort"),Promise.reject(S);if(j)for(l in b[l]=v[l],d(y,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(p[l]||(p[l]=[]),d(p[l],O.outdatedDependencies[l]));E&&(d(y,[O.moduleId]),b[l]=w)}var C,H=[];for(i=0;i<y.length;i++)l=y[i],M[l]&&M[l].hot._selfAccepted&&H.push({module:l,errorHandler:M[l].hot._selfAccepted});h("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var L,I,N=y.slice();N.length>0;)if(l=N.pop(),c=M[l]){var T={},R=c.hot._disposeHandlers;for(o=0;o<R.length;o++)(n=R[o])(T);for(s[l]=T,c.hot.active=!1,delete M[l],delete p[l],o=0;o<c.children.length;o++){var k=M[c.children[o]];k&&((C=k.parents.indexOf(l))>=0&&k.parents.splice(C,1))}}for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(c=M[l]))for(I=p[l],o=0;o<I.length;o++)L=I[o],(C=c.children.indexOf(L))>=0&&c.children.splice(C,1);for(l in h("apply"),r=m,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var U=null;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(c=M[l])){I=p[l];var P=[];for(i=0;i<I.length;i++)if(L=I[i],n=c.hot._acceptedDependencies[L]){if(-1!==P.indexOf(n))continue;P.push(n)}for(i=0;i<P.length;i++){n=P[i];try{n(I)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:I[i],error:e}),t.ignoreErrored||U||(U=e)}}}for(i=0;i<H.length;i++){var V=H[i];l=V.module,a=[l];try{A(l)}catch(e){if("function"==typeof V.errorHandler)try{V.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||U||(U=n),U||(U=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||U||(U=e)}}return U?(h("fail"),Promise.reject(U)):(h("idle"),new Promise(function(e){e(y)}))}var M={};function A(t){if(M[t])return M[t].exports;var n=M[t]={i:t,l:!1,exports:{},hot:u(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}return A.m=e,A.c=M,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)A.d(n,i,function(t){return e[t]}.bind(null,i));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A.h=function(){return r},l(14)(A.s=14)}([function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t.default=r.a},function(e,t,n){"use strict";var i=n(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(16)),o=function(e){return function(){var e=!1;try{addEventListener("tl_slide_test_passive",null,Object.defineProperty({},"passive",{get:function(){e=!0}}))}catch(e){}return e}()?{passive:e}:e},s={mixins:[r.default],props:{loop:{type:Boolean,default:!1},direction:{type:String,default:"horizontal"},autoplay:{type:Number,default:0},disableTouch:{type:Boolean,default:!1},threshold:{type:Number,default:.1}},data:function(){return{isAction:!1,isAnimateIng:!1,startValue:0,moveValue:0,slideValue:0,startOffset:0,containerWidth:0,containerHeight:0,maxDistance:0,thresholdDistance:0,currentNow:0,style:{},childLength:0,slideWraper:null,argsValueResetCount:10,disableMove:!1}},computed:{isHorizontal:function(){return"horizontal"===this.direction}},mounted:function(){document.body.addEventListener("touchstart",function(){}),this.slideWraper=this.$refs.slideWraper,document.body.addEventListener("touchmove",this.onDocumentMove,o(!1))},methods:{onSlideItemMounted:function(){this.slideWraper=this.$refs.slideWraper,this.childLength!==this.slideWraper.children.length&&(this.childLength=this.slideWraper.children.length,this.setConfig())},setArgsValue:function(){var e=this,t=this.$el.getBoundingClientRect();this.containerWidth=t.width,this.containerHeight=t.height,(0===this.containerWidth||0===this.containerHeight&&this.argsValueResetCount>0)&&setTimeout(function(){e.argsValueResetCount--,e.setArgsValue()},100),this.isHorizontal?(this.maxDistance=(this.childLength-1)*this.containerWidth,this.thresholdDistance=this.containerWidth*this.threshold):(this.maxDistance=(this.childLength-1)*this.containerHeight,this.thresholdDistance=this.containerHeight*this.threshold)},setConfig:function(){this.setArgsValue(),this.loop&&(this.onLoopCopyElement(),this.currentNow=1,this.action(!1)),this.autoplay&&this.onAutoPlay()},onAutoPlay:function(){var e=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){e.onAutoPlay(),e.next()},this.autoplay)},onDocumentMove:function(e){e.cancelable&&this.disableMove&&(e.defaultPrevented||e.preventDefault())},onSwipeStart:function(e){if(!this.disableTouch&&!this.isAnimateIng){this.isAction=!0;var t=this.offset(e);this.startValue=this.isHorizontal?t.x:t.y,this.startOffset=t,this.isHorizontal||e.preventDefault()}},onSwipeMove:function(e){if(!this.disableTouch&&this.isAction){var t=this.offset(e),n=0;if(this.isHorizontal||!(Math.abs(t.y-this.startValue)<10)){if(this.isHorizontal){var i=Math.abs(t.y-this.startOffset.y),r=Math.abs(t.x-this.startOffset.x);if(i>r)return;r>i&&!this.disableMove&&(this.disableMove=!0)}else this.isHorizontal||(this.disableMove=!0);n=this.isHorizontal?t.x-this.startValue:t.y-this.startValue;var o=this.moveValue+n;o>0?(o*=.2,this.slideValue=.2*n):Math.abs(o)>this.maxDistance?(o=-(this.maxDistance-.2*n),this.slideValue=.2*n):this.slideValue=n,this.slide(o)}}},onSwipeEnd:function(e){if(this.disableMove=!1,!this.disableTouch&&!this.isAnimateIng){this.isAction=!1;var t=this.offset(e),n=this.slideValue;if(0!==n){if(this.isHorizontal){var i=Math.abs(t.y-this.startOffset.y);if(Math.abs(t.x-this.startOffset.x)<i)return void this.action()}else if(t.y===this.startValue)return;n<0&&Math.abs(n)>this.thresholdDistance?this.next():n>0&&n>this.thresholdDistance?this.prev():this.action()}}},swipeOut:function(e){this.$el===e.target&&this.isAction&&this.onSwipeEnd(e)},onLoopCopyElement:function(){if(this.loop){var e=this.$el.querySelectorAll(".tl-slide-copy-item");if(e&&e.length)for(var t=0;t<e.length;t++)this.slideWraper.removeChild(e[t]);var n=this.slideWraper.querySelectorAll(".tl-slide-item:not(.tl-slide-copy-item)"),i=n[0].cloneNode(!0),r=n[n.length-1].cloneNode(!0);i.classList.add("tl-slide-copy-item"),r.classList.add("tl-slide-copy-item"),this.slideWraper.insertAdjacentElement("afterbegin",r),this.slideWraper.insertAdjacentElement("beforeend",i)}},onTrasnitionEnd:function(){this.loop&&(this.currentNow===this.childLength-1?(this.currentNow=1,this.action(!1)):0===this.currentNow&&(this.currentNow=this.childLength-2,this.action(!1)))},next:function(){if(this.currentNow++,this.loop&&this.currentNow>=this.childLength&&(this.currentNow=this.childLength-1),!this.loop&&this.currentNow>=this.childLength)return this.currentNow=this.childLength-1,void this.action();this.currentNow%=this.childLength,this.action()},prev:function(){this.currentNow--,this.currentNow<0&&(this.currentNow=0),this.action()},action:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=0;t=this.isHorizontal?-this.currentNow*this.containerWidth:-this.currentNow*this.containerHeight,this.slide(t,e),this.moveValue=t},slide:function(e,t){var n=this,i={transform:this.isHorizontal?"translate3d(".concat(e,"px, 0px, 0px)"):"translate3d(0px, ".concat(e,"px, 0px)")};t?(i.transition="300ms",this.isAnimateIng=!0,setTimeout(function(){n.isAnimateIng=!1,n.$emit("slide",n.currentNow)},300)):this.$emit("slide",this.currentNow),this.style=this.setTransform(i)},slideTo:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.currentNow=e,this.action(t)}},destroyed:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}};t.default=s},function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(13)(i,r);i.locals&&(e.exports=i.locals),e.hot.accept(7,function(){var t=n(7);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,i=0;for(n in e){if(!t||e[n]!==t[n])return!1;i++}for(n in t)i--;return 0===i}(i.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},function(e,t,n){"use strict";n.r(t);var i=n(4),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t.default=r.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={mounted:function(){this.$parent.onSlideItemMounted&&this.$parent.onSlideItemMounted(this.$el)}}},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=n(13)(i,r);i.locals&&(e.exports=i.locals),e.hot.accept(8,function(){var t=n(8);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,i=0;for(n in e){if(!t||e[n]!==t[n])return!1;i++}for(n in t)i--;return 0===i}(i.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},function(e,t,n){"use strict";function i(e,t,n,i,r,o,s,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",function(){return i})},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.tl-slide-container {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n}\n.tl-slide-container .tl-slide-touch {\n    width: 100%;\n    height: 100%;\n}\n.tl-slide-container .tl-slide-wapper {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n}\n.tl-slide-container .tl-slide-wapper.vertical {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n",""])},function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.tl-slide-container .tl-slide-wapper .tl-slide-item{\n    width: 100%;\n    height: 100%;\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n}\n",""])},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slide",staticClass:"tl-slide-container",on:{mouseleave:e.swipeOut}},[n("div",{ref:"touch",staticClass:"tl-slide-touch",style:e.style,on:{touchstart:e.onSwipeStart,touchmove:e.onSwipeMove,touchend:e.onSwipeEnd,mousedown:e.onSwipeStart,mousemove:e.onSwipeMove,mouseup:e.onSwipeEnd,"webkit-transition-end":e.onTrasnitionEnd,transitionend:e.onTrasnitionEnd}},[n("div",{ref:"slideWraper",staticClass:"tl-slide-wapper",class:e.direction},[e._t("default")],2)])])},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},function(e,t,n){"use strict";var i=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"tl-slide-item"},[this._t("default")],2)},r=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r})},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),c=null,l=0,u=[],d=n(18);function f(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(b(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(b(i.parts[s],t));o[i.id]={id:i.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function p(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return y(t,e.attrs),p(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=l++;n=c||(c=m(t)),i=x.bind(null,n,s,!1),r=x.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),p(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=d(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){v(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return f(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}e&&f(h(e,t),t);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var w,g=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t,n){"use strict";var i=n(11);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(15)),o=i(n(19));var s={install:function e(t){e.installed||(e.installed=!0,t.component("tlSlide",r.default),t.component("tlSlideItem",o.default))},SlideComponent:r.default};void 0!==window&&window.Vue&&window.Vue.use(s);var a=s;t.default=a},function(e,t,n){"use strict";n.r(t);var i=n(9),r=n(0);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(17);var s=n(6),a=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={methods:{setTransform:function(e){var t={};return Object.keys(e).forEach(function(n){t[n]=e[n],["webkit","ms","moz"].reduce(function(i,r){return t["".concat(r).concat(n.charAt(0).toUpperCase()).concat(n.slice(1))]=e[n],t},t)}),t},isTouch:function(e){return["touchstart","touchmove","touchend"].includes(e.type)},offset:function(e){if(this.isTouch(e)&&void 0===e.clientX&&void 0===e.clientY){var t=e.touches[0]||e.changedTouches[0];return{x:t?t.clientX:0,y:t?t.clientY:0}}return{x:e.clientX,y:e.clientY}}}};t.default=i},function(e,t,n){"use strict";var i=n(2);n.n(i).a},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);var i=n(10),r=n(3);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n(20);var s=n(6),a=Object(s.a)(r.default,i.a,i.b,!1,null,null,null);t.default=a.exports},function(e,t,n){"use strict";var i=n(5);n.n(i).a}])});