(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[46],{6886:function(e,t,r){"use strict";r.d(t,{DU:function(){return p},W0:function(){return o},p6:function(){return f},yW:function(){return s},zp:function(){return c}});var n=r(5861),a=r(7757),i=r.n(a),u=r(1243),c=function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5046:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(5861),a=r(9439),i=r(7757),u=r.n(i),c=r(2791),s=r(6886),o=r(7689),p=r(2007),f=r.n(p),h=r(184),v=function(e){var t=e.reviews;return(0,h.jsx)("ul",{children:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("b",{children:e.author}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})};v.prototype={reviews:f().arrayOf(f().shape({id:f().string.isRequired,author:f().string.isRequired,content:f().string.isRequired}).isRequired).isRequired};var d=r(7596),b=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],p=(0,c.useState)(null),f=(0,a.Z)(p,2),b=f[0],l=f[1],m=(0,o.UO)().movieId,y=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(null),e.next=4,(0,s.DU)(m);case 4:t=e.sent,r=t.data,i(r.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),l(e.t0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),y.current&&!r.length?(0,h.jsx)("p",{children:"We don't have any reviews for this movie"}):(y.current=1,(0,h.jsxs)(h.Fragment,{children:[b&&d.Am.warning(b),(0,h.jsx)(v,{reviews:r}),";"]}))}},888:function(e,t,r){"use strict";var n=r(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=46.16cac3e0.chunk.js.map