(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{6886:function(e,t,r){"use strict";r.d(t,{DU:function(){return p},W0:function(){return o},p6:function(){return f},yW:function(){return s},zp:function(){return c}});var n=r(5861),a=r(7757),i=r.n(a),u=r(1243),c=function(){var e=(0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=14b7b0dab2e9101796b24880530a0048");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=14b7b0dab2e9101796b24880530a0048"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8494:function(e,t,r){"use strict";r.d(t,{M:function(){return s}});var n=r(2007),a=r.n(n),i=r(7689),u=r(1087),c=r(184),s=function(e){var t=e.films,r=(0,i.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(u.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})};s.prototype={films:a().arrayOf(a().shape({id:a().number.isRequired,title:a().string.isRequired}).isRequired).isRequired}},3983:function(e,t,r){"use strict";r.r(t);var n=r(5861),a=r(9439),i=r(7757),u=r.n(i),c=r(6886),s=r(8494),o=r(2791),p=r(7596),f=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],h=(0,o.useState)(null),b=(0,a.Z)(h,2),l=b[0],v=b[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(null),e.next=4,(0,c.zp)();case 4:t=e.sent,i(t.data.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)(f.Fragment,{children:[l&&p.Am.warning(l),(0,f.jsx)(s.M,{films:r}),";"]})}},888:function(e,t,r){"use strict";var n=r(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,u){if(u!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=983.052b1142.chunk.js.map