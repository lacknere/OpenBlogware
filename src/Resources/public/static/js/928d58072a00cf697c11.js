(window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).push([[656],{4057:function(){},9656:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}}),r(9824);let{Mixin:n}=Shopware,l=Shopware.Data.Criteria;var a={template:'{% block werkl_blog_list %}\r\n    <sw-page class="werkl-blog-list">\r\n        <template #smart-bar-header>\r\n            <h2>\r\n                {% block werkl_blog_list_smart_bar_header_title_text %}\r\n                    {{ $tc(\'werkl-blog.list.textBlogOverview\') }}\r\n                {% endblock %}\r\n                {% block werkl_blog_list_smart_bar_header_amount %}\r\n                    <span v-if="!isLoading" class="sw-page__smart-bar-amount">\r\n                        ({{ total }})\r\n                    </span>\r\n                {% endblock %}\r\n            </h2>\r\n        </template>\r\n        <template #language-switch>\r\n            <sw-language-switch @on-change="changeLanguage"></sw-language-switch>\r\n        </template>\r\n        {% block werkl_blog_list_smart_bar_actions %}\r\n            <template #smart-bar-actions>\r\n                {% block werkl_blog_list_smart_bar_actions_add %}\r\n                    <sw-button :router-link="{ name: \'blog.module.create\' }" variant="primary">\r\n                        {{ $tc(\'werkl-blog.list.buttonAddBlogEntry\') }}\r\n                    </sw-button>\r\n                {% endblock %}\r\n            </template>\r\n        {% endblock %}\r\n\r\n        <template #sidebar>\r\n            <werkl-blog-vertical-tabs />\r\n        </template>\r\n\r\n        <template #side-content>\r\n            {% block werkl_blog_category_side_content %}\r\n                <werkl-blog-category-tree\r\n                    :categoryId="categoryId"\r\n                    :currentLanguageId="currentLanguageId"\r\n                    @update:categoryId="changeCategoryId"\r\n                />\r\n            {% endblock %}\r\n        </template>\r\n\r\n        <template #content>\r\n            {% block werkl_blog_list_content %}\r\n                <sw-entity-listing\r\n                    v-if="blogEntries"\r\n                    :items="blogEntries"\r\n                    :repository="blogEntriesRepository"\r\n                    :showSelection="false"\r\n                    :columns="columns"\r\n                    detailRoute="blog.module.detail"\r\n                >\r\n                    {% block werkl_blog_list_grid_columns_name %}\r\n                    <template #column-active="{ item, isInlineEdit }">\r\n                        {% block werkl_blog_list_grid_columns_name_inline_edit %}\r\n                            <template v-if="isInlineEdit">\r\n                                <sw-checkbox-field v-model:value="item.active"></sw-checkbox-field>\r\n                            </template>\r\n                        {% endblock %}\r\n\r\n                        {% block werkl_blog_list_grid_columns_name_content %}\r\n                            <template v-else>\r\n                                <sw-icon v-if="item.active" name="regular-checkmark-xs" small class="is--active"></sw-icon>\r\n                                <sw-icon v-else name="regular-times-xs" small class="is--inactive"></sw-icon>\r\n                            </template>\r\n                        {% endblock %}\r\n                    </template>\r\n                    {% endblock %}\r\n\r\n                    {% block werkl_blog_list_grid_columns_author %}\r\n                        <template #column-author="{ item }">\r\n                            {% block werkl_blog_list_grid_columns_author_content %}\r\n                                <router-link :to="{ name: \'blog.module.author.detail\', params: { id: item.authorId } }">\r\n                                    {{ salutation(item.blogAuthor) }}\r\n                                </router-link>\r\n                            {% endblock %}\r\n                        </template>\r\n                    {% endblock %}\r\n\r\n                    {% block werkl_blog_list_grid_columns_published %}\r\n                        <template #column-publishedAt="{ item }">\r\n                            {{ dateFilter(item.publishedAt, { hour: undefined, minute: undefined }) }}\r\n                        </template>\r\n                    {% endblock %}\r\n\r\n                </sw-entity-listing>\r\n            {% endblock %}\r\n\r\n            {% block werkl_blog_list_empty_state %}\r\n                <sw-empty-state v-if="!isLoading && !total" :title="$tc(\'werkl-blog.list.messageEmpty\')">\r\n                    {{ $tc(\'werkl-blog-author.list.messageEmpty\') }}\r\n                </sw-empty-state>\r\n            {% endblock %}\r\n        </template>\r\n    </sw-page>\r\n{% endblock %}\r\n',inject:["repositoryFactory"],mixins:[n.getByName("salutation"),n.getByName("listing")],data(){return{categoryId:null,blogEntries:null,total:0,isLoading:!0,currentLanguageId:Shopware.Context.api.languageId}},metaInfo(){return{title:this.$createTitle()}},created(){this.getList()},computed:{blogEntriesRepository(){return this.repositoryFactory.create("werkl_blog_entries")},blogCategoryRepository(){return this.repositoryFactory.create("werkl_blog_category")},dateFilter(){return Shopware.Filter.getByName("date")},columns(){return[{property:"title",dataIndex:"title",label:this.$tc("werkl-blog.list.table.title"),routerLink:"blog.module.detail",primary:!0,inlineEdit:"string"},{property:"author",label:this.$tc("werkl-blog.list.table.author"),inlineEdit:!1},{property:"publishedAt",label:this.$tc("werkl-blog.list.table.publishedAt"),inlineEdit:!1},{property:"active",label:this.$tc("werkl-blog.list.table.active"),inlineEdit:"boolean"}]}},methods:{changeLanguage(e){this.currentLanguageId=e,this.getList()},changeCategoryId(e){e&&e!==this.categoryId&&(this.categoryId=e,this.getList())},getList(){this.isLoading=!0;let e=new l(this.page,this.limit);return e.addAssociation("blogAuthor"),e.addAssociation("blogCategories"),e.addAssociation("tags"),e.addSorting(l.sort("publishedAt","DESC",!1)),this.categoryId&&e.addFilter(l.equals("blogCategories.id",this.categoryId)),this.blogEntriesRepository.search(e,Shopware.Context.api).then(e=>{this.total=e.total,this.blogEntries=e,this.isLoading=!1})}}}},9824:function(e,t,r){var n=r(4057);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(534).A)("2bd7c7a8",n,!0,{})},534:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},l=0;l<t.length;l++){var a=t[l],i=a[0],o={id:e+":"+l,css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(o):r.push(n[i]={id:i,parts:[o]})}return r}r.d(t,{A:function(){return m}});var l,a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,d=!1,u=function(){},g=null,p="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,l){d=r,g=l||{};var a=n(e,t);return h(a),function(t){for(var r=[],l=0;l<a.length;l++){var o=i[a[l].id];o.refs--,r.push(o)}t?h(a=n(e,t)):a=[];for(var l=0;l<r.length;l++){var o=r[l];if(0===o.refs){for(var s=0;s<o.parts.length;s++)o.parts[s]();delete i[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](r.parts[l]);for(;l<r.parts.length;l++)n.parts.push(k(r.parts[l]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var a=[],l=0;l<r.parts.length;l++)a.push(k(r.parts[l]));i[r.id]={id:r.id,refs:1,parts:a}}}}function _(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function k(e){var t,r,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(d)return u;n.parentNode.removeChild(n)}if(b){var l=c++;t=f.bind(null,n=s||(s=_()),l,!1),r=f.bind(null,n,l,!0)}else t=y.bind(null,n=_()),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&t(e=n):r()}}var w=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,r,n){var l=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=w(t,l);else{var a=document.createTextNode(l),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function y(e,t){var r=t.css,n=t.media,l=t.sourceMap;if(n&&e.setAttribute("media",n),g.ssrId&&e.setAttribute(p,t.id),l&&(r+="\n/*# sourceURL="+l.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}}]);