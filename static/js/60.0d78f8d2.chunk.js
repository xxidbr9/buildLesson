(this.webpackJsonpcudysg=this.webpackJsonpcudysg||[]).push([[60],{1362:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return m}));a(91);var n=a(34),c=(a(98),a(23)),o=(a(1263),a(1338)),r=a(70),i=a.n(r),u=a(26),s=a(118),d=a(28),l=a(0),_=a.n(l),p=a(43),E=a(168),O=a.n(E),S=a(13);function m(){O.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_URL:"https://backend.cudy.co",REACT_APP_FB_PIXEL_ID:"522855398595916"}).REACT_APP_PAYMENT_URL,O.a.defaults.headers.common["api-key"]=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BASE_URL:"https://backend.cudy.co",REACT_APP_FB_PIXEL_ID:"522855398595916"}).REACT_APP_PAYMENT_API_KEY;var t=JSON.parse(localStorage.getItem("userDetails"))||{},e="sg"===t.country?"SGD":"id"===t.country?"IDR":"",a=Object(l.useState)([]),r=Object(d.a)(a,2),E=r[0],m=r[1],P=Object(l.useState)({current:1,pageSize:10}),b=Object(d.a)(P,2),f=b[0],A=b[1],T=Object(l.useState)(!0),g=Object(d.a)(T,2),D=g[0],I=g[1],C=Object(l.useState)(!1),h=Object(d.a)(C,2),j=h[0],v=h[1],R=[{title:"Payment ID",dataIndex:"id"},{title:"Description",dataIndex:"description"},{title:"Amount",dataIndex:"amount",sorter:function(t,e){return t.amount-e.amount},sortDirections:["descend","ascend"],render:function(t){return"".concat(e," ").concat(Object(S.f)(t))},width:150},{title:"Booking ID",dataIndex:"booking_id",width:150},{title:"Created At",dataIndex:"createdAt"},{title:"Status",dataIndex:"status_payment.name"}];Object(l.useEffect)((function(){j||(t.email?y():(console.log("not auth"),I(!1)),v(!0))}));var y=function(){var e=Object(s.a)(i.a.mark((function e(){var a,n,c,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:f,I(!0),e.prev=2,e.next=5,O.a.post("/payments/list/transaction",{email:t.email,applicationName:"cudy-i3",limit:a.pageSize,offset:(a.current-1)*a.pageSize});case 5:n=e.sent,c=n.data.data,m(c.list.map((function(t){return Object(u.a)({key:t.id},t)}))),A(Object(u.a)({},f,{total:c.total})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("fetch error",e.t0);case 14:I(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return console.log(E),_.a.createElement(p.n,null,_.a.createElement(p.u,{className:"p2em"},_.a.createElement(n.a,{gutter:32},_.a.createElement(c.a,null,_.a.createElement(o.a,{loading:D,columns:R,dataSource:E,onChange:function(t,e,a,n){A(t),y(t)},pagination:f})))))}}}]);