(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[49],{1113:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));a(284);var n=a(105),r=(a(98),a(23)),i=(a(91),a(34)),l=a(3),c=a(5),o=a(0),s=a.n(o),d=a(43),u=a(10),m=a(13),f=a(45);function b(){var e=Object(l.a)(["\n\t&& {\n\t\th4 {\n\t\t\tfont-size: 1em;\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"]);return b=function(){return e},e}function p(){var e=Object(l.a)(["\n\t&:not(:last-child) {\n\t\tborder-bottom: 1px solid #eee;\n\t\tmargin-bottom: 1em;\n\t}\n"]);return p=function(){return e},e}function E(){var e=Object(l.a)(["\n\t&:not(:last-child) {\n\t\tborder-bottom: 1px solid #eee;\n\t\tpadding-bottom: 1em;\n\t}\n"]);return E=function(){return e},e}var h=Object(u.b)(d.l)(E()),g=Object(u.b)(i.a)(p()),v=Object(u.b)(d.l)(b(),f.a.greyColor),y=localStorage.getItem("token");function j(e){var t=e.title,a=void 0===t?"":t,i=e.description,l=void 0===i?"":i,o=e.download,u=void 0===o?"":o,f=e.extra,b=void 0===f?"":f,p=e.loading;return u?s.a.createElement(n.a,{loading:p,active:!0,paragraph:{rows:1}},s.a.createElement(g,{type:"flex",justify:"space-between"},s.a.createElement(r.a,{xs:24,lg:12},s.a.createElement(d.l,{reverse:!0,content:a,subheader:l})),s.a.createElement(r.a,{xs:24,lg:12,style:{textAlign:m.k?"left":"right"}},y&&s.a.createElement("a",{href:m.r+u,target:"_blank",rel:"noopener noreferrer"},s.a.createElement(d.e,{icon:"eye",style:{marginRight:0}},"\xa0 ",s.a.createElement(c.Trans,{id:"View"})))))):b?s.a.createElement(n.a,{loading:p,active:!0,paragraph:{rows:1}},s.a.createElement(g,{type:"flex",justify:"space-between",align:"middle"},s.a.createElement(r.a,{xs:24,lg:12},s.a.createElement(d.l,{reverse:!0,content:a,subheader:l})),s.a.createElement(r.a,{xs:24,lg:12,style:{textAlign:m.k?"left":"right"}},s.a.createElement(v,{content:b,level:4})))):s.a.createElement(n.a,{loading:p,active:!0,paragraph:{rows:1}},s.a.createElement(h,{reverse:!0,content:a,subheader:l}))}},1342:function(e,t,a){"use strict";a.r(t);var n=a(155),r=a(26),i=(a(154),a(61)),l=a(28),c=a(0),o=a.n(c),s=a(43),d=a(66),u=a(5),m=a(82),f=a(285),b=a(1113);function p(e){var t=e.userCertifications,a=e.unauthorizedUser,n=e.loading;return o.a.createElement("div",null,0===t.length?o.a.createElement(s.j,{description:a?o.a.createElement(u.Trans,{id:"This tutor didn't specify any certifications yet"}):o.a.createElement(u.Trans,{id:"You haven't set any certifications yet"})}):t.map((function(e){var t=e.name,r=e.issuer,i=e.issuedDate,l=e.relativePath,c=String(i),s="".concat(t," (").concat(c.slice(0,4),")");return o.a.createElement(b.a,{download:l,key:t,loading:n,title:s,description:r,unauthorizedUser:a})})))}var E=a(13),h=(a(92),a(4)),g=(a(366),a(178)),v=(a(282),a(99)),y=(a(568),a(367)),j=(a(91),a(34)),O=(a(98),a(23)),C=a(19),T=a(3),w=a(80),x=a(177),k=a(364),S=a(1083),U=a(10),D=a(1096);function z(){var e=Object(T.a)(["\n\ttext-align: center;\n\tdisplay: block;\n\tpadding: 2em;\n\tbackground: #f3f3f3;\n\tborder-radius: 8px;\n\tmargin-bottom: 2em;\n\th4 {\n\t\tfont-size: 1.2em;\n\t}\n\t> p {\n\t\tfont-size: 4em;\n\t}\n"]);return z=function(){return e},e}function _(){var e=Object(T.a)(["\n\tposition: relative;\n\t&:hover {\n\t\t.delete {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tvisibility: visible;\n\t\t}\n\t}\n\t.delete {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tvisibility: hidden;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\tborder-radius: 50%;\n\t\twidth: 25px;\n\t\tcolor: #ff9d00;\n\t\theight: 25px;\n\t\tz-index: 99;\n\t\t&:hover {\n\t\t\tbackground: #eee;\n\t\t}\n\t}\n"]);return _=function(){return e},e}var N=U.b.div(_()),Y=U.b.div(z());function A(e){var t=e.yearList,a=e.loadingUpload,n=e.i18n,r=e.handlers,i=Object(C.a)(e,["yearList","loadingUpload","i18n","handlers"]),l=i.localFile,c=i.isAdding,d=i.certifications,m=r.handleDelete,f=r.handleUpdateCert,b=r.handleAddNewField,p=r.setEditMode,E=r.handleSave,T=r.handleUploadCert,U=r.handleUploadToLocal,D=r.handleCancel;return o.a.createElement("div",{"data-index":"cert"},c?o.a.createElement(w.c,{onSubmit:E,initialValues:{name:"",issuer:""},validationSchema:F(n)},(function(e){var r=e.handleSubmit;return o.a.createElement(v.a,{layout:"vertical",onSubmit:r},o.a.createElement(N,null,l.file?l.actual?o.a.createElement(s.a,{showIcon:!0,type:"success",message:o.a.createElement(u.Trans,{id:"Your certificate is uploaded. Now please fill in the details of the certificate."})}):o.a.createElement(s.d,{block:!0,style:{marginBottom:"2em"},type:"dashed",icon:"upload",loading:a,onClick:T},"\xa0 ",o.a.createElement(u.Trans,{id:"Upload this certificate now"})):o.a.createElement(s.y,{beforeUpload:U,multiple:!1,listType:"picture",style:{marginBottom:"2em"}},o.a.createElement(Y,null,o.a.createElement("p",null,o.a.createElement(h.a,{type:"inbox"})),o.a.createElement(s.l,{content:o.a.createElement(u.Trans,{id:"Click or drag and drop your certification"}),subheader:o.a.createElement(u.Trans,{id:"Supported formats: .pdf, .doc, .docx, .png, .jpg, .jpeg"}),level:4}))),o.a.createElement(x.a,{name:"name",placeholder:n._({id:"Name of certification"}),label:o.a.createElement(u.Trans,{id:"Name of certification"})}),o.a.createElement(j.a,{gutter:16},o.a.createElement(O.a,{lg:16},o.a.createElement(x.a,{name:"issuer",placeholder:n._({id:"Issuer"}),label:o.a.createElement(u.Trans,{id:"Issuer"})})),o.a.createElement(O.a,{lg:8},o.a.createElement(k.a,{name:"issuedDate",placeholder:n._({id:"Year issued"}),options:t,label:o.a.createElement(u.Trans,{id:"Year issued"})})))),o.a.createElement(S.a,{type:"primary",size:"large"},o.a.createElement(u.Trans,{id:"Save changes"}))," ","\xa0",o.a.createElement(s.e,{size:"large",onClick:D},o.a.createElement(u.Trans,{id:"Cancel"})))})):o.a.createElement(o.a.Fragment,null,d.map((function(e,a){var n=e.name,r=e.issuer,i=e.issuedDate,l=e.pvid;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w.c,{onSubmit:f,initialValues:{name:n,issuer:r,pvid:Number(l),issuedDate:i}},(function(a){var n=a.handleSubmit;return o.a.createElement(v.a,{layout:"vertical",onSubmit:n,style:{marginBottom:"2em"}},o.a.createElement(N,null,o.a.createElement(x.a,{name:"name",placeholder:"Name of certification",label:o.a.createElement(u.Trans,{id:"Name of certification"})}),o.a.createElement(j.a,{gutter:16},o.a.createElement(O.a,{lg:16},o.a.createElement(x.a,{name:"issuer",placeholder:"Issuer",label:o.a.createElement(u.Trans,{id:"Issuer"})})),o.a.createElement(O.a,{lg:8},o.a.createElement(k.a,{name:"issuedDate",placeholder:"Year issued",options:t,label:o.a.createElement(u.Trans,{id:"Year issued"})}))),o.a.createElement(S.a,{type:"primary"},o.a.createElement(u.Trans,{id:"Update certificate"}))," ","\xa0"," ",o.a.createElement(y.a,{title:o.a.createElement(u.Trans,{id:"Delete this certificate?"}),onConfirm:function(){return m(e.pvid)}},o.a.createElement(s.e,{icon:"close"},"\xa0 ",o.a.createElement(u.Trans,{id:"Delete"})))))})),o.a.createElement(g.a,null))})),o.a.createElement(s.d,{block:!0,type:"dashed",size:"medium",icon:"plus",onClick:b,style:{marginBottom:"2em"}},"\xa0 ",o.a.createElement(u.Trans,{id:"Add a new certificate"})),o.a.createElement(s.e,{block:!0,icon:"close",onClick:function(){return p(!1)}},"\xa0 ",o.a.createElement(u.Trans,{id:"Cancel"}))))}var F=function(e){return D.object().shape({name:D.string().required(e._({id:"You have to tell the name of the certificate"})),issuer:D.string().required(e._({id:"You have to tell the issuer"})),issuedDate:D.string().required(e._({id:"You have to tell when the certificate is issued"}))})};t.default=Object(u.withI18n)()((function(e){var t=e.onEditMode,a=e.onCertifications,u=e.unauthorizedUser,b=e.fetchUser,h=e.loading,g=e.i18n,v=t.editMode,y=t.setEditMode,j=a.certifications,O=Object(c.useState)([]),C=Object(l.a)(O,2),T=C[0],w=C[1],x=Object(c.useState)(!1),k=Object(l.a)(x,2),S=k[0],U=k[1],D=Object(c.useState)({}),z=Object(l.a)(D,2),_=z[0],N=z[1],Y=f.h.map((function(e){return{value:e,label:e}})),F=Object(d.b)(m.m,{client:E.e.profileClient,onCompleted:function(){U(!1),y(""),b(),i.a.success(g._({id:"Certificate has been added"}))},onError:function(e){return Object(E.q)(e)}}),I=Object(l.a)(F,1)[0],q=Object(d.b)(m.f,{client:Object(E.l)(),onCompleted:function(){y(""),U(!1),b(),i.a.success(g._({id:"Certificate details has been updated"}))},onError:function(e){return Object(E.q)()}}),L=Object(l.a)(q,1)[0],B=Object(d.b)(m.J,{client:E.e.resourceClient,onCompleted:function(e){N((function(t){return Object(r.a)({},t,{actual:(e.uploadCertification||{}).path})}))}}),M=Object(l.a)(B,2),P=M[0],J=M[1].loading,R=Object(d.b)(m.r,{client:E.e.profileClient,onCompleted:function(){U(!1),y(""),b(),i.a.success(g._({id:"Certificate has been deleted"}))},onError:function(e){return Object(E.q)(e)}}),V=Object(l.a)(R,1)[0];return Object(c.useEffect)((function(){w(j)}),[j]),o.a.createElement(s.u,{paddingHorizontal:0,noPadding:E.k,marginBottom:0},"certifications"===v?o.a.createElement(A,{isAdding:S,localFile:_,certifications:T,yearList:Y,loadingUpload:J,i18n:g,handlers:{handleDelete:function(e){return V({variables:{pvid:Number(e)}})},handleUpdateCert:function(e,t){var a=t.setSubmitting;L({variables:e}).finally((function(){return a(!1)}))},handleAddNewField:function(){w((function(e){return[].concat(Object(n.a)(e),[{name:"",issuer:"",issuedDate:2019}])})),U(!0)},setEditMode:y,handleSave:function(e,t){var a=t.setSubmitting;e=Object(r.a)({},e,{relativePath:_.actual||"",issuedDate:e.issuedDate+"/01/01"}),I({variables:e}).finally((function(){return a(!1)}))},handleUploadCert:function(){return P({variables:{file:_.file}})},handleUploadToLocal:function(e){var t=new FileReader;return t.onloadend=function(){return N((function(a){return Object(r.a)({},a,{file:e,imagePreview:t.result})}))},t.readAsDataURL(e),!1},handleCancel:function(){y(""),U(!1),N({}),w(j)}}}):o.a.createElement(p,{unauthorizedUser:u,loading:h,userCertifications:T}))}))}}]);
//# sourceMappingURL=49.0c7c404b.chunk.js.map