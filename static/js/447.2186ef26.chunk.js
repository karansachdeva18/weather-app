"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[447],{7447:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});e(2791);var r=e(4483),a=e(1226),u=e(1714),i=e(3383),c=e(184),o=function(n){var t=n.dt,e=n.temp,o=n.weather,d=n.units;return(0,c.jsxs)("div",{className:"temp-card",children:[(0,c.jsx)("div",{children:(0,u.h)(t)}),(0,c.jsx)(r.G,{icon:a.U[o[0].main],title:o[0].description}),(0,c.jsxs)("div",{children:[(0,i.N)(e)," ",(0,c.jsx)("sup",{children:"o"}),"metric"===d?"C":"F"]})]})},d=function(n){var t=n.hourly,e=n.units;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Today's Weather"}),(0,c.jsx)("div",{className:"today-details-container",children:t.map((function(n,t){return(0,c.jsx)(o,{dt:n.dt,temp:n.temp,weather:n.weather,units:e},"hours".concat(t))}))})]})}},1226:function(n,t,e){e.d(t,{U:function(){return a}});var r=e(3174),a={Thunderstorm:r.$iP,Drizzle:r.yz3,Rain:r.$w6,Snow:r.jOV,Mist:r.DjS,Smoke:r.DjS,Haze:r.DjS,Dust:r.DjS,Fog:r.DjS,Sand:r.DjS,Ash:r.DjS,Squall:r.DjS,Tornado:r.DjS,Clear:r.enB,Clouds:r.uM9}},1714:function(n,t,e){e.d(t,{h:function(){return u},u:function(){return a}});var r={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},a=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)return new Date(1e3*n).toDateString();var e=new Date(1e3*n);return{date:"".concat(e.getDate(),"/").concat(e.getMonth()),day:r[e.getDay()]}},u=function(n){var t=new Date(1e3*n).getHours();return t>12?"".concat(t-12," PM"):"".concat(t," AM")}},3383:function(n,t,e){e.d(t,{N:function(){return r}});var r=function(n){return n.toFixed(0)}}}]);
//# sourceMappingURL=447.2186ef26.chunk.js.map