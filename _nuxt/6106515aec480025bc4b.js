(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{178:function(e,t,i){"use strict";(function(e){var r=i(181),n=i.n(r),s={props:{options:{type:Object,default:function(){return{}}},autoPlay:{type:Boolean,default:!1},playDuration:{type:Number,default:6e3},current:{type:Number,default:0},ready:{type:Boolean,default:!0}},data:function(){return{playing:this.autoPlay,time:this.playDuration}},mounted:function(){this.ready&&this.init()},beforeDestroy:function(){this.playing&&clearInterval(this.$options.play_timer),this.destroy()},methods:{init:function(){var e=this;this.$nextTick(function(){void 0===e.options&&(e.options={}),e.options.selector=e.$el,e.options.onInit=function(){e.$emit("init")},e.options.onChange=function(){e.$emit("update:current",e.siema.currentSlide),e.playing&&(clearTimeout(e.$options.play_timer),e.$options.play_timer=setTimeout(function(){e.siema.next()},e.time)),e.$emit("change")},e.playing&&e.play(e.time),e.siema=new n.a(e.options)})},prev:function(e,t){this.siema.prev(e,t)},next:function(e,t){this.siema.next(e,t)},goTo:function(e,t){this.siema.goTo(e,t)},remove:function(e,t){this.siema.remove(e,t)},insert:function(e,t,i){this.siema.insert(e,t,i)},prepend:function(e,t){this.siema.prepend(e,t)},append:function(e,t){this.siema.append(e,t)},destroy:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];this.siema.destroy(e,t)},play:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.time=t,this.playing=!0,this.$options.play_timer=setTimeout(function(){e.siema.next()},t),this.$emit("update:playing",!0)},stop:function(){this.playing=!1,clearTimeout(this.$options.play_timer),this.$emit("update:playing",!1)}}},o=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)};o._withStripped=!0;var a,l,c,u,h,d=(a={render:o,staticRenderFns:[]},l=void 0===s?{}:s,c=void 0,u=!1,"undefined"!=typeof __vue_create_injector_ssr__&&__vue_create_injector_ssr__,(h=("function"==typeof l?l.options:l)||{}).__file="/srv/core/vue2-siema/src/components/siema.vue",h.render||(h.render=a.render,h.staticRenderFns=a.staticRenderFns,h._compiled=!0,u&&(h.functional=!0)),h._scopeId=c,h);var p={version:"0.2.2",install:function(e){e.component("siema",d)}},_=null;"undefined"!=typeof window?_=window.Vue:void 0!==e&&(_=e.Vue),_&&_.use(p),t.a=p}).call(this,i(49))},181:function(e,t,i){"undefined"!=typeof self&&self,e.exports=function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s=function(){function e(t){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return n(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var o=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(o)}if(this.config.loop)for(var a=0;a<this.perPage;a++){var l=this.buildSliderFrameItem(this.innerElements[a].cloneNode(!0));i.appendChild(l)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===r(this.config.perPage))for(var e in this.perPage=1,this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,o=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),a=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(o+a)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e;else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop)if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,o=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),a=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(o+a)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e;else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=s,e.exports=t.default}])},228:function(e,t,i){var r=i(339);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(28).default)("6b9f116e",r,!0,{sourceMap:!1})},229:function(e,t,i){var r=i(341);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(28).default)("11afb38e",r,!0,{sourceMap:!1})},230:function(e,t,i){var r=i(343);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(28).default)("77d4337b",r,!0,{sourceMap:!1})},335:function(e,t,i){"use strict";var r=i(2),n=i(15),s=i(17),o=i(103),a=i(50),l=i(11),c=i(51).f,u=i(69).f,h=i(10).f,d=i(336).trim,p=r.Number,_=p,m=p.prototype,f="Number"==s(i(68)(m)),g="trim"in String.prototype,v=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){var i,r,n,s=(t=g?t.trim():d(t,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=t.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if((o=l.charCodeAt(c))<48||o>n)return NaN;return parseInt(l,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof p&&(f?l(function(){m.valueOf.call(i)}):"Number"!=s(i))?o(new _(v(t)),i,p):v(t)};for(var b,y=i(6)?c(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)n(_,b=y[x])&&!n(p,b)&&h(p,b,u(_,b));p.prototype=m,m.constructor=p,i(12)(r,"Number",p)}},336:function(e,t,i){var r=i(5),n=i(16),s=i(11),o=i(337),a="["+o+"]",l=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),u=function(e,t,i){var n={},a=s(function(){return!!o[e]()||"​"!="​"[e]()}),l=n[e]=a?t(h):o[e];i&&(n[i]=l),r(r.P+r.F*a,"String",n)},h=u.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},337:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},338:function(e,t,i){"use strict";var r=i(228);i.n(r).a},339:function(e,t,i){(e.exports=i(27)(!1)).push([e.i,"\n.bearle__project>div:first-child{min-height:450px;z-index:10\n}\n.bearle__project__item{margin-right:30px;display:inline-block;text-decoration:none\n}\n.bearle__project__item:hover{text-decoration:underline\n}\n.bearle__project__item .bearle__project__item__sub-title{opacity:.5;font-family:Futura-Medium;font-size:14px;color:#000;letter-spacing:5px\n}\n.bearle__project__item .bearle__project__item__title{font-family:FuturaBookC;color:#2a2c31;font-size:20px;letter-spacing:4.17px;line-height:30px\n}\n.bearle__project__item .bearle__project__item__img{width:275px;margin:15px 0\n}\n.bearle__project__nav,.bearle__project__subtitle{display:none\n}\n.bearle__project__link,.bearle__project__subtitle{position:relative;font-family:FuturaBookC;font-size:18px;letter-spacing:3.75px;color:#2a2c31;text-align:center\n}\n.bearle__project__link .material-icons,.bearle__project__subtitle .material-icons{position:absolute;top:-2px;transition:all .5s\n}\n.bearle__project__link.active .material-icons,.bearle__project__subtitle.active .material-icons{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n@media only screen and (max-width:330px){\n.bearle__project>div:first-child{min-height:390px;z-index:10\n}\n.bearle__project .bearle__project__item .bearle__project__item__img{width:240px\n}\n}\n@media only screen and (min-width:400px) and (max-width:600px){\n.bearle__project .bearle__project__item .bearle__project__item__img{width:315px\n}\n}\n@media only screen and (min-width:601px){\n.bearle__project{width:90%\n}\n}\n@media only screen and (min-width:961px){\n.bearle__project{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\n.bearle__project>div:first-child{margin-top:0;min-height:570px\n}\n.bearle__project>div:first-child>div>div:nth-child(2n){margin-top:68px\n}\n.bearle__project__item{margin-right:50px\n}\n.bearle__project__item .bearle__project__item__title{font-size:36px;letter-spacing:7.5px;line-height:50px\n}\n.bearle__project__item .bearle__project__item__img{width:300px\n}\n.bearle__project__nav{display:block;float:right;margin-right:100px;margin-top:-10px!important;z-index:20\n}\n.bearle__project__nav .material-icons{font-size:48px;cursor:pointer;color:#26282d\n}\n.showed_pro .bearle__project__nav{margin-right:360px\n}\n.bearle__project__link{display:none\n}\n.bearle__project__subtitle{display:block;font-size:24px;letter-spacing:5px;z-index:10;display:inline-block\n}\n.bearle__project__subtitle .material-icons{display:none\n}\n}",""])},340:function(e,t,i){"use strict";var r=i(229);i.n(r).a},341:function(e,t,i){(e.exports=i(27)(!1)).push([e.i,"\n.bearle__our-products{margin-top:30px;margin-left:19px\n}\n.bearle__our-products>div:first-child{min-height:390px\n}\n.bearle__our-products__item{margin-right:30px;display:inline-block;text-decoration:none\n}\n.bearle__our-products__item .bearle__our-products__item__sub-title{opacity:.5;font-family:Futura-Medium;font-size:14px;color:#000;letter-spacing:5px\n}\n.bearle__our-products__item .bearle__our-products__item__title{font-family:FuturaBookC;color:#2a2c31;font-size:20px;letter-spacing:4.17px;line-height:30px\n}\n.bearle__our-products__item .bearle__our-products__item__img{width:275px;margin-bottom:15px\n}\n.bearle__our-products__link,.bearle__our-products__nav{display:none\n}\n@media only screen and (max-width:330px){\n.bearle__our-products .bearle__our-products__item .bearle__our-products__item__img{width:240px\n}\n}\n@media only screen and (min-width:400px) and (max-width:600px){\n.bearle__our-products .bearle__our-products__item .bearle__our-products__item__img{width:315px\n}\n}\n@media only screen and (min-width:601px){\n.bearle__our-products{width:90%\n}\n}\n@media only screen and (min-width:1264px){\n.bearle__our-products{margin-top:100px;width:85%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-left:9px\n}\n.bearle__our-products>div:first-child{min-height:570px;margin-top:0\n}\n.bearle__our-products>div:first-child>div>div{margin-top:40px\n}\n.bearle__our-products>div:first-child>div>div:nth-child(2n){margin-top:0\n}\n.bearle__our-products__item{margin-right:50px\n}\n.bearle__our-products__item .bearle__our-products__item__title{font-size:36px;letter-spacing:7.5px;line-height:50px\n}\n.bearle__our-products__item .bearle__our-products__item__img{width:382px;margin-bottom:25px\n}\n.bearle__our-products__nav{display:block;float:right;margin-right:50px;margin-top:-10px!important\n}\n.bearle__our-products__nav .material-icons{font-size:48px;cursor:pointer;color:#26282d\n}\n.showed_pro .bearle__our-products__nav{margin-right:310px\n}\n.bearle__our-products__link{display:inline-block;font-family:FuturaBookC;font-size:24px;color:#2a2c31;letter-spacing:5px\n}\n}",""])},342:function(e,t,i){"use strict";var r=i(230);i.n(r).a},343:function(e,t,i){(e.exports=i(27)(!1)).push([e.i,"\n.application--wrap>.container.fluid.bearle__project--wrapper{padding-right:0\n}\n.v-tabs{margin-top:-73px\n}\n.v-tabs__wrapper{overflow:visible;overflow-y:auto;contain:none\n}\n.v-window__container{margin-left:19px\n}\n.v-tabs__container{margin-left:95px;margin-bottom:51px\n}\n.v-tabs__item{margin-right:15px;padding:5px 15px;height:auto;border-radius:10px;font-family:Futura-Medium;font-size:14px;color:#000;letter-spacing:5px;text-transform:none\n}\n.v-tabs__item--active{background:#000;color:#fff\n}\n.v-tabs__slider.accent{display:none\n}\n@media only screen and (max-width:959px){\n.v-tabs__bar ::-webkit-scrollbar{width:0;background:transparent\n}\n}\n@media only screen and (min-width:960px){\n.container.fluid.relative.showed_pro{margin-left:461px\n}\n.v-tabs{margin-top:10px\n}\n.v-tabs__container{margin-left:0\n}\n.v-window__container{margin-left:9px\n}\n.v-tabs__item{margin-right:25px\n}\n}",""])},351:function(e,t,i){"use strict";i.r(t);i(335);var r=i(0),n=i(178);r.default.use(n.a);var s={props:{from:{type:Number,default:0},to:{type:Number,default:0}},data:function(){return{toTheEnd:this.to>0?this.to+1:this.$store.state.project.length,firstMouseX:0,activeProducts:!1,options:{draggable:!0,duration:500}}},computed:{shcherbackov:function(){return this.$store.state.drawer}},watch:{shcherbackov:function(e){this.$vuetify.breakpoint.mdAndUp&&(e?this.add():this.$refs.siema.remove(this.$store.state.project.slice(this.from,this.toTheEnd).length))}},mounted:function(){var e=this;setTimeout(function(){e.$refs.siema.destroy(!0);var t=3;e.$vuetify.breakpoint.xs?t=1.1:(e.$vuetify.breakpoint.sm||e.$vuetify.breakpoint.md)&&(t=2),e.$refs.siema.options.perPage=t,e.$refs.siema.init(),setTimeout(function(){e.setWrapperStyles(),e.$store.state.drawer&&e.add()},1)},1)},methods:{prev:function(){this.$refs.siema.prev()},next:function(){this.$refs.siema.next()},add:function(){var e=document.createElement("div");e.classList.add("slide"),this.$refs.siema.append(e)},ourProductsToggle:function(){this.activeProducts?this.$vuetify.goTo(0):this.$vuetify.goTo(".bearle__our-products"),this.activeProducts=!this.activeProducts},preventLinkMouseDown:function(e){this.firstMouseX=e.clientX},preventLinkClick:function(e,t){var i=t.clientX;0===this.firstMouseX-i&&this.$router.push({path:"/project/"+e})},setWrapperStyles:function(){this.$el.querySelector(".bearle__project > div").style.overflow="visible"}}},o=(i(338),i(9)),a=Object(o.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bearle__project"},[i("siema",{ref:"siema",attrs:{options:e.options}},[e._l(e.$store.state.project.slice(e.from,e.toTheEnd),function(t,r){return[i("nuxt-link",{key:r,staticClass:"bearle__project__item",attrs:{to:{path:"/project/"+t.id},event:""},nativeOn:{mousedown:function(t){t.preventDefault(),e.preventLinkMouseDown(t)},click:function(i){i.preventDefault(),e.preventLinkClick(t.id,i)}}},[i("div",{staticClass:"bearle__project__item__sub-title"},[e._v(e._s(t.subTitle))]),e._v(" "),t.img?i("img",{staticClass:"bearle__project__item__img",attrs:{src:t.img,alt:t.title}}):e._e(),e._v(" "),i("div",{staticClass:"bearle__project__item__title"},[e._v(e._s(t.title))])])]})],2),e._v(" "),i("div",{staticClass:"bearle__project__nav"},[i("i",{staticClass:"material-icons bearle__project__nav__prev",on:{click:e.prev}},[e._v("keyboard_arrow_left")]),e._v(" "),i("i",{staticClass:"material-icons bearle__project__nav__next",on:{click:e.next}},[e._v("keyboard_arrow_right")])]),e._v(" "),i("div",{staticClass:"bearle__project__link",class:{active:e.activeProducts},on:{click:e.ourProductsToggle}},[e._v("Our Products "),i("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])]),e._v(" "),i("div",{staticClass:"bearle__project__subtitle"},[e._v("Project")])],1)},[],!1,null,null,null);a.options.__file="ProjectCarousel.vue";var l=a.exports;r.default.use(n.a);var c={data:function(){return{options:{draggable:!0,duration:500}}},computed:{shcherbackov:function(){return this.$store.state.drawer}},watch:{shcherbackov:function(e){if(e){var t=document.createElement("div");this.$refs.ourProducts.append(t)}else this.$refs.ourProducts.remove(this.$store.state.ourProducts.length)}},mounted:function(){var e=this;setTimeout(function(){e.$refs.ourProducts.destroy(!0);var t=2.5;e.$vuetify.breakpoint.xs?t=1.1:(e.$vuetify.breakpoint.sm||e.$vuetify.breakpoint.md)&&(t=2),e.$refs.ourProducts.options.perPage=t,e.$refs.ourProducts.init(),setTimeout(function(){document.querySelector(".bearle__our-products > div").style.overflow="visible"},1)},1)},methods:{prev:function(){this.$refs.ourProducts.prev()},next:function(){this.$refs.ourProducts.next()}}},u=(i(340),Object(o.a)(c,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-scroll-y-transition",[i("div",{staticClass:"bearle__our-products"},[i("siema",{ref:"ourProducts",attrs:{options:e.options}},[e._l(e.$store.state.ourProducts,function(t,r){return[i("div",{key:r,staticClass:"bearle__our-products__item"},[t.img?i("img",{staticClass:"bearle__our-products__item__img",attrs:{src:t.img,alt:t.title}}):e._e(),e._v(" "),i("div",{staticClass:"bearle__our-products__item__title"},[e._v(e._s(t.title))])])]})],2),e._v(" "),i("div",{staticClass:"bearle__our-products__nav"},[i("i",{staticClass:"material-icons bearle__our-products__nav__prev",on:{click:e.prev}},[e._v("keyboard_arrow_left")]),e._v(" "),i("i",{staticClass:"material-icons bearle__our-products__nav__next",on:{click:e.next}},[e._v("keyboard_arrow_right")])]),e._v(" "),i("div",{staticClass:"bearle__our-products__link"},[e._v("Our Products")])],1)])},[],!1,null,null,null));u.options.__file="OurProducts.vue";var h={components:{ProjectCarousel:l,OurProducts:u.exports},data:function(){return{active:null}},mounted:function(){this.$vuetify.breakpoint.mdAndDown&&(this.$store.state.showProductsAndProject=!0)}},d=(i(342),Object(o.a)(h,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"bearle__project--wrapper",class:{showed_pro:e.$store.state.drawer},attrs:{fluid:"",relative:""}},[i("v-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._l(3,function(t){return i("v-tab",{key:t},[e._v("#Lorem")])}),e._v(" "),i("v-tab-item",{attrs:{lazy:"",transition:"fade-transition","reverse-transition":"fade-transition"}},[i("project-carousel")],1),e._v(" "),i("v-tab-item",{attrs:{lazy:"",transition:"fade-transition","reverse-transition":"fade-transition"}},[i("project-carousel",{attrs:{from:1}})],1),e._v(" "),i("v-tab-item",{attrs:{lazy:"",transition:"fade-transition","reverse-transition":"fade-transition"}},[i("project-carousel",{attrs:{from:2,to:6}})],1)],2),e._v(" "),e.$store.state.showProductsAndProject?i("our-products"):e._e()],1)},[],!1,null,null,null));d.options.__file="index.vue";t.default=d.exports}}]);