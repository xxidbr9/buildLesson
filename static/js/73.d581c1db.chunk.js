(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[73],{1333:function(e,t,a){"use strict";a.r(t);a(282);var n=a(99),i=a(26),o=(a(154),a(61)),r=a(28),s=a(19),l=a(0),c=a.n(l),u=a(43),m=a(80),d=a(364),h=a(177),b=a(1083),f=a(285),p=a(5),v=a(66),y=a(82),g=a(13);t.default=Object(p.withI18n)()((function(e){var t=e.section,a=e.userData,l=void 0===a?{}:a,E=e.onModal,j=e.i18n,O=Object(s.a)(e,["section","userData","onModal","i18n"]),w=E.profileCompletionModal,C=E.setProfileCompletionModal,k=Object(v.b)(y.C,{client:Object(g.l)(),onCompleted:function(e){C(!1),o.a.success(j._({id:"Your request has been sent. Thank you! :)"}))},onError:function(e){return Object(g.q)(e)}}),P=Object(r.a)(k,1)[0],T=f.d.findIndex((function(e){return e.value===t})),q={section:(f.d[T]||{}).value||"",messages:j._({id:"Hi, I really like your Profile. However, I'd like to see more from yours, and I think it's the time for you to complete your profile, so that others can have a better insight about yourself as a tutor."})},I="M"===l.gender||"m"===l.gender;return c.a.createElement(u.q,Object.assign({},O,{visible:w,footer:!1,onCancel:function(){return C(!1)}}),c.a.createElement(u.u,{style:{paddingLeft:"2em",paddingRight:"2em"}},c.a.createElement(u.l,{bold:!0,level:4,marginBottom:"2em",content:c.a.createElement(p.Trans,{id:"Request to complete"}),subheader:c.a.createElement(p.Trans,{id:"Help {0} to improve {1} Profile by requesting {2} to complete {3} Profile immediately",values:{0:l.firstName,1:I?"his":"her",2:I?"him":"her",3:I?"his":"her"}})}),c.a.createElement(m.c,{initialValues:q,onSubmit:function(e,t){var a=t.setSubmitting;e=Object(i.a)({},e,{userPvid:Number(l.pvid)}),P({variables:e}).finally((function(){return a(!1)}))},validate:function(e){var t={};return e.section||(t.section=j._({id:"You have to specify the section first"})),t},render:function(e){var t=e.handleSubmit;return c.a.createElement(n.a,{layout:"vertical",onSubmit:t},c.a.createElement(d.a,{name:"section",label:c.a.createElement(p.Trans,{id:"Choose section"}),placeholder:j._({id:"Choose the section..."}),options:f.d}),c.a.createElement(h.a,{textarea:!0,name:"messages",rows:4,label:c.a.createElement(p.Trans,{id:"Your message to them"}),placeholder:j._({id:"Describe how important their Profile is once it's completed"})}),c.a.createElement(b.a,{size:"large",type:"primary",icon:"plus"},"\xa0 ",c.a.createElement(p.Trans,{id:"Submit now"})))}})))}))}}]);
//# sourceMappingURL=73.d581c1db.chunk.js.map