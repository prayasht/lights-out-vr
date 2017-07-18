!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},i={}.hasOwnProperty,o=/^\.\.?(\/|$)/,a=function(e,t){for(var r,n=[],i=(o.test(t)?e+"/"+t:t).split("/"),a=0,c=i.length;a<c;a++)r=i[a],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(r){var n=a(c(t),r);return e.require(n,t)}},u=function(e,t){var n=m&&m.createHot(e),i={id:e,exports:{},hot:n};return r[e]=i,t(i.exports,l(e),i),i.exports},s=function(e){return n[e]?s(n[e]):e},p=function(e,t){return s(a(c(e),t))},f=function(e,n){null==n&&(n="/");var o=s(e);if(i.call(r,o))return r[o].exports;if(i.call(t,o))return u(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};f.alias=function(e,t){n[t]=e};var h=/\.[^.\/]+$/,d=/\/index(\.[^\/]+)?$/,y=function(e){if(h.test(e)){var t=e.replace(h,"");i.call(n,t)&&n[t].replace(h,"")!==t+"/index"||(n[t]=e)}if(d.test(e)){var r=e.replace(d,"");i.call(n,r)||(n[r]=e)}};f.register=f.define=function(e,n){if(e&&"object"==typeof e)for(var o in e)i.call(e,o)&&f.register(o,e[o]);else t[e]=n,delete r[e],y(e)},f.list=function(){var e=[];for(var r in t)i.call(t,r)&&e.push(r);return e};var m=e._hmr&&new e._hmr(p,f,t,r);f._cache=r,f.hmr=m&&m.wrap,f.brunch=!0,e.require=f}}(),function(){var e;"undefined"==typeof window?this:window;require.register("components/App.js",function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t("aframe");var c=t("preact"),l=t("aframe-react");t("aframe-particle-system-component"),t("aframe-animation-component");var u=function(e){function t(e){n(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={color:"red"},r}return o(t,e),a(t,[{key:"changeColor",value:function(){var e=["red","orange","yellow","green","blue"];this.setState({color:e[Math.floor(Math.random()*e.length)]})}},{key:"render",value:function(){return(0,c.h)(l.Scene,null,(0,c.h)("a-assets",null,(0,c.h)("img",{crossOrigin:!0,id:"groundTexture",src:"https://cdn.aframe.io/a-painter/images/floor.jpg"}),(0,c.h)("img",{crossOrigin:!0,id:"skyTexture",src:"https://cdn.aframe.io/a-painter/images/sky.jpg"})),(0,c.h)(l.Entity,{primitive:"a-plane",src:"#groundTexture",rotation:"-90 0 0",height:"100",width:"100"}),(0,c.h)(l.Entity,{primitive:"a-light",type:"ambient",color:"#445451"}),(0,c.h)(l.Entity,{primitive:"a-light",type:"point",intensity:"2",position:"2 4 4"}),(0,c.h)(l.Entity,{primitive:"a-sky",height:"2048",radius:"30",src:"#skyTexture","theta-length":"90",width:"2048"}),(0,c.h)(l.Entity,{"particle-system":{preset:"snow",particleCount:2e3}}),(0,c.h)(l.Entity,{text:{value:"Hello, A-Frame Preact!",align:"center"},position:{x:0,y:2,z:-1}}),(0,c.h)(l.Entity,{id:"box",geometry:{primitive:"box"},material:{color:this.state.color,opacity:.6},animation__rotate:{property:"rotation",dur:2e3,loop:!0,to:"360 360 360"},animation__scale:{property:"scale",dir:"alternate",dur:100,loop:!0,to:"1.1 1.1 1.1"},position:{x:0,y:1,z:-3},events:{click:this.changeColor.bind(this)}},(0,c.h)(l.Entity,{animation__scale:{property:"scale",dir:"alternate",dur:100,loop:!0,to:"2 2 2"},geometry:{primitive:"box",depth:.2,height:.2,width:.2},material:{color:"#24CAFF"}})),(0,c.h)(l.Entity,{primitive:"a-camera"},(0,c.h)(l.Entity,{primitive:"a-cursor",animation__click:{property:"scale",startEvents:"click",from:"0.1 0.1 0.1",to:"1 1 1",dur:150}})))}}]),t}(c.Component);e["default"]=u}),require.register("initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=t("preact"),o=t("./components/App"),a=n(o);document.addEventListener("DOMContentLoaded",function(){(0,i.render)((0,i.h)(a["default"],null),document.querySelector("#app"))})}),require.alias("buffer/index.js","buffer"),require.alias("process/browser.js","process"),require.alias("preact","react"),e=require("process"),require.register("___globals___",function(e,t,r){})}(),require("___globals___");