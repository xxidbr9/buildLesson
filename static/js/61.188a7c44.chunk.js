(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[61],{1336:function(e,t,a){"use strict";a.r(t);a(282);var n=a(99),r=(a(91),a(34)),l=(a(92),a(4)),i=(a(98),a(23)),c=a(28),u=a(0),m=a.n(u),o=a(43),s=a(80),d=a(27),p=a(364),b=a(66),v=a(82),h=a(13),E=a(5),g=a(29);t.default=Object(E.withI18n)()((function(e){var t=e.handlers,a=e.levelData,u=void 0===a?[]:a,f=e.onData,y=e.fetchUser,j=e.i18n,T=t.handlePrev,O=f.setUserData,k=f.userData,D=void 0===k?{}:k,w=Object(d.g)(),C=Object(b.b)(v.D,{client:Object(h.l)(),onCompleted:function(e){y(),O(e),w.push("/".concat(g.d,"/profile/info/thankyou"))},onError:function(e){return Object(h.q)(e)}}),P=Object(c.a)(C,2),S=P[0],x=P[1].loading,B=u.map((function(e){return{value:Number(e.pvid),label:e.name}})),z=(D.curriculumList||[])[0]||{};return m.a.createElement(i.a,{lg:16,xs:24,style:{padding:"2em 3em"}},m.a.createElement(o.l,{content:m.a.createElement(E.Trans,{id:"Your curriculum and level"}),subheader:m.a.createElement(E.Trans,{id:"What curriculum and level are you currently on"}),level:4,marginBottom:"2em"}),m.a.createElement(s.c,{onSubmit:function(e,t){var a=t.setSubmitting;S({variables:{list:[e]}}).finally((function(){return a(!1)}))},initialValues:{programmeCurriculumPvid:(z.source||{}).name,pvid:z.pvid},enableReinitialize:!0},(function(e){var t=e.handleSubmit,a=e.dirty;return m.a.createElement(n.a,{layout:"vertical",onSubmit:t},m.a.createElement(p.a,{name:"programmeCurriculumPvid",label:m.a.createElement(E.Trans,{id:"Please choose one"}),placeholder:j._({id:"Your current curriculum and level..."}),options:B}),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement(r.a,{type:"flex",justify:"space-between",align:"middle"},m.a.createElement(i.a,{lg:8},m.a.createElement(E.Trans,{id:"<0>Back</0>",components:[m.a.createElement(o.e,{size:"large",htmllType:"button",icon:"left",onClick:function(){return T("Basic")}})]})),m.a.createElement(i.a,{lg:8,style:{textAlign:"right"}},m.a.createElement(o.d,{type:"primary",htmlType:"submit",disabled:!a,loading:x},m.a.createElement(E.Trans,{id:"Finish <0/>",components:[m.a.createElement(l.a,{type:"right"})]})))))})))}))}}]);