(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[25],{1108:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return s}));var a=n(29),r=n(36),o=function(){return{type:r.y}},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.category,n=void 0===e?"":e;return function(t){return t(o()),a.c.getEntries({content_type:"product","fields.category":n}).then((function(e){var n=e.items;t({type:r.e,payload:n.map((function(t){return t.fields}))})})).catch((function(e){t({type:r.f}),console.error(e)}))}},i=function(){return function(t){return t(o()),a.c.getEntries({content_type:"eCommerceSites"}).then((function(e){var n=e.items;return t({type:r.g,payload:n.map((function(t){return t.fields}))})})).catch((function(e){t({type:r.h}),console.error(e)}))}},l=function(){return function(t){return t(o()),a.c.getEntries({content_type:"product",select:"fields.category"}).then((function(e){var n=e.items;return t({type:r.r,payload:n.map((function(t){return t.fields}))})})).catch((function(e){t({type:r.s}),console.error(e)}))}},u=function(){return function(t){return t(o()),a.c.getEntries({content_type:"consultants"}).then((function(e){var n=e.items;t({type:r.c,payload:n.map((function(t){return t.fields}))})})).catch((function(e){t({type:r.d}),console.error(e)}))}},s=function(){return function(t){return t(o()),a.c.getEntries({content_type:"lifelongSlider"}).then((function(e){var n=e.items;t({type:r.i,payload:n.map((function(t){return t.fields}))})})).catch((function(e){t({type:r.j}),console.error(e)}))}}},1125:function(t,e,n){t.exports=n.p+"static/media/ellipse-orange.b77438c1.png"},1126:function(t,e,n){t.exports=n.p+"static/media/ellipse-purple.32f7a042.png"},1186:function(t,e,n){t.exports=n.p+"static/media/homepage.46c44ecc.svg"},1374:function(t,e,n){"use strict";n.r(e);n(92);var a=n(4),r=n(3),o=(n(91),n(34)),c=(n(98),n(23)),i=(n(282),n(99)),l=(n(583),n(518)),u=n(28),s=(n(124),n(33)),m=n(0),p=n.n(m),d=n(10),f=n(43),b=n(27),h=n(80),g=n(1341),E=n(469),y=n.n(E),v=n(1185),w=n.n(v),x=n(369),j=n(5),k=n(66),O=n(1376),C=n(45),N=n(13),S=n(1125),_=n.n(S),B=n(1126),A=n.n(B),P=n(1186),T=n.n(P),L=n(177),z=n(82),I=n(368),U=n(29),F=n(73),H=n(19);function K(){var t=Object(r.a)(["\n\t\t\t\t> .ant-typography {\n\t\t\t\t\tmax-width: 120px;\n\t\t\t\t}\n\t\t\t"]);return K=function(){return t},t}function M(){var t=Object(r.a)(["\n\t&& {\n\t\twidth: 100%;\n\t\tmargin-right: 1em;\n\t\tbox-shadow: ",";\n\t\tcursor: pointer;\n\t\t.ant-card-body {\n\t\t\tpadding: 0;\n\t\t\tpadding-top: 1em;\n\n\t\t\t","\n\t\t}\n\t\t.ant-card-cover {\n\t\t\theight: 150px;\n\t\t\timg {\n\t\t\t\theight: 100%;\n\t\t\t\tobject-fit: cover;\n\t\t\t\tborder-radius: 10px 10px 0 0;\n\t\t\t}\n\t\t}\n\t}\n"]);return M=function(){return t},t}var D=Object(d.b)(f.g)(M(),(function(t){return t.boxShadow||"0 12px 20px 0 rgba(0, 0, 0, 0.1), 0 17px 10px 0 rgba(0, 0, 0, 0.1)"}),N.j.mobile(K()));function V(t){var e=t.data,n=t.onClick,a=t.height,r=void 0===a?"220px":a,o=t.boxShadow,c=Object(H.a)(t,["data","onClick","height","boxShadow"]),i=Object(N.p)(e.resource.path);return p.a.createElement(D,Object.assign({},c,{boxShadow:o,height:r,src:i,className:"ta-center",onClick:function(){return n(e)}}),p.a.createElement(s.a.Text,{strong:!0,ellipsis:{rows:1}},e.firstName+" "+e.lastName),p.a.createElement(s.a.Paragraph,{ellipsis:{rows:1},className:"fs-09em"},e.experienceSubject||"-"))}n(576);var G=n(389),J=(n(578),n(343));function R(){var t=Object(r.a)(["\n\t\t\ttop: -25px;\n\t\t\tright: 0;\n\t\t\tpadding: 5px 10px;\n\t\t\tbackground: #ff9c01;\n\t\t\tborder-radius: 0 0 5px 5px;\n\t\t\tcolor: #fff;\n\t\t\tz-index: 100;\n\t\t"]);return R=function(){return t},t}function W(){var t=Object(r.a)(["\n\t&& {\n\t\tposition: absolute;\n\t\tright: 20px;\n\t\ttop: -10px;\n\t\tfont-size: 0.8em;\n\t\tz-index: 10;\n\n\t\t","\n\t}\n"]);return W=function(){return t},t}function Y(){var t=Object(r.a)(["\n\t\tbottom: -150px;\n\t\t\n\t\t.ant-card {\n\t\t\tbox-shadow: none;\n\t\t}\n    "]);return Y=function(){return t},t}function Q(){var t=Object(r.a)(["\n\tposition: absolute;\n\tbottom: -120px;\n\tz-index: 10;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\n\t.ant-steps {\n\t\t.ant-steps-item {\n\t\t\toverflow: visible;\n\t\t}\n\t\t.ant-steps-item-container {\n\t\t\toverflow: hidden;\n\t\t\t.ant-steps-item-icon {\n\t\t\t\tbackground-color: ",";\n\t\t\t\t.ant-steps-icon {\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.ant-carousel {\n\t\t.slick-dots {\n\t\t\tbutton {\n\t\t\t\tbackground: ",";\n\t\t\t}\n\t\t}\n\t}\n\n\t","\n"]);return Q=function(){return t},t}var X=s.a.Paragraph,q=Object(d.b)(f.u)(Q(),C.a.primaryColor,C.a.primaryColor,N.j.mobile(Y())),Z=d.b.span(W(),N.j.mobile(R())),$=[{id:1,title:"Find tutor",status:"finish",timeCost:"Up to 10 minutes",children:[{title:"By subject"},{title:"By curriculum"}]},{id:2,title:"Qualify tutor",status:"finish",timeCost:"Up to 1 hour",children:[{title:"By profile"},{title:"By chat"}]},{id:3,title:"Book tutor",status:"finish",timeCost:"Up to 24 hours",children:[{title:"Bank transfer"},{title:"Credit card"},{title:"Installment"}]},{id:4,title:"Start learning",status:"finish",timeCost:"",children:[{title:"Online live lesson"},{title:"Offline lesson"}]}];function tt(){return p.a.createElement(q,{width:N.k?"100%":"90%",centered:!0},p.a.createElement(X,{strong:!0,type:"secondary"},"Let us do the work for you to help you learn"),N.k?p.a.createElement(G.a,null,$.map((function(t){return p.a.createElement(f.g,{height:"140px",key:t.id},p.a.createElement(J.a,{current:null},p.a.createElement(J.a.Step,{title:t.title,status:t.status,description:p.a.createElement(X,{type:"secondary"},p.a.createElement("ul",null,t.children.map((function(t){return p.a.createElement("li",{key:t.title},t.title)}))),t.timeCost&&p.a.createElement(Z,null,t.timeCost))})))}))):p.a.createElement(f.g,{autoHeight:!0},p.a.createElement(J.a,{current:null},$.map((function(t){return p.a.createElement(J.a.Step,{key:t.id,title:t.title,status:t.status,description:p.a.createElement(X,{type:"secondary"},p.a.createElement("ul",null,t.children.map((function(t){return p.a.createElement("li",{key:t.title},t.title)}))),t.timeCost&&p.a.createElement(Z,null,t.timeCost))})})))))}var et=n(1108),nt=n(372),at=n(100),rt=n(206),ot=n(397);var ct=function(t,e){var n=p.a.useMemo((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=0,n=t.length-1;return function(a){return a!==t[e]?(e=0,!1):e===n?(e=0,!0):(e++,!1)}}([].concat(t))}),[t]),a=function(t){var a=t.key;n(a)&&e()};p.a.useEffect((function(){return window.addEventListener("keydown",a),function(){return window.removeEventListener("keydown",a)}}))};function it(){var t=Object(r.a)(["\n        display: none;\n    "]);return it=function(){return t},t}function lt(){var t=Object(r.a)(["\n\tposition: absolute;\n\ttop: ",";\n\tbottom: ",";\n\tleft: ",";\n\tright: ",";\n\t","\n"]);return lt=function(){return t},t}function ut(){var t=Object(r.a)(["\n        padding-left: 1em;\n        padding-right: 1em;\n        > .ant-col:first-child {\n            margin-bottom: 3em;\n        }\n    "]);return ut=function(){return t},t}function st(){var t=Object(r.a)(["\n\tpadding-left: ",";\n\tpadding-right: ",";\n\tmargin-bottom: ",";\n\n\t.overflowing-section {\n\t\tmax-height: ",";\n\t\toverflow-y: ",";\n\t\t-webkit-overflow-scrolling: touch;\n\t\t&::-webkit-scrollbar-thumb {\n\t\t\tborder-radius: 8px;\n\t\t\tborder: 2px solid ",";\n\t\t\tbackground-color: rgba(0, 0, 0, 0.5);\n\t\t}\n\t\t&::-webkit-scrollbar {\n\t\t\t-webkit-appearance: none;\n\t\t}\n\t\t&::-webkit-scrollbar:vertical {\n\t\t\twidth: 11px;\n\t\t}\n\t\t&::-webkit-scrollbar:horizontal {\n\t\t\theight: 11px;\n\t\t}\n\t}\n\n\t","\n"]);return st=function(){return t},t}function mt(){var t=Object(r.a)(["\n\t&& {\n\t\th2 {\n\t\t\tp {\n\t\t\t\tmargin-bottom: 0;\n\t\t\t}\n\t\t\t.primary {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t}\n\t\t.ant-typography:not(h2) {\n\t\t\tfont-size: 1.4em;\n\t\t}\n\t}\n"]);return mt=function(){return t},t}function pt(){var t=Object(r.a)(["\n\t&& {\n\t\tmargin-bottom: 2em;\n\t\th2 {\n\t\t\tfont-weight: bold;\n\t\t\tline-height: 1.2;\n\t\t}\n\t}\n"]);return pt=function(){return t},t}function dt(){var t=Object(r.a)(["\n\t\toverflow: visible;\n\t\t.BrainhubCarousel__customArrows.BrainhubCarousel__custom-arrowRight {\n\t\t\tposition: relative;\n\t\t\tright: -10px;\n\t\t}\n\t\t.BrainhubCarousel__customArrows.BrainhubCarousel__custom-arrowLeft {\n\t\t\tposition: relative;\n\t\t\tleft: -10px;\n\t\t}\n\t"]);return dt=function(){return t},t}function ft(){var t=Object(r.a)(["\n\t.BrainhubCarousel__trackContainer {\n\t\t.BrainhubCarousel__track {\n\t\t\tpadding: 2em 1em;\n\t\t}\n\t}\n\n\t","\n"]);return ft=function(){return t},t}function bt(){var t=Object(r.a)(["\n        .ant-btn {\n            > span {\n                max-width: 120px;\n            }\n        }\n    "]);return bt=function(){return t},t}function ht(){var t=Object(r.a)(["\n\tmargin-bottom: 1.5em;\n\t.ant-btn {\n\t\theight: 60px;\n\t\tborder: none;\n\t\tbox-shadow: ",";\n\t\t> span {\n\t\t\ttext-overflow: ellipsis;\n\t\t\toverflow-x: hidden;\n\t\t\tmax-width: 150px;\n\t\t}\n\t\t&:hover {\n\t\t\ttransform: translateY(-3px);\n\t\t\tbox-shadow: ",";\n\t\t}\n\t}\n\t","\n"]);return ht=function(){return t},t}function gt(){var t=Object(r.a)(["\n\theight: 500px;\n\tmargin-bottom: 4em;\n\tbackground: ",";\n\tbackground-size: cover;\n\th2.ant-typography {\n\t\tcolor: #fff;\n\t\tline-height: 1;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 0.8em;\n\t}\n"]);return gt=function(){return t},t}var Et=Object(N.l)("programme"),yt=Object(N.l)(),vt=s.a.Paragraph,wt=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","x","x","x","Enter"];e.default=Object(j.withI18n)()(Object(b.j)(Object(O.a)((function(t){var e=t.history,n=t.i18n,a=t.language,r=Object(m.useContext)(U.b).socket,d=Object(x.c)(),b=F.b[U.d],E=Object(x.d)((function(t){return t.contentful.consultants}));ct(wt,(function(){return console.log("ANDHAN KIMAAAAAAAKKKK!!!")})),Object(k.c)(I.c,{client:Et,variables:{country:U.d},onCompleted:function(t){var e=(t=t.getProgrammeSubjectList||[]).map((function(t){var e=t.name,n=t.pvid;return{value:Number(n),label:e}}));J(e)}}),Object(k.c)(z.k,{client:yt,variables:{country:U.d,limit:16},onCompleted:function(t){t=t.introVideoHome||[],K(t)}});var v=Object(m.useState)({value:-1,label:""}),w=Object(u.a)(v,2),O=(w[0],w[1]),C=Object(m.useState)(""),S=Object(u.a)(C,2),B=(S[0],S[1]),P=Object(m.useState)([]),T=Object(u.a)(P,2),H=T[0],K=T[1],M=Object(m.useState)([]),D=Object(u.a)(M,2),G=D[0],J=D[1],R=Object(m.useState)({}),W=Object(u.a)(R,2),Y=(W[0],W[1]),Q=Object(nt.c)(),X=Object(u.a)(Q,2),q=X[0],Z=X[1].data,$=function(t){window.open("/".concat(U.d,"/").concat(t.token,"--").concat(t.pvid,"--").concat(t.firstName,"--").concat(t.lastName))};return Object(m.useEffect)((function(){q(),d(Object(et.a)())}),[d,q,r]),p.a.createElement(f.n,{breadcrumb:!1,language:a},p.a.createElement(l.a,null),p.a.createElement(o.a,{className:"mb4em"},p.a.createElement(c.a,{lg:24},p.a.createElement(xt,null,p.a.createElement(c.a,{lg:10},p.a.createElement(f.u,null,p.a.createElement(Ot,{content:p.a.createElement("p",null,p.a.createElement(j.Trans,{id:"We help students to prepare for examinations in <0><1>Singapore</1><2>Indonesia</2><3>Malaysia</3><4>India</4><5>Vietnam</5><6>Philippines</6><7>Sri Lanka</7></0>",components:[p.a.createElement(g.a,{interval:2e3}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"}),p.a.createElement("span",{className:"primary"})]})),subheader:p.a.createElement(j.Trans,{id:"It's easy to find your best tutors on Cudy. Try it today!"}),color:"white"}),p.a.createElement(h.c,{onSubmit:function(t){B(t.keywords),e.push("/".concat(U.d,"/browse/tutors?keywords=").concat(t.keywords))},initialValues:{keywords:""}},(function(t){var e=t.handleSubmit;return p.a.createElement(i.a,{layout:"vertical",onSubmit:e},p.a.createElement(L.a,{name:"keywords",placeholder:n._({id:"Start by searching for subjects, e.g. English"}),width:"100%",size:"large"}))})))),p.a.createElement(c.a,{lg:10})),p.a.createElement(tt,null))),p.a.createElement(f.u,{className:"pos-rel pt4em"},p.a.createElement(St,{src:_.a,alt:"Orange donut",width:"45%",bottom:"-150px",right:"-200px"}),p.a.createElement(St,{src:A.a,alt:"Purple donut",left:"-200px"}),p.a.createElement(Nt,{gutter:!N.k&&32,marginBottom:N.k?"1em":"6em"},p.a.createElement(c.a,{lg:12,xs:24,order:N.k&&2},p.a.createElement(y.a,{url:rt.d+N.d,playsinline:!0,controls:!0,muted:!0,playing:!0,width:"100%"})),p.a.createElement(c.a,{lg:12,order:N.k&&1},p.a.createElement(Ct,{content:p.a.createElement(vt,null,p.a.createElement(j.Trans,{id:"Find <0>best tutors</0>",components:[p.a.createElement("span",{className:"primary"})]})),subheader:p.a.createElement(j.Trans,{id:"See the tutors that match your criteria, and make an assignment"})}))),p.a.createElement(Nt,{marginBottom:"3em"},p.a.createElement(c.a,{lg:24,xs:24},p.a.createElement(f.l,{content:p.a.createElement(j.Trans,{id:"Featured tutors from <0>{0}</0>",values:{0:b.name},components:[p.a.createElement("span",{className:"primary"})]})}),0===Z.length&&p.a.createElement(f.j,{description:p.a.createElement(j.Trans,{id:"No featured tutors yet"})}),Z.length>0&&N.k?p.a.createElement(ot.a,{height:"300px",snapping:!0},Z.map((function(t){return p.a.createElement(c.a,{xs:10,key:t.pvid},p.a.createElement(V,{data:t,height:"160px",onClick:$}))}))):p.a.createElement(kt,null,Z.map((function(t){return p.a.createElement(V,{key:t.pvid,data:t,onClick:$})}))))),p.a.createElement(Nt,{marginBottom:"5em"},p.a.createElement(c.a,{lg:24,xs:24},p.a.createElement(f.l,{content:p.a.createElement(j.Trans,{id:"Get to know our tutors from <0>{0}</0>",values:{0:b.name},components:[p.a.createElement("span",{className:"primary"})]})}),0===H.length&&p.a.createElement(f.j,{description:p.a.createElement(j.Trans,{id:"No introduction videos yet"})}),H.length>0&&p.a.createElement(ot.a,{height:"260px"},H.map((function(t){var e=rt.d+t.videoIntroductionList.path;return p.a.createElement(c.a,{lg:5,xs:10,key:t.userPvid},p.a.createElement(y.a,{preload:"none",url:e,controls:!0,width:"100%",height:N.k?160:"100%",onPlay:function(){return Y(t)}}))}))))),p.a.createElement(Nt,{gutter:48,dataLength:G.length},p.a.createElement(c.a,{lg:12,xs:24},p.a.createElement(Ot,{content:p.a.createElement(j.Trans,{id:"Find subjects that are suitable the most to you"})}),p.a.createElement(f.u,{centered:!0,className:"px0"},p.a.createElement("img",{src:rt.d+N.c,width:"80%"}))),p.a.createElement(c.a,{lg:12,xs:24,className:"overflowing-section"},p.a.createElement(o.a,{gutter:32},G.map((function(t){return p.a.createElement(jt,{key:t.value},p.a.createElement(f.d,{block:!0,size:"large",key:t.value,icon:t.icon,onClick:function(){return O({value:(n=t).value,label:n.label}),void e.push("/".concat(U.d,"/browse/tutors?subjects=").concat(n.value,"&subjectLabel=").concat(n.label));var n}},t.label))}))))),E.length>0&&p.a.createElement(p.a.Fragment,null,p.a.createElement(Nt,{marginBottom:(N.k,"0")},p.a.createElement(c.a,{lg:24,xs:24},p.a.createElement(f.l,{level:4,content:p.a.createElement(j.Trans,{id:"Not sure where/how to begin?"}),subheader:p.a.createElement(j.Trans,{id:"We have expert consultants in your area ready to help you"})}))),p.a.createElement(Nt,{justify:"start"},p.a.createElement(c.a,{lg:16,xs:24},p.a.createElement(o.a,{gutter:16,type:"flex"},E.map((function(t){return p.a.createElement(c.a,{lg:8,xs:12,key:t.whatsapp,className:"mb2em"},p.a.createElement(o.a,null,p.a.createElement(c.a,{lg:6},p.a.createElement(at.a,{type:t.gender===rt.c.male?"icon-male":"icon-female",size:30})),p.a.createElement(c.a,{lg:18},p.a.createElement(f.l,{reverse:!0,content:p.a.createElement(j.Trans,{id:"{0}",values:{0:t.name}}),subheader:p.a.createElement(s.a,null,p.a.createElement("a",{href:"https://wa.me/".concat(t.whatsapp,"?text=").concat(n._({id:"Hi {0}! I'd like to ask you something regarding the Cudy Marketplace",values:{0:t.name}})),target:"_blank",rel:"noopener noreferrer"},"+",t.whatsapp),t.city?p.a.createElement(vt,null,"".concat(t.city,", ").concat(t.country)):p.a.createElement(vt,null,t.country))}))))})))),p.a.createElement(c.a,{lg:4,xs:24},p.a.createElement(f.k,{src:"https://assets3.lottiefiles.com/temp/lf20_zsIYUf.json",width:250,height:N.k&&200}))))))}))));var xt=Object(d.b)(o.a).attrs((function(){return{type:"flex",justify:"center",align:"middle"}}))(gt(),"url(".concat(T.a,") no-repeat")),jt=Object(d.b)(c.a).attrs((function(){return{lg:12,xs:12}}))(ht(),C.a.boxShadow.mild,C.a.boxShadow.hover,N.j.mobile(bt())),kt=Object(d.b)(w.a).attrs({addArrowClickHandler:!0,slidesPerPage:6,slidesPerScroll:6,breakpoints:{414:{slidesPerPage:2,slidesPerScroll:2}},arrowLeft:p.a.createElement(a.a,{type:"left"}),arrowRight:p.a.createElement(a.a,{type:"right"})})(ft(),N.j.mobile(dt())),Ot=Object(d.b)(f.l)(pt()),Ct=Object(d.b)(Ot)(mt(),C.a.primaryColor),Nt=Object(d.b)(o.a).attrs((function(){return{type:"flex",justify:"center",align:"middle"}}))(st(),(function(t){return t.pl||"8rem"}),(function(t){return t.pr||"8rem"}),(function(t){return t.marginBottom||"4em"}),(function(t){return t.dataLength>16&&"450px"}),(function(t){return t.dataLength>16&&"scroll"}),C.a.lightGrey.two,N.j.mobile(ut())),St=d.b.img.attrs((function(t){return{src:t.src,alt:t.alt,width:t.width||"40%"}}))(lt(),(function(t){var e=t.top;return e&&e}),(function(t){var e=t.bottom;return e&&e}),(function(t){var e=t.left;return e&&e}),(function(t){var e=t.right;return e&&e}),N.j.mobile(it()))}}]);
//# sourceMappingURL=25.9189a062.chunk.js.map