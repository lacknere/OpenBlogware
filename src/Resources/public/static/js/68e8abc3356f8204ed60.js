(window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).push([[618],{3449:function(){},3618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n(4390);let{Mixin:r}=Shopware;var o={template:"{% block werkl_cms_element_blog_detail %}\r\n    <div class=\"werkl-cms-el-blog-detail\">\r\n        <h2>{{ $tc('werkl-blog.elements.detail.component.elementHeadline') }}</h2>\r\n        <sw-alert variant=\"info\">\r\n            {{ $tc('werkl-blog.elements.detail.component.infoText') }}\r\n        </sw-alert>\r\n    </div>\r\n{% endblock %}\r\n",mixins:[r.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog-detail")}}}},4390:function(e,t,n){var r=n(3449);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(534).A)("9bfd0f2c",r,!0,{})},534:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=a[0],i={id:e+":"+o,css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}n.d(t,{A:function(){return m}});var o,a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),l=null,d=0,c=!1,u=function(){},p=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){c=n,p=o||{};var a=r(e,t);return v(a),function(t){for(var n=[],o=0;o<a.length;o++){var i=s[a[o].id];i.refs--,n.push(i)}t?v(a=r(e,t)):a=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete s[i.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(h){var o=d++;t=y.bind(null,r=l||(l=g()),o,!1),n=y.bind(null,r,o,!0)}else t=C.bind(null,r=g()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var w=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var a=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function C(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);