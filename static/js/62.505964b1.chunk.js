(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[62],{1334:function(e,a,t){"use strict";t.r(a);t(282);var n=t(99),l=(t(92),t(4)),r=(t(91),t(34)),i=(t(98),t(23)),m=t(26),s=t(0),u=t.n(s),c=t(43),o=t(80),d=t(177),E=t(1262),b=t(35),f=t.n(b),g=t(5);var h=function(e){var a={};return e.firstName||(a.firstName="You have to tell us your first name"),e.lastName||(a.lastName="You have to tell us your last name"),a};a.default=Object(g.withI18n)()((function(e){var a=e.handlers,t=e.onData,s=e.loading,b=e.i18n,p=(a.handleNext,a.onUpdateProfile),v=t.userData,N=void 0===v?{}:v,y=t.setUserData;return u.a.createElement(i.a,{lg:16,xs:24,style:{padding:"2em 3em"}},u.a.createElement(c.l,{content:u.a.createElement(g.Trans,{id:"Your name"}),subheader:u.a.createElement("span",null,u.a.createElement(g.Trans,{id:"Tell us your name"})),level:4,marginBottom:"2em"}),u.a.createElement(o.c,{onSubmit:function(e,a){var t=a.setSubmitting;e=Object(m.a)({},N,{},e,{gender:"m",dob:f()(E.initialValues.dob).format("YYYY/MM/DD")}),y((function(a){return Object(m.a)({},a,{},e)})),p(e,"basic"),t(!1)},validate:h,enableReinitialize:!0,initialValues:{firstName:N.firstName||"",lastName:N.lastName||""}},(function(e){var a=e.handleSubmit;return u.a.createElement(n.a,{layout:"vertical",onSubmit:a},u.a.createElement(r.a,{gutter:32},u.a.createElement(i.a,{lg:12},u.a.createElement(d.a,{name:"firstName",label:u.a.createElement(g.Trans,{id:"First name"}),placeholder:b._({id:"Your first name..."})})),u.a.createElement(i.a,{lg:12},u.a.createElement(d.a,{name:"lastName",label:u.a.createElement(g.Trans,{id:"Last name"}),placeholder:b._({id:"Your last name..."})}))),u.a.createElement("br",null),u.a.createElement("br",null),u.a.createElement(c.u,{textAlign:"right",noPadding:!0},u.a.createElement(c.d,{type:"primary",htmlType:"submit",loading:s},u.a.createElement(g.Trans,{id:"{0} <0/>",values:{0:s?"Please wait...":"Next"},components:[u.a.createElement(l.a,{type:"right"})]}))))})))}))}}]);