(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[34],{1088:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var a,r=(a=n(1089))&&a.__esModule?a:{default:a}},1089:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var c=a?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(n,i,c):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(0));function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=c(this,l(t).call(this))).state={maxIsVisible:0},e}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=a.default.Children.count(this.props.children),n=0;this.interval=setInterval((function(){++n>t&&clearInterval(e.interval),e.setState({maxIsVisible:n})}),this.delay)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.transitionDuration;return a.default.createElement("div",{className:this.props.className},a.default.Children.map(this.props.children,(function(n,r){return a.default.createElement("div",{className:e.props.childClassName,style:{transition:"opacity ".concat(t,"ms, top ").concat(t,"ms"),position:"relative",top:e.state.maxIsVisible>r?0:20,opacity:e.state.maxIsVisible>r?1:0}},n)})))}},{key:"delay",get:function(){return this.props.delay||50}},{key:"transitionDuration",get:function(){return this.props.transitionDuration||400}}])&&i(n.prototype,r),o&&i(n,o),t}(a.Component);t.default=s},1135:function(e,t,n){"use strict";n(91);var a=n(34),r=(n(98),n(23)),o=n(3),i=n(0),c=n.n(i),l=n(10),u=n(43),s=n(100),p=n(5),f=n(29),m=n(573),d=n.n(m),y=n(1088),h=n.n(y),b=n(45),g=n(206),v=n(13);function E(){var e=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0 auto;\n\twidth: 30px;\n\theight: 30px;\n\tborder-radius: 12px;\n\tbackground-color: ",";\n\tcursor: pointer;\n"]);return E=function(){return e},e}var k=l.b.div(E(),(function(e){return e.bg}));t.a=Object(p.withI18n)()((function(e){var t=e.userData,n=void 0===t?{}:t,o=e.isNotLoggedin,i=e.i18n,l="".concat(g.a,"/").concat(f.d,"/").concat(n.userCode,"-").concat(n.firstName,"-").concat(n.lastName),p=o?g.a+"/".concat(f.d,"/register"):l,m=i._({id:"Hey, I've just created an account in Cudy Marketplace. Cudy Marketplace is a marketplace for you to find best tutors around Indonesia, Singapore, Malaysia, Philippines, India, Sri Lanka, to teach you anything"}),y=o?m:i._({id:"Hey, check out {0} {1}'s profile on Cudy Marketplace. Cudy Marketplace is a marketplace for you to find best tutors around Indonesia, Singapore, Malaysia, Philippines, India, Sri Lanka, to teach you anything",values:{0:n.firstName,1:n.lastName}}),E=b.a.socialColor,w=E.FACEBOOK,x=E.TWITTER,O=E.LINKEDIN,C=E.WHATSAPP,N=E.TELEGRAM;return c.a.createElement(h.a,null,c.a.createElement(a.a,{gutter:16,type:"flex",justify:"center"},c.a.createElement(d.a,null,c.a.createElement("title",null,"Cudy Marketplace - Find Asia's Leading Tutors Online"),c.a.createElement("meta",{name:"description",content:n.firstName?n.firstName+" "+n.lastName:"No name"})),c.a.createElement(r.a,{lg:4,style:{textAlign:"center"}},c.a.createElement(u.x,{title:"Facebook"},c.a.createElement(k,{bg:w,onClick:function(){return function(e,t,n){v.k||v.t?Object(v.s)({title:"Cudy Marketplace",url:e,text:n.firstName+" "+n.lastName}):window.open("https://www.facebook.com/sharer/sharer.php?u="+e+"&quote=".concat(t),"facebook-popup",g.e)}(p,y,n)}},c.a.createElement(s.a,{type:"icon-facebook-fill",color:"#fff"})))),c.a.createElement(r.a,{lg:4,style:{textAlign:"center"}},c.a.createElement(u.x,{title:"Twitter"},c.a.createElement(k,{bg:x,onClick:function(){return function(e,t,n){v.k||v.t?Object(v.s)({title:"Cudy Marketplace",url:e,text:n.firstName+" "+n.lastName}):window.open("https://twitter.com/share?url="+e+"&text=".concat(t),"twitter-popup",g.e)}(p,y,n)}},c.a.createElement(s.a,{type:"icon-twitter-fill",color:"#fff"})))),c.a.createElement(r.a,{lg:4,style:{textAlign:"center"}},c.a.createElement(u.x,{title:"LinkedIn"},c.a.createElement(k,{bg:O,onClick:function(){return function(e,t,n){v.k||v.t?Object(v.s)({title:"Cudy Marketplace",url:e,text:n.firstName+" "+n.lastName}):window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(e),"&text=").concat(t,"&source=").concat(e),"linkedin-popup",g.e)}(p,y,n)}},c.a.createElement(s.a,{type:"icon-linkedin-fill",color:"#fff"})))),c.a.createElement(r.a,{lg:4,style:{textAlign:"center"}},c.a.createElement(u.x,{title:"Whatsapp"},c.a.createElement(k,{bg:C,onClick:function(){return function(e,t,n){v.k||v.t?Object(v.s)({title:"Cudy Marketplace",url:e,text:n.firstName+" "+n.lastName}):window.open("whatsapp://send?text=".concat(t," ").concat(e),"whatsapp-popup",g.e)}(p,y,n)}},c.a.createElement(s.a,{type:"icon-whatsapp-line",color:"#fff"})))),c.a.createElement(r.a,{lg:4,style:{textAlign:"center"}},c.a.createElement(u.x,{title:"Telegram"},c.a.createElement(k,{bg:N,onClick:function(){return function(e,t,n){v.k||v.t?Object(v.s)({title:"Cudy Marketplace",url:e,text:n.firstName+" "+n.lastName}):window.open("https://telegram.me/share/url?url=".concat(encodeURIComponent(e),"&text=").concat(t),"telegram-popup",g.e)}(p,y,n)}},c.a.createElement(s.a,{type:"icon-telegram-fill",color:"#fff"}))))))}))},1322:function(e,t,n){"use strict";n.r(t);n(282);var a=n(99),r=(n(91),n(34)),o=(n(98),n(23)),i=(n(124),n(33)),c=n(0),l=n.n(c),u=n(43),s=n(177),p=n(1135),f=n(5),m=n(29),d=n(206);t.default=Object(f.withI18n)()((function(e){var t=e.userData,n=e.onModal,c=e.i18n,y=n.shareModal,h=n.setShareModal,b="".concat(d.a,"/").concat(m.d,"/").concat(t.userCode,"-").concat(t.pvid,"-").concat(t.firstName,"-").concat(t.initialName||"");return l.a.createElement(u.q,{title:l.a.createElement(f.Trans,{id:"Share {0}'s profile",values:{0:t.firstName}}),visible:y,onCancel:function(){return h(!1)},footer:!1},l.a.createElement(u.u,{paddingHorizontal:0},l.a.createElement(a.a,{layout:"vertical"},l.a.createElement(s.a,{independent:!0,name:"share_profile",placeholder:c._({id:"Share profile..."}),label:l.a.createElement(i.a.Text,{copyable:{text:b}},l.a.createElement(f.Trans,{id:"Copy the profile's URL"})),value:b}),l.a.createElement(r.a,{gutter:32,type:"flex",align:"middle"},l.a.createElement(o.a,{lg:6},l.a.createElement(f.Trans,{id:"Share to"})),l.a.createElement(o.a,{lg:18},l.a.createElement(p.a,{userData:t}))))))}))}}]);
//# sourceMappingURL=34.1e4697ec.chunk.js.map