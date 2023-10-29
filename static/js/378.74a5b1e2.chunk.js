"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[378],{908:function(t,e,s){s.r(e),s.d(e,{default:function(){return P}});var n=s(885),i=s(2791);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},r.apply(this,arguments)}var o={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},a=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=r({},o,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),i=n.length;if(i)for(var a=0;a<i;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),u=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),c=function(){function t(t,e){a.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=u.typeHtmlChars(t,e,s);var n=0,r=t.substring(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+o),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substring(e+i).charAt(0)&&(i++,!(e+i>t.length)););var a=t.substring(0,e),c=t.substring(a.length+1,e+i),l=t.substring(e+i+1);t=a+c+l,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=u.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}(),l=s(822),p=s(5956),h=s(9706),d=s(2818);function f(){var t=!1,e=new Set,s={subscribe:function(t){return e.add(t),function(){e.delete(t)}},start:function(s,n){(0,p.k)(t,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");var i=[];return e.forEach((function(t){i.push((0,d.d)(t,s,{transitionOverride:n}))})),Promise.all(i)},set:function(s){return(0,p.k)(t,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),e.forEach((function(t){(0,h.gg)(t,s)}))},stop:function(){e.forEach((function(t){!function(t){t.values.forEach((function(t){return t.stop()}))}(t)}))},mount:function(){return t=!0,function(){t=!1,s.stop()}}};return s}var g=s(9829),y=s(2199);var m=function(){var t=(0,g.h)(f);return(0,y.L)(t.mount,[]),t},b=s(1518),v=s(5917),k=s(5758),C=s(5335),w=s.p+"static/media/myimgbg.3a626f04fbb301175133.png",S=s(184);var P=function(){var t=(0,l.v)().scrollY,e=(0,i.useState)(""),s=(0,n.Z)(e,2),r=s[0],o=s[1],a=m(),u=m(),p=[],h=[],d=[],f=[],g=(Array.from({length:100},(function(t,e){var s=2*Math.PI*e/100,n=400*Math.cos(s),i=150*Math.sin(s);p.push(n),h.push(i)})),Array.from({length:100},(function(t,e){var s=2*Math.PI*e/100,n=-200*Math.cos(s),i=200*Math.sin(s);d.push(n),f.push(i)})),(0,b.H)(t,[0,window.innerHeight],[0,-1e3]));return(0,i.useEffect)((function(){window.innerWidth>319&&window.innerWidth<359?o("0.65rem"):o("0.75rem"),a.start({scale:[.3,1,.3],x:p,y:h,transition:{duration:10,repeat:1/0,ease:"linear"}}),u.start({scale:[.3,1,.3],x:d,y:f,transition:{duration:10,repeat:1/0,ease:"linear"}}),console.log(window.innerHeight);var t=new c(".typing-animation",{strings:["Samin Arnob.","A Full-Stack Developer.","A MERN Stack Developer.","Always Free For Your Project."],typeSpeed:100,backSpeed:50,loop:!0});return function(){t.destroy()}}),[]),(0,S.jsx)(i.Fragment,{children:(0,S.jsxs)("div",{className:"sidePageSize",style:{overflowY:"hidden",overflowX:"hidden"},children:[" ",(0,S.jsxs)(v.E.div,{animate:{x:[-1e3,0],transition:{duration:.8,type:"spring",stiffness:350}},whileHover:{scale:[1,1.1],transition:{duration:1,type:"spring",stiffness:350}},className:"skillDetails d-flex justify-content-center align-items-center flex-column",style:{cursor:"pointer",x:g},children:[(0,S.jsx)("p",{className:"mx-auto",children:"Hello_\ud83d\udc97"}),(0,S.jsxs)("p",{style:{fontSize:"1.5rem"},className:"text-center",children:["I'm ",(0,S.jsx)("span",{className:"typing-animation",style:{fontWeight:"bold",color:"rgb(152, 28, 253)"}})]}),(0,S.jsx)("p",{className:"text-center",children:"I Believe Coding Is Like An Artwork. So, When I Code I Try To Make It As Precise As Possible \ud83d\udc97"}),(0,S.jsxs)("p",{children:[(0,S.jsxs)(v.E.a,{href:"https://github.com/SaminKirigaya",whileHover:{scale:[1,1.3],borderRadius:"0.3rem"},transition:{type:"spring",stiffness:400},type:"button",className:"btn btn-primary",style:{paddingTop:".25rem",paddingBottom:".25rem",paddingLeft:".5rem",paddingRight:".5rem",fontSize:r,marginRight:"1rem",backgroundColor:"rgb(152, 28, 253)",color:"white",border:"none",borderRadius:"0rem"},children:["Github ",(0,S.jsx)(k.Z,{fontSize:"small"})]}),(0,S.jsxs)(v.E.a,{href:"https://www.facebook.com/samin.arnob.3",whileHover:{scale:[1,1.2],borderRadius:"0.3rem"},transition:{type:"spring",stiffness:400},type:"button",className:"btn btn-primary",style:{paddingTop:".25rem",paddingBottom:".25rem",paddingLeft:".5rem",paddingRight:".5rem",fontSize:r,backgroundColor:"rgb(152, 28, 253)",color:"white",border:"none",borderRadius:"0rem"},children:["Let's Talk ",(0,S.jsx)(C.Z,{fontSize:"small"})]})]})]}),(0,S.jsx)(v.E.div,{animate:{scale:[1.1,1,1.1]},transition:{duration:1.8,repeat:"infinity"},className:"introPageImgBox d-flex justify-content-center align-items-center flex-column",children:(0,S.jsx)(i.Suspense,{fallback:(0,S.jsx)("div",{className:"container-fluid loader d-flex justify-content-center align-items-center",children:(0,S.jsx)("div",{className:"spinner-border desLoad",style:{width:"3rem",height:"3rem"},role:"status",children:(0,S.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),children:(0,S.jsx)("img",{style:{width:"100%",height:"100%",objectFit:"fill"},src:w})})}),(0,S.jsx)(v.E.div,{initial:!1,animate:a,transition:{duration:9},className:"firstBall"}),(0,S.jsx)(v.E.div,{initial:!1,animate:u,className:"secondBall"})]})})}},5758:function(t,e,s){var n=s(4836);e.Z=void 0;!function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var s=o(e);if(s&&s.has(t))return s.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if("default"!==r&&Object.prototype.hasOwnProperty.call(t,r)){var a=i?Object.getOwnPropertyDescriptor(t,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=t[r]}n.default=t,s&&s.set(t,n)}(s(2791));var i=n(s(5649)),r=s(184);function o(t){if("function"!==typeof WeakMap)return null;var e=new WeakMap,s=new WeakMap;return(o=function(t){return t?s:e})(t)}var a=(0,i.default)((0,r.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");e.Z=a},5335:function(t,e,s){var n=s(4836);e.Z=void 0;var i=n(s(5649)),r=s(184),o=(0,i.default)((0,r.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Mail");e.Z=o}}]);
//# sourceMappingURL=378.74a5b1e2.chunk.js.map