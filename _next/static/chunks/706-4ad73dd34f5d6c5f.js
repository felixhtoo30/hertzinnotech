(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{3193:function(e,r,n){"use strict";var t=n(5893),o=n(6448),a=n.n(o);r.Z=function(){return(0,t.jsx)("footer",{className:a().Footer,children:(0,t.jsxs)("div",{className:a().Footer__Layout,children:[(0,t.jsx)("p",{className:a().Footer__Title,children:"Contact Us"}),(0,t.jsxs)("ul",{className:a().Footer__ContactInfo,children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"mailto:info@hertzinnotech.com",children:[(0,t.jsx)("img",{src:"./images/icon_mail.png"}),"info@hertzinnotech.com"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"tel:+959-408700405",children:[(0,t.jsx)("img",{src:"./images/icon_ph.png"}),"+959-408700405"]})})]}),(0,t.jsxs)("div",{className:a().Footer__Social,children:[(0,t.jsx)("a",{href:"//facebook.com/hertzinnotech",children:(0,t.jsx)("img",{src:"./images/icon_f_facebook.png"})}),(0,t.jsx)("a",{href:"//linkedin.com/in/hertzinnotech",children:(0,t.jsx)("img",{src:"./images/icon_f_linkedin.png"})}),(0,t.jsx)("a",{href:"//wa.me/+959408700405",children:(0,t.jsx)("img",{src:"./images/icon_f_whatsapp.png"})}),(0,t.jsx)("a",{href:"skype:live:hertzinnotech",children:(0,t.jsx)("img",{src:"./images/icon_f_skype.png"})}),(0,t.jsx)("a",{href:"viber://chat?number=09408700405",children:(0,t.jsx)("img",{src:"./images/icon_f_viber.png"})}),(0,t.jsx)("a",{href:"//telegram.me/+959408700405",children:(0,t.jsx)("img",{src:"./images/icon_f_telegram.png"})})]})]})})}},7673:function(e,r,n){"use strict";var t=n(5893),o=n(7294),a=n(1664),i=n(5050),c=n.n(i);r.Z=function(){var e=(0,o.useState)(!1),r=e[0],n=e[1];return(0,t.jsx)("header",{className:c().Header,children:(0,t.jsxs)("div",{className:c().Header__Layout,children:[(0,t.jsx)("div",{className:"".concat(c().Header__Logo),children:(0,t.jsx)("img",{src:"./images/hit_logo.svg"})}),(0,t.jsx)("div",{className:"".concat(c().Header__BtnMenu," ").concat(r?c().Clicked:""),onClick:function(){return n(!r)},children:(0,t.jsx)("div",{})}),(0,t.jsx)("div",{className:"".concat(c().Header__Nav," ").concat(r?c().Show:""),children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/about-us",children:(0,t.jsx)("a",{children:"About Us"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(a.default,{href:"/contact-us",children:(0,t.jsx)("a",{children:"Contact Us"})})})]})})]})})}},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(6273),c=n(387),s=n(7190);var l={};function u(e,r,n,t){if(e&&i.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var r=t(i.resolveHref(o,e.href,!0),2),n=r[0],a=r[1];return{href:n,as:e.as?i.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=f.href,_=f.as,h=e.children,v=e.replace,p=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var x=(r=a.default.Children.only(h))&&"object"===typeof r&&r.ref,j=t(s.useIntersection({rootMargin:"200px"}),2),y=j[0],b=j[1],H=a.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);a.default.useEffect((function(){var e=b&&n&&i.isLocalURL(d),r="undefined"!==typeof g?g:o&&o.locale,t=l[d+"%"+_+(r?"%"+r:"")];e&&!t&&u(o,d,_,{locale:r})}),[_,d,b,g,n,o]);var k={ref:H,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:s,scroll:c}))}(e,o,d,_,v,p,m,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&u(o,d,_,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var F="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(_,F,o&&o.locales,o&&o.domainLocales);k.href=L||i.addBasePath(i.addLocale(_,F,o&&o.defaultLocale))}return a.default.cloneElement(r,k)};r.default=f},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!i,s=o.useRef(),l=t(o.useState(!1),2),u=l[0],f=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=c.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,i=t.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[n,r,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=n(7294),a=n(9311),i="undefined"!==typeof IntersectionObserver;var c=new Map},6448:function(e){e.exports={Footer:"Footer_Footer__Sr4ed",Footer__Layout:"Footer_Footer__Layout___Xho8",Footer__Title:"Footer_Footer__Title__ivW12",Footer__ContactInfo:"Footer_Footer__ContactInfo__aPFF8",Footer__Social:"Footer_Footer__Social__CvxOV"}},5050:function(e){e.exports={Header:"Header_Header__qXrf7",Header__Layout:"Header_Header__Layout__lQhaX",Header__Logo:"Header_Header__Logo__X8g9B",Header__Nav:"Header_Header__Nav__wfvCo",Show:"Header_Show__ciq_g",Header__BtnMenu:"Header_Header__BtnMenu__01Hik",Clicked:"Header_Clicked__Ik8Y9"}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}}]);