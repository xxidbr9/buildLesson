(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[35],{1077:function(e,a,t){"use strict";var n=t(179),r=t(1078),l=t(1079);n.a.Button=l.a,n.a.Group=r.a,a.a=n.a},1086:function(e,a,t){"use strict";t(282);var n=t(99),r=(t(569),t(1077)),l=t(19),o=t(3),c=t(0),i=t.n(c),s=t(1114),u=t(281),m=t(10);function d(){var e=Object(o.a)(["\n\t> label {\n\t\tdisplay: ",";\n\t}\n"]);return d=function(){return e},e}var b=Object(m.b)(s.a.Group)(d(),(function(e){return e.labelBlock&&"block"}));a.a=function(e){var a=e.options,t=e.name,o=e.label,c=e.independent,m=e.isButton,d=void 0===m||m,p=Object(l.a)(e,["options","name","label","independent","isButton"]);return c?i.a.createElement(n.a.Item,{name:t,label:o},i.a.createElement(r.a.Group,Object.assign({},p,{name:t,buttonStyle:"solid"}),a.map((function(e){return i.a.createElement(r.a.Button,{value:e.value,key:e.value},e.label)})))):i.a.createElement(u.a,{name:t,label:o},d?i.a.createElement(b,Object.assign({},p,{name:t,buttonStyle:"solid"}),a.map((function(e){return i.a.createElement(s.a.Button,{value:e.value,key:e.value},e.label)}))):i.a.createElement(b,Object.assign({},p,{options:a,name:t})))}},1114:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(22),r=t(1077),l=t(0),o=t(67),c=function(e){var a=e.name,t=e.validate,c=e.fast,i=e.onChange,s=Object(n.c)(e,["name","validate","fast","onChange"]);return l.createElement(o.a,{name:a,validate:t,fast:c},(function(e){var t=e.field.value,n=e.form,o=n.setFieldValue,c=n.setFieldTouched;return l.createElement(r.a,Object.assign({value:t,onChange:function(e){o(a,e.target.value),c(a,!0,!1),i&&i(e)}},s))}))};c.Group=function(e){var a=e.name,t=e.validate,c=e.fast,i=e.onChange,s=Object(n.c)(e,["name","validate","fast","onChange"]);return l.createElement(o.a,{name:a,validate:t,fast:c},(function(e){var t=e.field.value,n=e.form,o=n.setFieldValue,c=n.setFieldTouched;return l.createElement(r.a.Group,Object.assign({value:t,onChange:function(e){o(a,e.target.value),c(a,!0,!1),i&&i(e)}},s))}))},c.Button=r.a.Button},1353:function(e,a,t){"use strict";t.r(a);t(92);var n=t(4),r=(t(282),t(99)),l=(t(91),t(34)),o=(t(98),t(23)),c=(t(574),t(385)),i=t(26),s=(t(154),t(61)),u=t(28),m=(t(585),t(350)),d=t(3),b=t(0),p=t.n(b),E=t(27),f=t(43),v=t(10),g=t(80),h=t(177),w=t(66),y=t(82),O=t(13),j=t(281),T=t(1371),C=t(1083),S=t(35),P=t.n(S),_=t(1086),k=t(370),B=t(364),I=t(368),N=t(100),Y=t(5),D=t(73),F=t(50),x=t(213),z=t(45),G=t(29),M=t(392);function V(){var e=Object(d.a)(["\n\t&& {\n\t\t.ant-tabs-left-content {\n\t\t\tpadding-left: 4em;\n\t\t}\n\t}\n"]);return V=function(){return e},e}var L=Object(v.b)(m.a)(V()),R={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},J={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:6}}},q=Object(O.l)("programme"),A=Object(O.l)("account");var U=function(e){var a={};return e.newPassword1?e.newPassword1.length<8&&(a.newPassword1="At least 8 characters"):a.newPassword1="You have to provide your new password",e.newPassword2?e.newPassword2!==e.newPassword1&&(a.newPassword2="The password doesn't match"):a.newPassword2="Please repeat your new password",a};a.default=Object(Y.withI18n)()(Object(E.j)((function(e){var a=e.i18n,t=Object(b.useState)({}),d=Object(u.a)(t,2),v=d[0],S=d[1],V=Object(b.useState)(!1),W=Object(u.a)(V,2),H=W[0],K=W[1],Q=JSON.parse(localStorage.getItem("userDetails"))||{},X="STDN"===(Q.role||{}).code,Z=Object(E.g)().push,$=v.firstName,ee=v.lastName,ae=v.dob,te=v.phone,ne=void 0===te?"":te,re=v.race,le=v.gender,oe={firstName:$,lastName:ee,dob:ae,phone:ne&&ne.startsWith("+")?ne.slice(3):ne,race:re,gender:le},ce=v.curriculumList||[],ie=ce&&ce[0]&&ce[0].source||{},se=a._({id:"I have specific reason"}),ue=[{value:"I registered with wrong role",label:a._({id:"I registered with wrong role"})},{value:"I have no longer been active in education",label:a._({id:"I have no longer been active in education"})},{value:se,label:se}],me=Object(w.c)(I.b,{client:q,variables:{country:Q.country}}).data,de=((void 0===me?{}:me).getProgrammeLevelList||[]).map((function(e){return{value:Number(e.pvid),label:e.name}})),be=Object(w.a)(k.h,M.b),pe=Object(u.a)(be,1)[0],Ee=Object(w.b)(k.a,{client:A,onCompleted:function(e){pe()}}),fe=Object(u.a)(Ee,1)[0],ve=Object(w.b)(y.N,{client:Object(O.l)(),onCompleted:function(e){e=e.getProfile||{},S(e)}}),ge=Object(u.a)(ve,2),he=ge[0],we=ge[1].loading,ye=Object(w.b)(y.D,{client:Object(O.l)("profile"),onCompleted:function(){s.a.success(a._({id:"Your curriculum has been updated"})),he()}}),Oe=Object(u.a)(ye,1)[0],je=Object(w.b)(y.G,{client:Object(O.l)("account"),onCompleted:function(){return s.a.success(a._({id:"Your profile has been updated"}))},onError:function(e){return Object(O.q)(e)}}),Te=Object(u.a)(je,1)[0],Ce=Object(w.b)(k.g,{client:Object(O.l)("account"),onCompleted:function(){s.a.loading(a._({id:"Resetting your password..."})).then((function(){s.a.success(a._({id:"Your password has been changed"}))}))},onError:function(e){return Object(O.q)(e)}}),Se=Object(u.a)(Ce,1)[0],Pe=function(){var e="";return v.gender==="F".toUpperCase()&&(e="STDN"===v.roleCode?"icon--student":"icon--businesswoman"),v.gender==="M".toUpperCase()&&(e="STDN"===v.roleCode?"icon--basicpeople":"icon--businessman"),e}();return Object(b.useEffect)((function(){he()}),[he,v.gender,v.roleCode]),localStorage.getItem("token")||Z("/".concat(G.d,"/404")),we?p.a.createElement(f.o,null):p.a.createElement(f.n,{breadcrumb:!1},p.a.createElement(f.u,{paddingHorizontal:"very",style:{paddingTop:"4em"}},p.a.createElement(l.a,{type:"flex",justify:"center",className:"mb4em"},p.a.createElement(o.a,{lg:18},p.a.createElement(L,{tabPosition:O.k?"top":"left"},p.a.createElement(m.a.TabPane,{tab:p.a.createElement(Y.Trans,{id:"Basic"}),key:"basic"},p.a.createElement(l.a,{type:"flex",align:"middle",justify:"space-between",style:{marginBottom:"2em"}},p.a.createElement(o.a,{lg:8},p.a.createElement(f.l,{content:p.a.createElement(Y.Trans,{id:"Basic"}),level:4,subheader:p.a.createElement(Y.Trans,{id:"Your basic profile details"})})),p.a.createElement(o.a,{lg:8},p.a.createElement(Y.Trans,{id:"<0/> \xa0 You are a <1>{0}</1>",values:{0:v.roleName},components:[p.a.createElement(N.a,{type:Pe}),p.a.createElement("strong",{className:"primary"})]}))),p.a.createElement(g.c,{enableReinitialize:!0,onSubmit:function(e,a){var t=a.setSubmitting;e=Object(i.a)({},e,{dob:P()(e.dob).format("YYYY-MM-DD")}),Te({variables:e}).finally((function(){return t(!1)}))},initialValues:oe},(function(e){var t=e.handleSubmit,n=e.dirty;return p.a.createElement(r.a,Object.assign({},R,{onSubmit:t}),p.a.createElement(h.a,{name:"firstName",placeholder:a._({id:"First name"}),label:p.a.createElement(Y.Trans,{id:"First name"})}),p.a.createElement(h.a,{name:"lastName",placeholder:a._({id:"Last name"}),label:p.a.createElement(Y.Trans,{id:"Last name"})}),p.a.createElement(_.a,{name:"gender",label:p.a.createElement(Y.Trans,{id:"Gender"}),options:[{value:"M",label:p.a.createElement(Y.Trans,{id:"Male"})},{value:"F",label:p.a.createElement(Y.Trans,{id:"Female"})}]}),p.a.createElement(j.a,{name:"dob",label:p.a.createElement(Y.Trans,{id:"DOB"})},p.a.createElement(T.a,{name:"dob",placeholder:a._({id:"Your date of birth"}),label:p.a.createElement(Y.Trans,{id:"DOB"})})),p.a.createElement(h.a,{name:"phone",placeholder:a._({id:"Mobile number"}),label:p.a.createElement(Y.Trans,{id:"Mobile number"}),addonBefore:(D.b[Q.country]||{}).phoneCode,marginBottom:"3em"}),p.a.createElement(r.a.Item,J,p.a.createElement(Y.Trans,{id:"<0>Save changes</0>",components:[p.a.createElement(C.a,{size:"large",disabled:!n})]})))}))),X&&p.a.createElement(m.a.TabPane,{tab:p.a.createElement(Y.Trans,{id:"Education"}),key:"education"},p.a.createElement(f.l,{content:p.a.createElement(Y.Trans,{id:"Education"}),level:4,subheader:p.a.createElement(Y.Trans,{id:"Some educational details of you"}),marginBottom:"3em"}),p.a.createElement(g.c,{initialValues:{programmeCurriculumPvid:ie.name},onSubmit:function(e,a){var t=a.setSubmitting;e=ce.length>0?Object(i.a)({pvid:ce[0].pvid},e):e,Oe({variables:{list:[Object(i.a)({},e)]}}).finally((function(){t(!1)}))}},(function(e){var t=e.handleSubmit,n=e.dirty;return p.a.createElement(r.a,Object.assign({},R,{onSubmit:t}),p.a.createElement(B.a,{name:"programmeCurriculumPvid",label:p.a.createElement(Y.Trans,{id:"Curriculum and level"}),placeholder:a._({id:"Select one..."}),options:de}),p.a.createElement(r.a.Item,J,p.a.createElement(Y.Trans,{id:"<0>Save changes</0>",components:[p.a.createElement(C.a,{disabled:!n,size:"large"})]})))}))),p.a.createElement(m.a.TabPane,{tab:p.a.createElement(Y.Trans,{id:"Change password"}),key:"password"},p.a.createElement(f.l,{content:p.a.createElement(Y.Trans,{id:"Change password"}),level:4,subheader:p.a.createElement(Y.Trans,{id:"If you don't satisfy with your current password"}),marginBottom:"3em"}),p.a.createElement(g.c,{onSubmit:function(e,a){var t=a.setSubmitting;Se({variables:e}).finally((function(){return t(!1)}))},validate:U,initialValues:{}},(function(e){var t=e.handleSubmit,n=e.dirty;return p.a.createElement(r.a,Object.assign({},R,{onSubmit:t}),p.a.createElement(h.a,{password:!0,name:"newPassword1",placeholder:a._({id:"Your new password..."}),label:p.a.createElement(Y.Trans,{id:"Your new password"})}),p.a.createElement(h.a,{password:!0,name:"newPassword2",placeholder:a._({id:"Repeat your new password..."}),label:p.a.createElement(Y.Trans,{id:"Repeat password"})}),p.a.createElement(h.a,{password:!0,name:"oldPassword",placeholder:a._({id:"Your old password..."}),label:p.a.createElement(Y.Trans,{id:"Your old password"})}),p.a.createElement(r.a.Item,J,p.a.createElement(C.a,{size:"large",disabled:!n},p.a.createElement(Y.Trans,{id:"Save changes"}))))}))),p.a.createElement(m.a.TabPane,{tab:p.a.createElement(Y.Trans,{id:"<0/> Danger zone",components:[p.a.createElement(n.a,{type:"warning",theme:"filled",style:{color:z.a.redColor}})]}),key:"danger"},p.a.createElement(f.l,{content:p.a.createElement(Y.Trans,{id:"Danger zone"}),level:4,subheader:p.a.createElement(Y.Trans,{id:"If for some reasons you would like to delete your Cudy account, you can use this section"}),marginBottom:"3em"}),H?p.a.createElement(g.c,{onSubmit:function(e,t){var n=t.setSubmitting,r=e.reason,l=e.another_reason;c.a.confirm({width:600,centered:!0,title:a._({id:"Final warning"}),content:a._({id:"This action will deactivate your Cudy account forever. Are you sure you want to do this?"}),onOk:function(){return fe({variables:{reason:l||r}})},okText:a._({id:"Yes, I'd like to delete my account now"}),cancelText:a._({id:"No, cancel this"})}),n(!1)},initialValues:{reason:""}},(function(e){var t=e.handleSubmit,n=e.dirty,l=e.values;return p.a.createElement(r.a,{layout:"vertical",onSubmit:t},p.a.createElement(B.a,{name:"reason",options:ue,label:p.a.createElement(Y.Trans,{id:"Tell us the reason"})}),l.reasons===se&&p.a.createElement(h.a,{texarea:!0,rows:3,name:"another_reason",placeholder:a._({id:"Write down your specific reason..."})}),p.a.createElement(C.a,{type:"primary",size:"large",disabled:!n},p.a.createElement(Y.Trans,{id:"Delete my account"}))," ","\xa0",p.a.createElement(f.e,{onClick:function(){return K(!1)}},p.a.createElement(Y.Trans,{id:"Cancel"})))})):p.a.createElement(p.a.Fragment,null,p.a.createElement(x.a,{message:p.a.createElement(Y.Trans,{id:"Delete your account?"}),description:p.a.createElement(Y.Trans,{id:"Only proceed if you are completely sure of what you are doing"}),type:"warning",showIcon:!0}),p.a.createElement(F.a,{type:"primary",onClick:function(){return K(!0)}},p.a.createElement(Y.Trans,{id:"Proceed <0/>",components:[p.a.createElement(n.a,{type:"right"})]})))))))))})))}}]);
//# sourceMappingURL=35.25d55703.chunk.js.map