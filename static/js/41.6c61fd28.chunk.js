(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[41],{1138:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(98);var n=a(23),r=(a(124),a(33)),o=(a(91),a(34)),i=a(3),m=a(0),c=a.n(m),s=a(158),d=a(10),l=a(35),u=a.n(l),b=a(45);function g(){var e=Object(i.a)(["\n\t.ant-card {\n\t\tmargin-bottom: 1em;\n\t\tmax-width: ",";\n\t\tfloat: ",";\n\t\tbox-shadow: none;\n\t\t/* box-shadow: ","; */\n\t\t.ant-card-body {\n\t\t\tmargin-bottom: 0;\n\t\t\tpadding: 1em;\n\t\t\tfont-size: 1em;\n\t\t\tborder-radius: 8px;\n\t\t\tbackground: ",";\n\t\t}\n\t}\n"]);return g=function(){return e},e}var p=Object(d.b)(o.a)(g(),(function(e){return e.isChatPage?"85%":"75%"}),(function(e){return"me"===e.sender?"right":"left"}),b.a.boxShadow.hover,(function(e){return"me"===e.sender?"rgba(0, 55, 255, 0.16)":b.a.lightGrey.one}));function h(e){var t=e.data,a=e.isChatPage,o=t.sender,i=u()(t.time).format("DD MM YYYY")===u()().format("DD MM YYYY")?u()().format("HH:mm"):u()(t.time).format("DD MMM - HH:mm");return c.a.createElement(p,{sender:o,isChatPage:a},c.a.createElement(n.a,{lg:24},c.a.createElement(s.a,{autoHeight:!0,noHover:!0,className:"me"===o?"ta-right":"ta-left"},c.a.createElement(r.a.Paragraph,null,t.message),c.a.createElement(r.a.Text,{className:"light-grey"},i))))}},1330:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));a(124);var n=a(33),r=(a(91),a(34)),o=(a(98),a(23)),i=(a(92),a(4)),m=a(155),c=a(26),s=a(28),d=(a(282),a(99)),l=a(10),u=a(0),b=a.n(u),g=a(1090),p=a(379),h=a(128),f=a(45),y=a(80),x=a(177),E=a(285),v=a(1138),w=a(35),C=a.n(w),j=a(69),N=Object(l.b)(g.a.div).withConfig({displayName:"Chat__StyledChat",componentId:"sc-1e8dib4-0"})(["position:fixed;left:2rem;bottom:1rem;border-radius:8px;padding:0;height:400px;background-color:#fff;width:250px;overflow-y:scroll;z-index:2;box-shadow:",";.receiver-bar{border-bottom:1px solid #ddd;padding:1em 1.5em;margin-bottom:1em;}"],f.a.boxShadow.main),S=l.b.span.withConfig({displayName:"Chat__HidingIcon",componentId:"sc-1e8dib4-1"})(["position:absolute;right:10px;top:5px;cursor:pointer;color:",";"],f.a.greyColor),O=Object(l.b)(h.a).attrs({level:4,marginBottom:"0"}).withConfig({displayName:"Chat__ReceiverHeading",componentId:"sc-1e8dib4-2"})(["h4.ant-typography{font-size:1em;}"]),H=Object(l.b)(d.a).withConfig({displayName:"Chat__StyledForm",componentId:"sc-1e8dib4-3"})(["position:sticky;bottom:0;width:100%;padding:0;.message{margin-bottom:0;border:transparent;.ant-form-explain{display:none;}}"]),Y={hidden:{opacity:0,y:100},visible:{opacity:1,y:0}};function _(e){var t=e.onChatWindow,a=Object(u.useState)(E.a),d=Object(s.a)(a,2),l=d[0],g=d[1],h=(t.chatWindow,t.setChatWindow);return b.a.createElement(N,{variants:Y,animate:"visible",initial:"hidden"},b.a.createElement(S,{onClick:function(){return h(!1)}},b.a.createElement(i.a,{type:"down"})),b.a.createElement(r.a,{gutter:16,type:"flex",align:"middle",className:"receiver-bar"},b.a.createElement(o.a,{lg:6},b.a.createElement(p.a,{src:"https://source.unsplash.com/random/"})),b.a.createElement(o.a,{lg:18},b.a.createElement(O,{content:"Jane Doe",subheader:"44 minutes ago"}))),b.a.createElement(r.a,{type:"flex",justify:"center"},b.a.createElement(o.a,{lg:22},(l||[]).map((function(e){return b.a.createElement(v.a,{key:e.id,data:e})})),b.a.createElement(j.a,{centered:!0},b.a.createElement(n.a.Text,{className:"light-grey fs-09em"},"End of conversation")))),b.a.createElement(y.c,{onSubmit:function(e,t){var a=t.setSubmitting,n=t.resetForm;e=Object(c.a)({},e,{time:C()(),type:"text",id:8,sender:"me"}),g((function(t){return[].concat(Object(m.a)(t),[e])})),a(!1),n({})},initialValues:{message:""}},(function(e){var t=e.handleSubmit;return b.a.createElement(H,{layout:"vertical",className:"px1em",onSubmit:t},b.a.createElement(x.a,{className:"message",size:"large",mb:"0",name:"message",placeholder:"Start your message..."}))})))}}}]);