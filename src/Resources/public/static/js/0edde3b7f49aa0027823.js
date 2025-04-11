(window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).push([[925],{552:function(){},925:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(209);let{Mixin:r}=Shopware,{EntityCollection:o,Criteria:l}=Shopware.Data;var i={template:'{% block werkl_cms_element_blog_listing_config %}\r\n<div class="sw-cms-el-config-blog">\r\n\r\n    {% block werkl_cms_element_blog_listing_config_paginationCount_field %}\r\n    <sw-number-field\r\n        numberType="int"\r\n        :step="1"\r\n        :min="1"\r\n        :max="null"\r\n        v-model:value="element.config.paginationCount.value"\r\n        :digits="2"\r\n        :allowEmpty="false"\r\n        :label="$tc(\'werkl-blog.elements.listing.config.paginationCount\')">\r\n    </sw-number-field>\r\n    {% endblock %}\r\n\r\n    {% block werkl_cms_element_blog_listing_config_show_type %}\r\n    <sw-select-field\r\n        :label="$tc(\'werkl-blog.elements.listing.config.showType.label\')"\r\n        v-model:value="element.config.showType.value"\r\n    >\r\n        {% block werkl_cms_element_download_card_config_layout_select_options %}\r\n        <option value="all">{{ $tc(\'werkl-blog.elements.listing.config.showType.options.all\') }}</option>\r\n        <option value="select">{{ $tc(\'werkl-blog.elements.listing.config.showType.options.select\') }}</option>\r\n        {% endblock %}\r\n    </sw-select-field>\r\n    {% endblock %}\r\n\r\n\r\n    {% block werkl_cms_element_blog_listing_config_select_categories %}\r\n    <werkl-blog-category-tree-field\r\n        v-if="element.config.showType.value !== \'all\' && selectedCategories"\r\n        v-model:value="selectedCategories"\r\n        :label="$tc(\'werkl-blog.elements.listing.config.blogCategories.label\')"\r\n        :categoriesCollection="selectedCategories"\r\n        class="sw-product-detail__select-category"\r\n        :placeholder="$tc(\'werkl-blog.elements.listing.config.blogCategories.placeholder\')">\r\n    </werkl-blog-category-tree-field>\r\n    {% endblock %}\r\n\r\n    {% block werkl_cms_element_blog_listing_config_show_filter_select %}\r\n    <sw-card\r\n        :title="$tc(\'werkl-blog.elements.listing.config.showFilter.label\')"\r\n        :hero="false"\r\n        :isLoading="false"\r\n        :large="false"\r\n        class="sw-blog-config-filter">\r\n\r\n        <sw-checkbox-field\r\n            :label="$tc(\'werkl-blog.elements.listing.config.showFilter.options.filter.category\')"\r\n            v-model:value="element.config.showCategoryFilter.value">\r\n        </sw-checkbox-field>\r\n\r\n        <sw-checkbox-field\r\n            :label="$tc(\'werkl-blog.elements.listing.config.showFilter.options.filter.author\')"\r\n            v-model:value="element.config.showAuthorFilter.value">\r\n        </sw-checkbox-field>\r\n    </sw-card>\r\n    {% endblock %}\r\n\r\n</div>\r\n{% endblock %}\r\n',inject:["repositoryFactory"],mixins:[r.getByName("cms-element")],data(){return{categories:[],selectedCategories:null}},computed:{blogCategoryRepository(){return this.repositoryFactory.create("werkl_blog_category")},blogListingSelectContext(){let e=Object.assign({},Shopware.Context.api);return e.inheritance=!0,e},blogCategoriesConfigValue(){return this.element.config.blogCategories.value}},watch:{selectedCategories:{handler(e){this.element.config.blogCategories.value=e.getIds(),this.$set(this.element.data,"blogCategories",e),this.$emit("element-update",this.element)}}},created(){this.createdComponent()},methods:{async createdComponent(){this.initElementConfig("blog"),await this.getSelectedCategories()},getSelectedCategories(){if(Shopware.Utils.types.isEmpty(this.blogCategoriesConfigValue))this.selectedCategories=new o(this.blogCategoryRepository.route,this.blogCategoryRepository.schema.entity,Shopware.Context.api,new l);else{let e=new l;e.setIds(this.blogCategoriesConfigValue),this.blogCategoryRepository.search(e,Shopware.Context.api).then(e=>{this.selectedCategories=e})}}}}},209:function(e,t,n){var r=n(552);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(534).A)("0a2e1397",r,!0,{})},534:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var l=t[o],i=l[0],s={id:e+":"+o,css:l[1],media:l[2],sourceMap:l[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}n.d(t,{A:function(){return h}});var o,l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=l&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,g=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){g=n,u=o||{};var l=r(e,t);return m(l),function(t){for(var n=[],o=0;o<l.length;o++){var s=i[l[o].id];s.refs--,n.push(s)}t?m(l=r(e,t)):l=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete i[s.id]}}}}function m(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(w(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var l=[],o=0;o<n.parts.length;o++)l.push(w(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:l}}}}function b(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function w(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(g)return d;r.parentNode.removeChild(r)}if(p){var o=c++;t=y.bind(null,r=a||(a=b()),o,!1),n=y.bind(null,r,o,!0)}else t=_.bind(null,r=b()),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){r?(r.css!==e.css||r.media!==e.media||r.sourceMap!==e.sourceMap)&&t(e=r):n()}}var v=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var l=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}function _(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),u.ssrId&&e.setAttribute(f,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);