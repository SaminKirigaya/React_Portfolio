(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[482],{5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(3336)},3336:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return u.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return c},deprecatedPropType:function(){return a},isMuiElement:function(){return s},ownerDocument:function(){return v},ownerWindow:function(){return p},requirePropFactory:function(){return m},setRef:function(){return w},unstable_ClassNameGenerator:function(){return V},unstable_useEnhancedEffect:function(){return b},unstable_useId:function(){return C},unsupportedProp:function(){return _},useControlled:function(){return T},useEventCallback:function(){return x},useForkRef:function(){return F},useIsFocusVisible:function(){return Z}});var r=t(5902),u=t(4036);var o=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return e.reduce((function(n,e){return null==e?n:function(){for(var t=arguments.length,r=new Array(t),u=0;u<t;u++)r[u]=arguments[u];n.apply(this,r),e.apply(this,r)}}),(function(){}))},i=t(9201);var c=function(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,u=arguments.length,o=new Array(u),i=0;i<u;i++)o[i]=arguments[i];clearTimeout(e),e=setTimeout((function(){n.apply(r,o)}),t)}return r.clear=function(){clearTimeout(e)},r};var a=function(n,e){return function(){return null}},f=t(2791),l=t.t(f,2);var s=function(n,e){var t,r;return f.isValidElement(n)&&-1!==e.indexOf(null!=(t=n.type.muiName)?t:null==(r=n.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)};function d(n){return n&&n.ownerDocument||document}var v=d;var p=function(n){return d(n).defaultView||window};t(7462);var m=function(n,e){return function(){return null}};function y(n,e){"function"===typeof n?n(e):n&&(n.current=e)}var w=y,h="undefined"!==typeof window?f.useLayoutEffect:f.useEffect,b=h,E=t(885),g=0;var k=l["useId".toString()];var C=function(n){if(void 0!==k){var e=k();return null!=n?n:e}return function(n){var e=f.useState(n),t=(0,E.Z)(e,2),r=t[0],u=t[1],o=n||r;return f.useEffect((function(){null==r&&u("mui-".concat(g+=1))}),[r]),o}(n)};var _=function(n,e,t,r,u){return null};var T=function(n){var e=n.controlled,t=n.default,r=(n.name,n.state,f.useRef(void 0!==e).current),u=f.useState(t),o=(0,E.Z)(u,2),i=o[0],c=o[1];return[r?e:i,f.useCallback((function(n){r||c(n)}),[])]};var R=function(n){var e=f.useRef(n);return h((function(){e.current=n})),f.useCallback((function(){return e.current.apply(void 0,arguments)}),[])},x=R;var A,F=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return f.useMemo((function(){return e.every((function(n){return null==n}))?null:function(n){e.forEach((function(e){y(e,n)}))}}),e)},I=!0,L=!1,P={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function S(n){n.metaKey||n.altKey||n.ctrlKey||(I=!0)}function M(){I=!1}function N(){"hidden"===this.visibilityState&&L&&(I=!0)}function O(n){var e=n.target;try{return e.matches(":focus-visible")}catch(t){}return I||function(n){var e=n.type,t=n.tagName;return!("INPUT"!==t||!P[e]||n.readOnly)||"TEXTAREA"===t&&!n.readOnly||!!n.isContentEditable}(e)}var Z=function(){var n=f.useCallback((function(n){var e;null!=n&&((e=n.ownerDocument).addEventListener("keydown",S,!0),e.addEventListener("mousedown",M,!0),e.addEventListener("pointerdown",M,!0),e.addEventListener("touchstart",M,!0),e.addEventListener("visibilitychange",N,!0))}),[]),e=f.useRef(!1);return{isFocusVisibleRef:e,onFocus:function(n){return!!O(n)&&(e.current=!0,!0)},onBlur:function(){return!!e.current&&(L=!0,window.clearTimeout(A),A=window.setTimeout((function(){L=!1}),100),e.current=!1,!0)},ref:n}},V={configure:function(n){r.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=482.1036b213.chunk.js.map