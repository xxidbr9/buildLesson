(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[20],{1077:function(e,t,n){"use strict";var a=n(179),r=n(1078),o=n(1079);a.a.Button=o.a,a.a.Group=r.a,t.a=a.a},1086:function(e,t,n){"use strict";n(282);var a=n(99),r=(n(569),n(1077)),o=n(19),c=n(3),l=n(0),i=n.n(l),u=n(1114),s=n(281),d=n(10);function p(){var e=Object(c.a)(["\n\t> label {\n\t\tdisplay: ",";\n\t}\n"]);return p=function(){return e},e}var m=Object(d.b)(u.a.Group)(p(),(function(e){return e.labelBlock&&"block"}));t.a=function(e){var t=e.options,n=e.name,c=e.label,l=e.independent,d=e.isButton,p=void 0===d||d,f=Object(o.a)(e,["options","name","label","independent","isButton"]);return l?i.a.createElement(a.a.Item,{name:n,label:c},i.a.createElement(r.a.Group,Object.assign({},f,{name:n,buttonStyle:"solid"}),t.map((function(e){return i.a.createElement(r.a.Button,{value:e.value,key:e.value},e.label)})))):i.a.createElement(s.a,{name:n,label:c},p?i.a.createElement(m,Object.assign({},f,{name:n,buttonStyle:"solid"}),t.map((function(e){return i.a.createElement(u.a.Button,{value:e.value,key:e.value},e.label)}))):i.a.createElement(m,Object.assign({},f,{options:t,name:n})))}},1087:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=(a=o)&&a.__esModule?a:{default:a},l=n(1);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.scriptLoaderId="id"+n.constructor.idCount++,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onError,n=e.onLoad,a=e.url;this.constructor.loadedScripts[a]?n():this.constructor.erroredScripts[a]?t():this.constructor.scriptObservers[a]?this.constructor.scriptObservers[a][this.scriptLoaderId]=this.props:(this.constructor.scriptObservers[a]=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},this.scriptLoaderId,this.props),this.createScript())}},{key:"componentWillUnmount",value:function(){var e=this.props.url,t=this.constructor.scriptObservers[e];t&&delete t[this.scriptLoaderId]}},{key:"createScript",value:function(){var e=this,t=this.props,n=t.onCreate,a=t.url,r=t.attributes,o=document.createElement("script");n(),r&&Object.keys(r).forEach((function(e){return o.setAttribute(e,r[e])})),o.src=a,o.hasAttribute("async")||(o.async=1);var c=function(t){var n=e.constructor.scriptObservers[a];Object.keys(n).forEach((function(r){t(n[r])&&delete e.constructor.scriptObservers[a][e.scriptLoaderId]}))};o.onload=function(){e.constructor.loadedScripts[a]=!0,c((function(e){return e.onLoad(),!0}))},o.onerror=function(){e.constructor.erroredScripts[a]=!0,c((function(e){return e.onError(),!0}))},document.body.appendChild(o)}},{key:"render",value:function(){return null}}]),t}(c.default.Component);i.propTypes={attributes:l.PropTypes.object,onCreate:l.PropTypes.func,onError:l.PropTypes.func.isRequired,onLoad:l.PropTypes.func.isRequired,url:l.PropTypes.string.isRequired},i.defaultProps={attributes:{},onCreate:function(){},onError:function(){},onLoad:function(){}},i.scriptObservers={},i.loadedScripts={},i.erroredScripts={},i.idCount=0,t.default=i,e.exports=t.default},1100:function(e,t,n){"use strict";var a=n(19),r=(n(282),n(99)),o=n(3),c=n(0),l=n.n(c),i=n(281),u=n(1371),s=n(10);function d(){var e=Object(o.a)(["\n\t.ant-input {\n\t\twidth: ",";\n\t}\n"]);return d=function(){return e},e}var p=Object(s.b)(r.a.Item)(d(),(function(e){return e.width||"100%"}));t.a=function(e){var t=e.monthly,n=e.width,r=Object(a.a)(e,["monthly","width"]);return t?l.a.createElement(i.a,{name:r.name,label:r.label},l.a.createElement(u.a.MonthPicker,Object.assign({name:r.name},r,{style:{width:"100%"}}))):l.a.createElement(p,{name:r.name,label:r.label},l.a.createElement(u.a,Object.assign({},r,{style:{width:n||"100%"}})))}},1114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(22),r=n(1077),o=n(0),c=n(67),l=function(e){var t=e.name,n=e.validate,l=e.fast,i=e.onChange,u=Object(a.c)(e,["name","validate","fast","onChange"]);return o.createElement(c.a,{name:t,validate:n,fast:l},(function(e){var n=e.field.value,a=e.form,c=a.setFieldValue,l=a.setFieldTouched;return o.createElement(r.a,Object.assign({value:n,onChange:function(e){c(t,e.target.value),l(t,!0,!1),i&&i(e)}},u))}))};l.Group=function(e){var t=e.name,n=e.validate,l=e.fast,i=e.onChange,u=Object(a.c)(e,["name","validate","fast","onChange"]);return o.createElement(c.a,{name:t,validate:n,fast:l},(function(e){var n=e.field.value,a=e.form,c=a.setFieldValue,l=a.setFieldTouched;return o.createElement(r.a.Group,Object.assign({value:n,onChange:function(e){c(t,e.target.value),l(t,!0,!1),i&&i(e)}},u))}))},l.Button=r.a.Button},1335:function(e,t,n){"use strict";n.r(t);n(282);var a=n(99),r=(n(92),n(4)),o=(n(91),n(34)),c=(n(98),n(23)),l=n(26),i=n(28),u=n(0),s=n.n(u),d=n(43),p=n(80),m=n(1087),f=n.n(m),b=n(177),h=n(1100),v=n(13),E=n(1086),y=n(35),g=n.n(y),O=n(5),j=null;t.default=Object(O.withI18n)()((function(e){var t=e.handlers,n=e.onData,m=e.loading,y=e.i18n,w=(t.handleNext,t.handlePrev),T=t.onUpdateProfile,_=n.userData,C=void 0===_?{}:_,S=n.setUserData,k=Object(u.useState)(""),P=Object(i.a)(k,2),B=P[0],L=P[1],I=Object(u.useState)({}),x=Object(i.a)(I,2),D=(x[0],x[1]),Y=function(){var e={types:[],componentRestrictions:{country:C.country}};(j=new google.maps.places.Autocomplete(document.getElementById("location"),e)).addListener("place_changed",M)},M=function(){var e=j.getPlace();e.address_components&&(D({location:e.formatted_address}),L(e.formatted_address))};return Object(u.useEffect)((function(){C.address&&L(C.address)}),[C.address]),0===Object.keys(C).length?s.a.createElement(d.o,null):s.a.createElement(c.a,{lg:16,xs:24,style:{padding:"2em 3em"}},s.a.createElement(d.l,{content:s.a.createElement(O.Trans,{id:"Basic profile"}),subheader:s.a.createElement("span",null,s.a.createElement(O.Trans,{id:"Tell us some of your details"})),level:4,marginBottom:"2em"}),s.a.createElement(p.c,{onSubmit:function(e){e=Object(l.a)({},C,{},e,{address:B||C.address,phone:"".concat("id"===C.country?"+62":"+65").concat(e.phone),dob:g()(e.dob).format("YYYY/MM/DD"),nric:""}),S(e),T(e,"curriculum")},enableReinitialize:!0,initialValues:Object(l.a)({},C,{phone:(C.phone||"").startsWith("+")?(C.phone||"").slice(3):C.phone,gender:(C.gender||"").toLowerCase(),race:C.race||void 0})},(function(e){var t=e.handleSubmit;return s.a.createElement(a.a,{layout:"vertical",onSubmit:t},s.a.createElement(o.a,{gutter:32},s.a.createElement(c.a,{lg:12},s.a.createElement(h.a,{name:"dob",label:s.a.createElement(O.Trans,{id:"Date of birth"}),placeholder:y._({id:"Your date of birth..."}),disabledDate:function(e){return e&&e>g()()}})),s.a.createElement(c.a,{lg:12},s.a.createElement(b.a,{name:"phone",label:s.a.createElement(O.Trans,{id:"Your mobile"}),placeholder:y._({id:"E.g. 87888788"}),addonBefore:"id"===C.country?"+62":"+65"}))),s.a.createElement(o.a,{gutter:32},s.a.createElement(c.a,{lg:12},s.a.createElement(f.a,{url:v.h,onLoad:Y}),s.a.createElement(b.a,{special:!0,allowClear:!0,id:"location",name:"address",placeholder:y._({id:"Your location..."}),label:s.a.createElement(O.Trans,{id:"Your location"}),value:B,onChange:function(e){return L(e.target.value)}})),s.a.createElement(c.a,{lg:12},s.a.createElement(E.a,{name:"gender",label:s.a.createElement(O.Trans,{id:"Gender"}),options:[{value:"m",label:s.a.createElement(O.Trans,{id:"Male"})},{value:"f",label:s.a.createElement(O.Trans,{id:"Female"})}]}))),s.a.createElement(b.a,{textarea:!0,rows:4,name:"description",label:s.a.createElement(O.Trans,{id:"Short description about you"}),placeholder:y._({id:"E.g. I am Jenny Ang, a professional tutor from Singapore with more than 3-year teaching experience, etc"})}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(o.a,{type:"flex",justify:"space-between",align:"middle"},s.a.createElement(c.a,{lg:8},s.a.createElement(O.Trans,{id:"<0>Back</0>",components:[s.a.createElement(d.e,{size:"large",htmllType:"button",icon:"left",onClick:function(){return w("Name")}})]})),s.a.createElement(c.a,{lg:8,style:{textAlign:"right"}},s.a.createElement(d.d,{type:"primary",htmlType:"submit",loading:m},s.a.createElement(O.Trans,{id:"Next <0/>",components:[s.a.createElement(r.a,{type:"right"})]})))))})))}))}}]);
//# sourceMappingURL=20.3cac8522.chunk.js.map