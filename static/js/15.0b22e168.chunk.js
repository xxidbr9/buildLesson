(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[15],{1091:function(e,t,n){"use strict";var r=n(0),a=n(2),o=n.n(a),c=n(21),i=n(16),l=n(4),u=n(47);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},E=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,a,c,i=(t=l,function(){var e,n=g(t);if(y()){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d(this,e)});function l(){var e;return m(this,l),(e=i.apply(this,arguments)).handleClick=function(){var t=e.props,n=t.checked,r=t.onChange;r&&r(!n)},e.renderCheckableTag=function(t){var n,a=t.getPrefixCls,c=e.props,i=c.prefixCls,l=c.className,u=c.checked,s=v(c,["prefixCls","className","checked"]),m=a("tag",i),b=o()(m,(p(n={},"".concat(m,"-checkable"),!0),p(n,"".concat(m,"-checkable-checked"),u),n),l);return delete s.onChange,r.createElement("span",f({},s,{className:b,onClick:e.handleClick}))},e}return n=l,(a=[{key:"render",value:function(){return r.createElement(u.a,null,this.renderCheckableTag)}}])&&b(n.prototype,a),c&&b(n,c),l}(r.Component),O=n(375),j=n(24),k=n(371);function w(e){return(w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},D=new RegExp("^(".concat(O.a.join("|"),")(-inverse)?$")),I=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(f,e);var t,n,a,i,s=(t=f,function(){var e,n=_(t);if(P()){var r=_(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return T(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=s.call(this,e)).state={visible:!0},t.handleIconClick=function(e){e.stopPropagation(),t.setVisible(!1,e)},t.renderTag=function(e){var n=t.props,a=n.children,o=R(n,["children"]),i="onClick"in o||a&&"a"===a.type,l=Object(c.default)(o,["onClose","afterClose","color","visible","closable","prefixCls"]);return i?r.createElement(k.a,null,r.createElement("span",x({},l,{className:t.getTagClassName(e),style:t.getTagStyle()}),a,t.renderCloseIcon())):r.createElement("span",x({},l,{className:t.getTagClassName(e),style:t.getTagStyle()}),a,t.renderCloseIcon())},Object(j.a)(!("afterClose"in e),"Tag","'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."),t}return n=f,i=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:null}}],(a=[{key:"getTagStyle",value:function(){var e=this.props,t=e.color,n=e.style,r=this.isPresetColor();return x({backgroundColor:t&&!r?t:void 0},n)}},{key:"getTagClassName",value:function(e){var t,n=e.getPrefixCls,r=this.props,a=r.prefixCls,c=r.className,i=r.color,l=this.state.visible,u=this.isPresetColor(),s=n("tag",a);return o()(s,(C(t={},"".concat(s,"-").concat(i),u),C(t,"".concat(s,"-has-color"),i&&!u),C(t,"".concat(s,"-hidden"),!l),t),c)}},{key:"setVisible",value:function(e,t){var n=this.props,r=n.onClose,a=n.afterClose;r&&r(t),a&&!r&&a(),t.defaultPrevented||"visible"in this.props||this.setState({visible:e})}},{key:"isPresetColor",value:function(){var e=this.props.color;return!!e&&D.test(e)}},{key:"renderCloseIcon",value:function(){return this.props.closable?r.createElement(l.a,{type:"close",onClick:this.handleIconClick}):null}},{key:"render",value:function(){return r.createElement(u.a,null,this.renderTag)}}])&&S(n.prototype,a),i&&S(n,i),f}(r.Component);I.CheckableTag=E,I.defaultProps={closable:!1},Object(i.polyfill)(I);t.a=I},1094:function(e,t,n){"use strict";n(31),n(1095)},1095:function(e,t,n){},1108:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return s}));var r=n(29),a=n(36),o=function(){return{type:a.y}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=void 0===t?"":t;return function(e){return e(o()),r.c.getEntries({content_type:"product","fields.category":n}).then((function(t){var n=t.items;e({type:a.e,payload:n.map((function(e){return e.fields}))})})).catch((function(t){e({type:a.f}),console.error(t)}))}},i=function(){return function(e){return e(o()),r.c.getEntries({content_type:"eCommerceSites"}).then((function(t){var n=t.items;return e({type:a.g,payload:n.map((function(e){return e.fields}))})})).catch((function(t){e({type:a.h}),console.error(t)}))}},l=function(){return function(e){return e(o()),r.c.getEntries({content_type:"product",select:"fields.category"}).then((function(t){var n=t.items;return e({type:a.r,payload:n.map((function(e){return e.fields}))})})).catch((function(t){e({type:a.s}),console.error(t)}))}},u=function(){return function(e){return e(o()),r.c.getEntries({content_type:"consultants"}).then((function(t){var n=t.items;e({type:a.c,payload:n.map((function(e){return e.fields}))})})).catch((function(t){e({type:a.d}),console.error(t)}))}},s=function(){return function(e){return e(o()),r.c.getEntries({content_type:"lifelongSlider"}).then((function(t){var n=t.items;e({type:a.i,payload:n.map((function(e){return e.fields}))})})).catch((function(t){e({type:a.j}),console.error(t)}))}}},1179:function(e,t,n){e.exports=n.p+"static/media/browse_items.3ffe617f.svg"},1180:function(e,t,n){e.exports=n.p+"static/media/dancing.642ced52.svg"},1181:function(e,t,n){e.exports=n.p+"static/media/dog-jump.7e0be7fc.svg"},1182:function(e,t,n){e.exports=n.p+"static/media/make_purchase.9082c49f.svg"},1183:function(e,t,n){e.exports=n.p+"static/media/reading-side.0389edd9.svg"},1184:function(e,t,n){e.exports=n.p+"static/media/selfie.bcd1eb7f.svg"},1379:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));n(374);var r=n(182),a=(n(156),n(75)),o=(n(205),n(126)),c=(n(1094),n(1091)),i=(n(91),n(34)),l=(n(210),n(53)),u=n(155),s=(n(98),n(23)),f=n(26),p=n(28),m=(n(365),n(115)),b=n(3),d=(n(124),n(33)),y=n(5),g=n(0),h=n.n(g),v=n(43),E=n(369),O=n(1108),j=n(73),k=n(29),w=n(13),C=n(10),x=n(45),S=(n(578),n(343)),T=n(1179),P=n.n(T),_=n(1180),N=n.n(_),R=n(1181),D=n.n(R),I=(n(1182),n(1183)),z=n.n(I),B=n(1184),L=n.n(B);function U(){var e=Object(b.a)(["\n\t.ant-modal-body {\n\t\tpadding: 0;\n\t\t> .section {\n\t\t\tpadding: 2em 1em;\n\t\t}\n\n\t\t.ant-steps-vertical {\n\t\t\t.ant-steps-item {\n\t\t\t\tmin-height: 100px;\n\t\t\t}\n\t\t\t.ant-steps-item-title {\n\t\t\t\tline-height: 20px;\n\t\t\t}\n\t\t}\n\t}\n"]);return U=function(){return e},e}var A=[{title:h.a.createElement(y.Trans,{id:"Sign in"}),content:h.a.createElement(y.Trans,{id:"Sign in to your Cudy account"}),image:z.a,bg:"mediumpurple",isDark:!0},{title:h.a.createElement(y.Trans,{id:"Browse items"}),content:h.a.createElement(y.Trans,{id:"Browse by featured items or e-commerce sites."}),image:P.a,bg:"aliceblue",isDark:!1},{title:"Select an item",content:h.a.createElement(y.Trans,{id:"Click on the item or e-commerce site you wish to make a purchase"}),image:D.a,bg:"floralwhite",isDark:!1},{title:h.a.createElement(y.Trans,{id:"E-commerce site"}),content:h.a.createElement(y.Trans,{id:"You will be redirected to the e-commerce page with a tracked URL"}),image:z.a,bg:"aliceblue",isDark:!1},{title:h.a.createElement(y.Trans,{id:"Buy"}),content:h.a.createElement(y.Trans,{id:"Make your purchase using your e-commerce site personal account"}),image:N.a,bg:"honeydew",isDark:!1},{title:h.a.createElement(y.Trans,{id:"Done!"}),content:h.a.createElement(y.Trans,{id:"Your purchase will be tracked and rebate will be credited to your Cudy account in a few weeks"}),image:L.a,bg:"lavender",isDark:!1}],F=Object(C.b)(v.q)(U());function J(e){var t=Object(g.useState)(0),n=Object(p.a)(t,2),r=n[0],a=n[1],o=r===A.length-1;return h.a.createElement(F,Object.assign({},e,{width:760,footer:!1}),h.a.createElement(i.a,{type:"flex"},h.a.createElement(s.a,{lg:6},h.a.createElement(v.u,{className:"section pr1em"},h.a.createElement(S.a,{current:r,direction:"vertical",className:"mb4em"},A.map((function(e){return h.a.createElement(S.a.Step,{key:e.title,title:e.title})}))),h.a.createElement(i.a,{type:"flex"},h.a.createElement(s.a,null,h.a.createElement(v.e,{icon:"left",shape:"circle",onClick:function(){return a((function(e){return e-1}))},disabled:0===r})),h.a.createElement(s.a,{className:"ta-right"},h.a.createElement(v.e,{icon:"right",shape:"circle",onClick:function(){return a((function(e){return e+1}))},disabled:o}))))),h.a.createElement(s.a,{lg:18,className:"ta-center"},h.a.createElement(v.u,{bg:A[r].bg,className:"section height-100 ta-center"},h.a.createElement(v.u,{centered:!0,className:"mb4em",textAlign:"center"},h.a.createElement("img",{src:A[r].image,width:300})),h.a.createElement(d.a.Title,{level:3,className:A[r].isDark&&"white"},A[r].title),h.a.createElement(d.a.Paragraph,{className:"mb2em"},A[r].content),o&&h.a.createElement(v.d,{type:"primary",block:!0,onClick:e.onCancel},"Okay, got it")))))}function V(){var e=Object(b.a)(["\n\tposition: relative;\n\theight: 100%;\n\t&.list_item--affiliates {\n\t\theight: 100px;\n\t\t.ant-tag {\n\t\t\ttop: -8px;\n\t\t\tright: 0;\n\t\t\tleft: unset;\n\t\t\theight: 30px;\n\t\t\twidth: 30px;\n\t\t\tborder-radius: 100px;\n\t\t\tline-height: 2.4;\n\t\t\tpadding-left: 2px;\n\t\t\tfont-weight: bold;\n\t\t}\n\t\t.ant-card {\n\t\t\tborder-radius: 10px;\n\t\t\tmargin-bottom: 0.5em;\n\t\t\t.ant-card-cover {\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t\timg {\n\t\t\t\tborder-radius: 10px;\n\t\t\t\theight: 100%;\n\t\t\t\tobject-fit: contain;\n\t\t\t}\n\t\t}\n\t}\n\t.ant-tag {\n\t\tposition: absolute;\n\t\ttop: 5px;\n\t\tleft: 5px;\n\t\tz-index: 5;\n\t}\n\t.ant-card {\n\t\theight: 100%;\n\t\tmargin-bottom: 1em;\n\t\t.ant-card-body {\n\t\t\tpadding: 14px;\n\t\t}\n\t}\n\tarticle.ant-typography {\n\t\t.title {\n\t\t\tline-height: 1.1;\n\t\t\tmargin-bottom: 0;\n\t\t\tfont-size: 1em;\n\t\t}\n\t}\n"]);return V=function(){return e},e}function Y(){var e=Object(b.a)(["\n\t&& {\n\t\tmargin-bottom: 3em;\n\t}\n\t&.affiliates {\n\t\t.ant-row {\n\t\t\t.ant-col {\n\t\t\t\tmargin-bottom: 2.5em;\n\t\t\t}\n\t\t}\n\t}\n\t.ant-list-header {\n\t\tmargin-bottom: 2em;\n\t}\n\t.ant-row {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\t> .ant-col {\n\t\t\tmargin-bottom: 1em;\n\t\t}\n\t}\n"]);return Y=function(){return e},e}var q=h.a.lazy((function(){return n.e(67).then(n.bind(null,1370))})),M=d.a.Paragraph,W=d.a.Text,$=Object(C.b)(m.a)(Y()),G=Object(C.b)(m.a.Item)(V()),H={category:""};function K(){var e=Object(E.c)(),t=Object(E.d)((function(e){return e.contentful.products})),n=Object(E.d)((function(e){return e.contentful.loading})),m=Object(E.d)((function(e){return e.contentful.categoryOptions})),b=Object(E.d)((function(e){return e.contentful.ecommerceSites})),C=Object(g.useState)({}),S=Object(p.a)(C,2),T=S[0],P=S[1],_=Object(g.useState)(H),N=Object(p.a)(_,2),R=N[0],D=N[1],I=Object(g.useState)(!1),z=Object(p.a)(I,2),B=z[0],L=z[1],U=j.b[k.d];return Object(g.useEffect)((function(){e(Object(O.b)(R)),e(Object(O.e)()),e(Object(O.c)()),window.scrollTo(0,0)}),[e,R]),h.a.createElement(v.n,null,h.a.createElement(g.Suspense,null,h.a.createElement(q,{visible:Object.keys(T).length,data:T,onCancel:function(){return P({})}}),h.a.createElement(J,{visible:B,onCancel:function(){return L(!1)}}),h.a.createElement(v.u,{width:w.k?"100%":"85%",centered:!0},h.a.createElement(i.a,{type:"flex",justify:"space-between",className:w.k&&"mb2em"},h.a.createElement(s.a,{lg:12,xs:24},h.a.createElement(v.l,{bold:!0,content:"Study shop",subheader:h.a.createElement(d.a,null,h.a.createElement(y.Trans,{id:"Where you can shop for study essentials, through our partners, and earn rebates on Cudy."})," ",h.a.createElement(W,{type:"secondary",className:"cursor-pointer",underline:!0,onClick:function(){return L(!0)}},h.a.createElement(y.Trans,{id:"Learn more"}))),marginBottom:w.k?"1em":"3em"})),h.a.createElement(s.a,{lg:12,xs:24,className:"ta-right"},h.a.createElement(l.a,{style:{width:w.k?"100%":200},placeholder:"Filter category",onChange:function(e){return D((function(t){return Object(f.a)({},t,{category:e})}))}},[{value:"",label:"All"}].concat(Object(u.a)(m)).map((function(e){return h.a.createElement(l.a.Option,{key:e.value,value:e.value},e.label)}))))),h.a.createElement($,{itemLayout:"horizontal",grid:{gutter:16,lg:6,xs:2},dataSource:t,loading:n,locale:{emptyText:h.a.createElement(v.j,{description:h.a.createElement(y.Trans,{id:"No products found"})})},renderItem:function(e){var t=e.siteListings||{},n=e.images[0].file||{};return h.a.createElement(G,{onClick:function(){return t=e,void P(Object(f.a)({},t,{symbol:U.symbol}));var t}},h.a.createElement(c.a,{color:"orange"},e.category),h.a.createElement(r.a,{hoverable:!0,cover:h.a.createElement("img",{src:n.url,alt:e.title})},h.a.createElement(v.l,{bold:!0,level:4,marginBottom:"0",content:h.a.createElement(M,{ellipsis:{rows:2}},e.title),subheader:h.a.createElement(d.a,null,h.a.createElement(M,null,U.symbol," ",Object(w.n)(e.prices)),h.a.createElement(a.a,{title:t.name},h.a.createElement(o.a,{size:w.k?"large":"small",src:t.logoUrl,alt:t.name})))})))}}),h.a.createElement($,{className:"affiliates",header:h.a.createElement(y.Trans,{id:"Our partners"}),dataSource:b,grid:{gutter:[16,16],lg:6,xs:4,xxl:8},renderItem:function(e){return h.a.createElement(G,{className:"list_item--affiliates"},h.a.createElement(c.a,{color:x.a.greenColor.primary},e.rebate.percent),h.a.createElement("a",{href:e.siteUrl,target:"_blank",rel:"noopener noreferrer"},h.a.createElement(r.a,{hoverable:!0,cover:h.a.createElement("img",{src:e.logoUrl,alt:e.name})}),h.a.createElement(d.a,{className:"ta-center"},h.a.createElement(d.a.Text,null,e.name),h.a.createElement(d.a.Paragraph,{type:"secondary"},e.country))))}}))))}}}]);
//# sourceMappingURL=15.0b22e168.chunk.js.map