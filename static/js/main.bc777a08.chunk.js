(this["webpackJsonpdc-extension-multi-schema"]=this["webpackJsonpdc-extension-multi-schema"]||[]).push([[0],{51:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(2),r=a.n(c),i=a(7),l=a.n(i),u=a(32),h=a(33),o=a(43),d=a(34),m=a(12),p=a(44),v=a(35),f=a(8),b=Object(f.c)(),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={connected:!1},a.handleValueChange=a.handleValueChange.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.handleConnect()}},{key:"handleConnect",value:function(){var e,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(Object(v.a)());case 2:return(e=a.sent).frame.startAutoResizer(),a.next=6,l.a.awrap(e.field.getValue());case 6:t=a.sent,this.setState({sdk:e,connected:!0,value:t,schema:e.field.schema});case 8:case"end":return a.stop()}}),null,this)}},{key:"handleValueChange",value:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.connected||!this.state.sdk){t.next=9;break}return t.prev=1,console.log(e),t.next=5,l.a.awrap(this.state.sdk.field.setValue(e));case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),null,this,[[1,7]])}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},!0===this.state.connected?s.a.createElement("div",null,this.state.sdk?s.a.createElement(f.b.Provider,{value:{sdk:this.state.sdk}},Object(f.e)(s.a.createElement(f.a,{pointer:Object(f.d)(this.state.sdk.field.schema,{}).pointer,onChange:this.handleValueChange,schema:this.state.schema,value:this.state.value,registry:b}))):null):s.a.createElement("div",null,"\xa0"))}}]),t}(s.a.Component);r.a.render(s.a.createElement(k,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.bc777a08.chunk.js.map