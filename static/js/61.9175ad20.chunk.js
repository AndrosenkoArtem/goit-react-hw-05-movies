"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[61],{6886:function(e,n,r){r.d(n,{DU:function(){return p},W0:function(){return o},p6:function(){return l},yW:function(){return u},zp:function(){return c}});var t=r(5861),i=r(7757),s=r.n(i),a=r(1243),c=function(){var e=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3061:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t,i,s=r(5861),a=r(9439),c=r(7757),u=r.n(c),o=r(2791),p=r(7689),l=r(1087),d=r(9144),f=r(168),h=r(6444),v=(0,h.ZP)(l.rU)(t||(t=(0,f.Z)(["\n  text-decoration: none;\n  color: white;\n  background-color: black;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  margin-left: 25px;\n"]))),x=h.ZP.img(i||(i=(0,f.Z)(["\n  margin-left: 25px;\n"]))),b=r(184),m=function(e){var n,r,t=e.film,i=(0,p.TH)(),s=(0,o.useRef)(i).current;if(t)return(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)(v,{to:null!==(n=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/",children:[(0,b.jsx)(d.u1R,{})," Go back"]}),(0,b.jsx)("br",{}),(0,b.jsx)(x,{src:"https://image.tmdb.org/t/p/w200/".concat(t.poster_path),alt:t.title})]}),(0,b.jsxs)("ul",{children:[(0,b.jsxs)("li",{children:[(0,b.jsx)("p",{children:t.title}),(0,b.jsxs)("p",{children:["User score:",Math.round(100*t.vote_average).toString().slice(0,2),"%"]})]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("p",{children:"Overview"}),(0,b.jsx)("p",{children:t.overview})]}),(0,b.jsxs)("li",{children:[(0,b.jsx)("p",{children:"Genres"}),(0,b.jsx)("p",{children:t.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(l.rU,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)(o.Suspense,{children:(0,b.jsx)(p.j3,{})})]})},g=r(6886),j=r(7596),w=function(){var e=(0,o.useState)(null),n=(0,a.Z)(e,2),r=n[0],t=n[1],i=(0,o.useState)(null),c=(0,a.Z)(i,2),l=c[0],d=c[1],f=(0,p.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(null),e.next=4,(0,g.yW)(f);case 4:n=e.sent,t(n.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,b.jsxs)(b.Fragment,{children:[l&&j.Am.warning(l),(0,b.jsx)(m,{film:r}),";"]})}}}]);
//# sourceMappingURL=61.9175ad20.chunk.js.map