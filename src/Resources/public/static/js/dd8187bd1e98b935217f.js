(window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).push([[549],{4662:function(){},3549:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(8459);let{Mixin:r}=Shopware,{EntityCollection:o,Criteria:l}=Shopware.Data;var s={template:'{% block werkl_cms_element_newest_listing_config %}\r\n<div class="werkl-cms-el-config-newest-listing">\r\n\r\n    {% block werkl_cms_element_newest_listing_config_itemCount_field %}\r\n        <sw-number-field\r\n            numberType="int"\r\n            :step="1"\r\n            :min="1"\r\n            :max="null"\r\n            v-model:value="element.config.itemCount.value"\r\n            :digits="2"\r\n            :allowEmpty="false"\r\n            :label="$tc(\'werkl-blog.elements.newestListing.config.itemCount\')"\r\n        ></sw-number-field>\r\n    {% endblock %}\r\n\r\n    {% block werkl_cms_element_newest_listing_config_offsetCount_field %}\r\n        <sw-number-field\r\n            numberType="int"\r\n            :step="1"\r\n            :min="0"\r\n            :max="null"\r\n            v-model:value="element.config.offsetCount.value"\r\n            :digits="2"\r\n            :allowEmpty="false"\r\n            :label="$tc(\'werkl-blog.elements.newestListing.config.offsetCount\')"\r\n        ></sw-number-field>\r\n    {% endblock %}\r\n\r\n    {% block werkl_cms_element_blog_listing_config_show_type %}\r\n        <sw-select-field\r\n            :label="$tc(\'werkl-blog.elements.newestListing.config.showType.label\')"\r\n            v-model:value="element.config.showType.value"\r\n        >\r\n            {% block werkl_cms_element_download_card_config_layout_select_options %}\r\n                <option value="all">{{ $tc(\'werkl-blog.elements.newestListing.config.showType.options.all\') }}</option>\r\n                <option value="select">{{ $tc(\'werkl-blog.elements.newestListing.config.showType.options.select\') }}</option>\r\n            {% endblock %}\r\n        </sw-select-field>\r\n    {% endblock %}\r\n\r\n    {% block werkl_cms_element_blog_listing_config_select_categories %}\r\n        <werkl-blog-category-tree-field\r\n            v-if="element.config.showType.value !== \'all\' && selectedCategories"\r\n            v-model:value="selectedCategories"\r\n            :label="$tc(\'werkl-blog.elements.newestListing.config.blogCategories.label\')"\r\n            :categoriesCollection="selectedCategories"\r\n            class="sw-product-detail__select-category"\r\n            :placeholder="$tc(\'werkl-blog.elements.newestListing.config.blogCategories.placeholder\')"\r\n        ></werkl-blog-category-tree-field>\r\n    {% endblock %}\r\n\r\n</div>\r\n{% endblock %}\r\n',inject:["repositoryFactory"],mixins:[r.getByName("cms-element")],data(){return{categories:[],selectedCategories:null}},computed:{blogCategoryRepository(){return this.repositoryFactory.create("werkl_blog_category")},blogListingSelectContext(){let e=Object.assign({},Shopware.Context.api);return e.inheritance=!0,e},blogCategoriesConfigValue(){return this.element.config.blogCategories.value}},watch:{selectedCategories:{handler(e){this.element.config.blogCategories.value=e.getIds(),this.$set(this.element.data,"blogCategories",e),this.$emit("element-update",this.element)}}},created(){this.createdComponent()},methods:{async createdComponent(){this.initElementConfig("blog-newest-listing"),await this.getSelectedCategories()},getSelectedCategories(){if(Shopware.Utils.types.isEmpty(this.blogCategoriesConfigValue))this.selectedCategories=new o(this.blogCategoryRepository.route,this.blogCategoryRepository.schema.entity,Shopware.Context.api,new l);else{let e=new l;e.setIds(this.blogCategoriesConfigValue),this.blogCategoryRepository.search(e,Shopware.Context.api).then(e=>{this.selectedCategories=e})}}}}},8459:function(e,t,n){var r=n(4662);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(534).A)("668d0f52",r,!0,{})},534:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var l=t[o],s=l[0],i={id:e+":"+o,css:l[1],media:l[2],sourceMap:l[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}n.d(t,{A:function(){return m}});var o,l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=l&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,g=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){g=n,u=o||{};var l=r(e,t);return h(l),function(t){for(var n=[],o=0;o<l.length;o++){var i=s[l[o].id];i.refs--,n.push(i)}t?h(l=r(e,t)):l=[];for(var o=0;o<n.length;o++){var i=n[o];if(0===i.refs){for(var a=0;a<i.parts.length;a++)i.parts[a]();delete s[i.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var l=[],o=0;o<n.parts.length;o++)l.push(b(n.parts[o]));s[n.id]={id:n.id,refs:1,parts:l}}}}function w(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(g)return d;r.parentNode.removeChild(r)}if(p){var o=c++;t=C.bind(null,r=a||(a=w()),o,!1),n=C.bind(null,r,o,!0)}else t=y.bind(null,r=w()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var v=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var l=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(l,s[t]):e.appendChild(l)}}function y(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);