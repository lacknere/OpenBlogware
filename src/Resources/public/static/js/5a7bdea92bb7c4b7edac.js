(window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).push([[134],{8014:function(){},3134:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n(5003);let{Mixin:r}=Shopware;var o={template:"{% block werkl_cms_element_blog_listing %}\r\n<div class=\"werkl-cms-el-blog-listing\">\r\n    <h2>{{ $tc('werkl-blog.elements.listing.component.elementHeadline') }}</h2>\r\n    <sw-alert variant=\"info\">\r\n        {{ $tc('werkl-blog.elements.listing.component.infoText') }}\r\n    </sw-alert>\r\n</div>\r\n{% endblock %}\r\n",mixins:[r.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("blog")}}}},5003:function(e,t,n){var r=n(8014);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(534).A)("064e44fe",r,!0,{})},534:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],i=s[0],a={id:e+":"+o,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}n.d(t,{A:function(){return m}});var o,s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=s&&(document.head||document.getElementsByTagName("head")[0]),l=null,d=0,c=!1,u=function(){},p=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){c=n,p=o||{};var s=r(e,t);return g(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=i[s[o].id];a.refs--,n.push(a)}t?g(s=r(e,t)):s=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(b(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(h){var o=d++;t=y.bind(null,r=l||(l=v()),o,!1),n=y.bind(null,r,o,!0)}else t=C.bind(null,r=v()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var w=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function C(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),p.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);