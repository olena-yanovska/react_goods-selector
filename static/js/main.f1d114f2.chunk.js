(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),a=c(4),n=c(5),d=c(8),l=c(7),i=c(1),r=c.n(i),u=(c(13),c(14),c(6)),b=c.n(u),j=c(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,o=new Array(s),n=0;n<s;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.addSelectedGood=function(t){e.setState({selectedGood:t})},e.deleteSelectedGood=function(){e.setState({selectedGood:""})},e}return Object(n.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("main",{className:"section container",children:[this.state.selectedGood?Object(j.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(this.state.selectedGood," is selected"),Object(j.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.deleteSelectedGood})]}):Object(j.jsx)("h1",{className:"title",children:"No goods selected"}),Object(j.jsx)("table",{className:"table",children:Object(j.jsx)("tbody",{children:h.map((function(t){return Object(j.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":e.state.selectedGood===t}),children:[Object(j.jsx)("td",{children:e.state.selectedGood===t?Object(j.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.deleteSelectedGood,children:"-"}):Object(j.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.addSelectedGood(t)},children:"+"})}),Object(j.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(r.a.Component);o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f1d114f2.chunk.js.map