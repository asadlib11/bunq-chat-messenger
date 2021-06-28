(this["webpackJsonpbunq-chat-messenger"]=this["webpackJsonpbunq-chat-messenger"]||[]).push([[0],{102:function(e,t,a){e.exports=a(1187)},107:function(e,t,a){},1185:function(e,t,a){},1187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=(a(107),a(12)),l=a(24),i=a(16),u=a.n(i),m=a(26),d=a(1191),v=a(1192),p=a(1194),f=a(1193),g=a(62),h=a(108),b=function e(){Object(g.a)(this,e),this.id=h.random.uuid(),this.name=h.name.findName(),this.avatar=h.internet.avatar()},E=function e(t,a,n){Object(g.a)(this,e),this.id=h.random.uuid(),this.msg=a||h.lorem.words(h.helpers.randomize(Object(l.a)(Array(20).keys()))),this.isMainUser=t,this.date=n||h.date.recent()},O=new b,j=(Object(l.a)(Array(15).keys()).map((function(){return new b})).map((function(e){return{contact:e,messages:Object(l.a)(Array(50).keys()).map((function(e,t){return new E((t+1)%2===0)})).filter((function(e){return e.msg}))}})),function(e){var t=e.user,a=e.showName,n=e.welcome;return r.a.createElement("div",{className:"avatar-component"},r.a.createElement("img",{className:"avatar",src:t.avatar,alt:""}),a&&r.a.createElement("h3",{className:"avatar"},n&&"Welcome ",a))});function x(e){var t=e.contact,a=e.setContactSelected;return r.a.createElement("div",{className:"contact-box",onClick:function(){console.log("contact",t),a(t)}},r.a.createElement(j,{user:t}),r.a.createElement("div",{className:"right-section"},r.a.createElement("div",{className:"contact-box-header"},r.a.createElement("h3",{className:"avatar-title"},t.name?t.name:"Unnamed conversation"),r.a.createElement("span",{className:"time-mark"},t.lastseen?t.lastseen:"No Last Seen time"))))}var k=a(81),w=a.n(k);function y(e){var t=e.message,a=e.id,n="";switch(t.senderId){case"1":n="Wessel";break;case"2":n="Quint";break;case"3":n="Mani";break;case"4":n="Menno";break;case"5":n="Patrick";break;default:n="Unknown User"}return r.a.createElement("div",{className:"message ".concat(t.senderId===a?"sent":"received")},r.a.createElement("div",null,r.a.createElement("span",{style:{color:"Red",fontWeight:"bolder"}},n)),t.message,r.a.createElement("div",{className:"metadata"},r.a.createElement("span",{className:"date"},t.timestamp),r.a.createElement("img",{src:w.a,alt:"",className:"icon-small"})))}function C(e){var t=e.messages,a=e.id,c=e.getMoreMessages,s=e.shouldScroll,o=void 0===s||s,l=e.furtherMessages,i=e.isLoading,u=e.pollingMessage;Object(n.useEffect)((function(){var e=setInterval((function(){t.length>0&&u(t[t.length-1].id)}),3e3);return function(){return clearInterval(e)}}),[t]);var m=Object(n.useRef)(null);return Object(n.useEffect)((function(){o&&m.current.scrollIntoView()})),r.a.createElement("div",{className:"chats"},t.sort((function(e,t){return e.id-t.id})).map((function(e){return r.a.createElement(y,{message:e,key:e.id,id:a})})),t.length>=50?r.a.createElement("div",{style:{textAlign:"center"}},i?r.a.createElement(d.a,{size:"small"}):l&&r.a.createElement("button",{className:"load-more-messages",onClick:c},"Load More Messages")):"",o&&r.a.createElement("div",{style:{float:"right",clear:"both"},ref:m}))}var N=a(84),S=a.n(N),M=a(85),I=a.n(M),L=a(86),W=a.n(L);function U(e){var t=e.message,a=e.setMessage,n=e.pushMessage;return r.a.createElement("div",{className:"chat-input-box"},r.a.createElement("div",{className:"icon emoji-selector"},r.a.createElement("img",{src:S.a,alt:""})),r.a.createElement("div",{className:"chat-input"},r.a.createElement("input",{type:"text",placeholder:"Type a message",value:t,onChange:function(e){return a(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t&&n()}})),r.a.createElement("div",{className:"icon send",onClick:n},r.a.createElement("img",{src:t?W.a:I.a,alt:""})))}var A=a(49),B=a(50),P=a.n(B);function q(){return r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"banner",style:{width:"70%"}}),r.a.createElement("img",{src:P.a,alt:""}),r.a.createElement("h2",null,"Welcome to Bunqr Chat"))}var H=a(87),G=a.n(H),T=a(88),_=a.n(T),z=a(89),Q=a.n(z);function R(e){var t=e.personalChatHandler,a=e.groupChatHandler,n=e.logoutHandler;return r.a.createElement("div",{className:"buttonsBox"},r.a.createElement("div",{"data-tip":"Create Personal Chat",style:{margin:"20px auto",width:"40px",cursor:"pointer"},onClick:t},r.a.createElement("img",{src:_.a,alt:"Personal Chat"})),r.a.createElement("div",{"data-tip":"Create Group Chat",style:{margin:"20px auto",width:"40px",cursor:"pointer"},onClick:a},r.a.createElement("img",{src:G.a,alt:"Group Chat"})),r.a.createElement("div",{"data-tip":"Log Out",style:{margin:"20px auto",width:"40px",cursor:"pointer"},onClick:n},r.a.createElement("img",{style:{width:"40px"},src:Q.a,alt:"Log Out"})),r.a.createElement(A.a,null))}var V=a(90),J=[{label:"Wessel",value:"1",bgColor:"rgb(255 209 62)"},{label:"Quint",value:"2",bgColor:"rgb(242 137 42)"},{label:"Mani",value:"3",bgColor:"rgb(220 97 86)"},{label:"Menno",value:"4",bgColor:"rgb(98 182 79)"},{label:"Patrick",value:"5",bgColor:"rgb(77 147 195)"}],D=a.n(V).a.create({baseURL:"http://assignment.bunq.com",timeout:2e4}),K=a(91),$=a.n(K);function F(e){var t=e.modalVisible,a=e.conversationInfo,c=e.handleOk,s=e.handleCancel,l=Object(n.useState)([]),i=Object(o.a)(l,2),u=i[0],m=i[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){if(!(a.users.length<=0)){var e=[];a.users.map((function(t){switch(t.userid){case"1":e.push("Wessel");break;case"2":e.push("Quint");break;case"3":e.push("Mani");break;case"4":e.push("Menno");break;case"5":e.push("Patrick");break;default:e.push("Unknown User")}})),m(e)}};return r.a.createElement(v.a,{title:"Conversation Information",visible:t,onOk:c,onCancel:s,okType:"primary"},r.a.createElement("p",null,r.a.createElement("span",{style:{fontWeight:"bold"}},"Conversation Id:")," ",a.conversation.conversationId||"none",r.a.createElement("br",null),r.a.createElement("span",{style:{fontWeight:"bold"}},"Conversation Name:")," ",a.conversation.name||"none"),r.a.createElement("div",null,r.a.createElement("p",null,"Members:",r.a.createElement("ol",{style:{marginLeft:"6%"}},u.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))))}function X(e){var t=e.id,a=e.name,c=e.logout,s=Object(n.useState)([]),i=Object(o.a)(s,2),g=i[0],h=i[1],b=Object(n.useState)([]),E=Object(o.a)(b,2),k=E[0],w=E[1],y=Object(n.useState)({}),N=Object(o.a)(y,2),S=N[0],M=N[1],I=Object(n.useState)([]),L=Object(o.a)(I,2),W=L[0],B=L[1],P=Object(n.useState)(""),H=Object(o.a)(P,2),G=H[0],T=H[1],_=Object(n.useState)(""),z=Object(o.a)(_,2),Q=z[0],V=(z[1],Object(n.useState)([])),K=Object(o.a)(V,2),X=K[0],Y=K[1],Z=Object(n.useState)(!1),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),re=Object(o.a)(ne,2),ce=re[0],se=re[1],oe=r.a.useState(null),le=Object(o.a)(oe,2),ie=le[0],ue=le[1],me=r.a.useState(null),de=Object(o.a)(me,2),ve=de[0],pe=de[1],fe=r.a.useState(""),ge=Object(o.a)(fe,2),he=ge[0],be=ge[1],Ee=r.a.useState(null),Oe=Object(o.a)(Ee,2),je=Oe[0],xe=Oe[1],ke=r.a.useState(!1),we=Object(o.a)(ke,2),ye=we[0],Ce=we[1],Ne=J.filter((function(e){return e.value!==t})),Se=Object(n.useState)(!0),Me=Object(o.a)(Se,2),Ie=Me[0],Le=Me[1],We=Object(n.useState)(!0),Ue=Object(o.a)(We,2),Ae=Ue[0],Be=Ue[1],Pe=Object(n.useState)(!1),qe=Object(o.a)(Pe,2),He=qe[0],Ge=qe[1];Object(n.useEffect)((function(){Te()}),[]),Object(n.useEffect)((function(){Ve(k,Q),_e(S)}),[S,k,Q]),Object(n.useEffect)((function(){}),[Ie,Ae,He]);var Te=function(){var e=Object(m.a)(u.a.mark((function e(){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/conversation/user/".concat(t));case 3:a=e.sent,n=a.data,r=n.sort((function(e,t){return t.conversation.conversationId-e.conversation.conversationId})),h(r),c=r.slice(0,19),w(c),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,Te();case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.conversationId){e.next=6;break}return e.next=3,D.get("/conversation/".concat(t.conversationId,"/message/limited?limit=50&offset=0"));case 3:a=e.sent,n=a.data,B(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ge(!0),e.next=3,D.get("/conversation/".concat(S.conversationId,"/message/limited?limit=50&offset=").concat(W.length));case 3:t=e.sent,a=t.data,Le(!1),0===a.length&&Be(!1),B([].concat(Object(l.a)(W),Object(l.a)(a))),Ge(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.post("conversation/".concat(S.conversationId,"/message/send"),{message:G,senderId:t});case 2:return e.next=4,_e(S);case 4:T("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/conversation/".concat(S.conversationId,"/new/").concat(t));case 3:a=e.sent,n=a.data,B([].concat(Object(l.a)(W),Object(l.a)(n))),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),Ve=function(e,t){var a=e.filter((function(e){var a=e.conversation;return a.name&&""!==t?!t||a.name.toLowerCase().includes(t.toLowerCase()):a}));Y(a)},Je=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.post("/conversation/personal",{users:ie+","+t});case 3:return e.next=5,Te();case 5:se(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error occurred");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===ve.length||""===he.trim()){e.next=12;break}return e.prev=1,e.next=4,D.post("/conversation/group",{users:ve.join(",")+","+t,name:he});case 4:return e.next=6,Te();case 6:ae(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error occurred");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),Ke=function(){ae(!1),se(!1)},$e=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/conversation/".concat(S.conversationId));case 3:t=e.sent,a=t.data,xe(a),Ce(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error in opening info",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Fe=function(){Ce(!1)};return r.a.createElement("div",{className:"app"},r.a.createElement("aside",null,r.a.createElement("header",null,r.a.createElement(j,{welcome:!0,user:O,showName:a})),r.a.createElement(R,{groupChatHandler:function(){ae(!0)},personalChatHandler:function(){se(!0)},logoutHandler:c}),r.a.createElement("div",{className:"contact-boxes"},X.map((function(e){var t=e.conversation;return r.a.createElement(x,{contact:t,key:t.lastseen+t.conversationId,setContactSelected:function(e){M(e),Le(!0),Ge(!1),Be(!0)}})})),X.length>0?r.a.createElement("div",null,r.a.createElement("button",{style:{width:"100%"},onClick:function(){var e=g.slice(k.length,k.length+20);w([].concat(Object(l.a)(k),Object(l.a)(e)))}},"Load More Messages")):r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(d.a,{style:{width:"20%",margin:"auto",marginTop:"30%",marginBottom:"7%"},size:"large"}),r.a.createElement("h3",null,"Loading Messages...")))),S.conversationId?r.a.createElement("main",null,r.a.createElement("header",null,r.a.createElement("div",{"data-tip":"Conversation Information"},r.a.createElement("img",{style:{width:"29px"},src:$.a,alt:"",onClick:Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$e();case 2:case"end":return e.stop()}}),e)})))})),r.a.createElement(A.a,null),je&&r.a.createElement(F,{conversationInfo:je,handleCancel:Fe,handleOk:Fe,modalVisible:ye}),r.a.createElement(j,{user:S,showName:S.name?S.name:"Unnamed conversation"})),r.a.createElement(C,{id:t,messages:W,getMoreMessages:ze,shouldScroll:Ie,furtherMessages:Ae,isLoading:He,pollingMessage:Re}),r.a.createElement(U,{message:G,setMessage:T,pushMessage:Qe})):r.a.createElement(q,null),r.a.createElement(v.a,{title:"Create Group Chat",visible:te,onOk:De,onCancel:Ke},r.a.createElement("div",{className:"chat-input",style:{margin:"auto",textAlign:"center",marginBottom:"30px"}},r.a.createElement("h3",null,"Enter a groupchat name"),r.a.createElement("input",{type:"text",placeholder:"Enter a group chat name",style:{border:"1px outset grey"},value:he,onChange:function(e){be(e.target.value)}})),r.a.createElement("div",{style:{margin:"auto",textAlign:"center"}},r.a.createElement("h3",null,"Select people for group chat"),r.a.createElement(p.a.Group,{options:Ne,onChange:function(e){pe(e)}}))),r.a.createElement(v.a,{title:"Create Personal Chat",visible:ce,onOk:Je,onCancel:Ke},r.a.createElement("div",{style:{margin:"auto",textAlign:"center"}},r.a.createElement("h3",null,"Select a contact for personal chat"),r.a.createElement(f.a.Group,{onChange:function(e){ue(e.target.value)},value:ie},Ne.map((function(e){return r.a.createElement(f.a,{key:e.label,value:e.value},e.label)}))))))}function Y(e){var t=e.selectUser;return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement("div",{className:"banner"}),r.a.createElement("div",{style:{width:"100%",margin:"auto",marginTop:"10%",textAlign:"center"}},r.a.createElement("img",{src:P.a,alt:""}),r.a.createElement("h1",null,"Welcome to Bunqr chat"),r.a.createElement("h3",null,"Please Select your user"),r.a.createElement("div",null,J.map((function(e,a){return r.a.createElement("button",{className:"userButton",style:{background:e.bgColor},key:a,onClick:function(){return t(e)}},r.a.createElement("span",{className:"userName"},e.label))})))))}a(1185),a(1186);var Z=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){console.log("user updated",a)}),[a]),a?r.a.createElement(X,{id:a.value,name:a.label,logout:function(){c(null)}}):r.a.createElement(Y,{selectUser:function(e){c(e)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports=a.p+"static/media/BunqLogo.8bd20c99.svg"},81:function(e,t,a){e.exports=a.p+"static/media/done_all.211c1153.svg"},84:function(e,t,a){e.exports=a.p+"static/media/tag_faces.c50cc449.svg"},85:function(e,t,a){e.exports=a.p+"static/media/mic.958bf042.svg"},86:function(e,t,a){e.exports=a.p+"static/media/send.282ecb9e.svg"},87:function(e,t,a){e.exports=a.p+"static/media/group_chat.963a7dcc.svg"},88:function(e,t,a){e.exports=a.p+"static/media/personal_chat.7c72c73f.svg"},89:function(e,t,a){e.exports=a.p+"static/media/log-out.2655160e.svg"},91:function(e,t,a){e.exports=a.p+"static/media/information.1c737aa4.svg"}},[[102,1,2]]]);
//# sourceMappingURL=main.c383a461.chunk.js.map