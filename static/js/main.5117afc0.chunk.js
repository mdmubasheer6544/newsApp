(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{11:function(e,t,a){e.exports={cardContainer:"acqsWZwNll8rnquVnJDyz",cardTitle:"_1d6S7vesE5fVveh8jQvaQ9",cardImg:"WHBvYW-JLUQT542S2SLJr",publishDate:"_3zhLttRb7aXD2i-x2lq9Bt",description:"_159-2-Auh2QlusQIsrO_I_"}},12:function(e,t,a){e.exports={horiCard:"_1Um9xVH3KPuyGnZTbLKU5S",imgCard:"_3-EEbyJ3HutAhVFAMHgroH",horiDescription:"_2O9jZV186Tj_-B8Au-NIiI",publishDate:"_1zG1iHGjIZBeuyNtk9XJAw"}},38:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(29),r=a.n(s),i=(a(38),a(39),a(40),a(33)),j=a(14),o=a(8),l=a(9),b=a.n(l),d=a(0),h=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],s=a[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("nav",{className:"navbar ".concat(b.a.navbarShadow," navbar-dark bg-primary text-white"),children:[Object(d.jsxs)("ul",{className:"menuItem",children:[Object(d.jsx)(o.b,{className:b.a.links,to:"/",children:"Home"}),Object(d.jsx)(o.b,{className:b.a.links,to:"/education",children:"Education"}),Object(d.jsx)(o.b,{className:b.a.links,to:"/corona",children:"Corona"}),Object(d.jsx)(o.b,{className:b.a.links,to:"/sport",children:"Sports"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",className:b.a.searchInput,value:n,onChange:function(e){s(e.target.value)},placeholder:"Search"}),""!==n.trim()&&Object(d.jsx)(o.b,{to:"/search/".concat(n),className:b.a.searchBtn,onClick:function(){s("")},children:"Search"})]})]})})},u=a(2),x=a(11),O=a.n(x),p=function(e){return Object(d.jsxs)("div",{className:O.a.cardContainer,children:[Object(d.jsx)("img",{src:e.urlToImage,className:O.a.cardImg,alt:"..."}),Object(d.jsxs)("div",{className:O.a.cardTitle,children:[Object(d.jsx)("h5",{className:"title",children:e.title.substr(0,10)}),Object(d.jsx)("p",{className:O.a.description,children:e.description}),Object(d.jsx)("a",{href:"#",className:"cardLink",children:e.source.id})]}),Object(d.jsx)("small",{className:O.a.publishDate,children:"Published at: ".concat(new Date(e.publishedAt).toLocaleDateString())})]})},m=function(e){return Object(d.jsx)(d.Fragment,{children:e.newsData.map((function(e,t){var a=e.title,c=e.urlToImage,n=e.source,s=e.publishedAt,r=e.description;return Object(d.jsx)(p,{title:a,urlToImage:c,source:n,publishedAt:s,description:r},t)}))})},f=a(19),g=a.n(f),v=a(31),w=a(32),N=a.n(w),D=function(e){var t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),i=Object(j.a)(r,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){(function(){var t=Object(v.a)(g.a.mark((function t(){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,N.a.get(e);case 3:a=t.sent,s(a.data.articles),l(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{value:n,isLoading:o}},I=function(e){var t=D("https://newsapi.org/v2/everything?q=education&apiKey=b02daf4fea814cb4861cb42eef0a2010"),a=t.value,c=t.isLoading;return Object(d.jsxs)(d.Fragment,{children:[c&&Object(d.jsx)("h3",{children:Object(d.jsx)("b",{children:"Loading..."})}),!c&&Object(d.jsx)(m,{newsData:a})]})},y=function(){var e=D("https://newsapi.org/v2/everything?q=corona&apiKey=b02daf4fea814cb4861cb42eef0a2010"),t=e.value,a=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[a&&Object(d.jsx)("h3",{children:Object(d.jsx)("b",{children:"Loading..."})}),!a&&Object(d.jsx)(m,{newsData:t})]})},L=function(){var e=D("https://newsapi.org/v2/everything?q=sports&apiKey=b02daf4fea814cb4861cb42eef0a2010"),t=e.value,a=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[a&&Object(d.jsx)("h3",{children:Object(d.jsx)("b",{children:"Loading..."})}),!a&&Object(d.jsx)(m,{newsData:t})]})},C=a(12),S=a.n(C),F=function(e){return Object(d.jsxs)("div",{className:S.a.horiCard,children:[Object(d.jsx)("div",{className:S.a.horiImg,children:Object(d.jsx)("img",{src:e.urlToImage,className:S.a.imgCard,alt:""})}),Object(d.jsxs)("div",{className:S.a.horiDescription,children:[Object(d.jsx)("h4",{children:e.title}),Object(d.jsx)("p",{children:e.description}),Object(d.jsx)("a",{href:"#",className:"cardLink",children:e.source.id}),Object(d.jsx)("small",{className:S.a.publishDate,children:"Published at: ".concat(new Date(e.publishedAt).toLocaleDateString())})]})]})},_=function(e){return Object(d.jsx)(d.Fragment,{children:e.newsData.map((function(e,t){var a=e.title,c=e.urlToImage,n=e.source,s=e.publishedAt,r=e.description;return Object(d.jsx)(F,{title:a,urlToImage:c,source:n,publishedAt:s,description:r},t)}))})},k=function(){var e=D("https://newsapi.org/v2/top-headlines?country=us&apiKey=b02daf4fea814cb4861cb42eef0a2010"),t=e.value,a=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[a&&Object(d.jsx)("h3",{children:Object(d.jsx)("b",{children:"Loading..."})}),!a&&Object(d.jsx)(_,{newsData:t})]})},A=function(e){var t=Object(u.f)().searchKey,a="https://newsapi.org/v2/everything?q=".concat(t,"&apiKey=b02daf4fea814cb4861cb42eef0a2010"),c=D(a),n=c.value,s=c.isLoading;return Object(d.jsxs)(d.Fragment,{children:[s&&Object(d.jsx)("h3",{children:Object(d.jsx)("b",{children:"Loading..."})}),!s&&Object(d.jsx)(m,{newsData:n})]})},T=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(h,Object(i.a)({},e)),Object(d.jsx)("div",{className:b.a.mainContainer,children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",component:k}),Object(d.jsx)(u.a,{exact:!0,path:"/education",component:I}),Object(d.jsx)(u.a,{exact:!0,path:"/corona",component:y}),Object(d.jsx)(u.a,{exact:!0,path:"/sport",component:L}),Object(d.jsx)(u.a,{exact:!0,path:"/search/:searchKey",component:A})]})}),Object(d.jsx)("footer",{className:b.a.footer,children:Object(d.jsxs)("div",{children:["Md|Mubasheer|Development|Project",Object(d.jsx)("br",{}),"\xa9Copy2021.All rights reserved."]})})]})})},J=function(){return Object(d.jsx)(o.a,{children:Object(d.jsx)(T,{})})};var K=function(){return Object(d.jsx)(J,{})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),B()},9:function(e,t,a){e.exports={mainContainer:"_3m8b0u7d2GPP1zQJ2hNrUh",navbarShadow:"_17nk1YJqbI13RQ2zUK0Vn0",links:"_1ffrsyIzovbHtzOKCxJHL7",searchBtn:"_3DDUsube4Zxw1RcgZgYDmS",searchInput:"_3FgmEiwfiY9CJOXPs1Ivom",footer:"IbxfABvuMuMWz576jjfJ9"}}},[[66,1,2]]]);
//# sourceMappingURL=main.5117afc0.chunk.js.map