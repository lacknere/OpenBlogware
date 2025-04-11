!function(){var e,t,r,l,o,n,i,a,s={6622:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-block-blog-categories",()=>r.e(939).then(r.bind(r,5939))),l.register("werkl-cms-preview-blog-categories",()=>r.e(725).then(r.bind(r,2725))),Shopware.Service("cmsService").registerCmsBlock({name:"blog-categories",label:"werkl-blog.blocks.blog.categories.label",category:"werkl-blog",component:"werkl-cms-block-categories",previewComponent:"werkl-cms-preview-blog-categories",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{categories:"blog-categories"}})},8447:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-block-blog-detail",()=>r.e(622).then(r.bind(r,7622))),l.register("werkl-cms-preview-blog-detail",()=>r.e(70).then(r.bind(r,9070))),Shopware.Service("cmsService").registerCmsBlock({name:"blog-detail",label:"werkl-blog.blocks.blog.detail.label",category:"werkl-blog",component:"werkl-cms-block-blog-detail",previewComponent:"werkl-cms-preview-blog-detail",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{blogDetail:"blog-detail"}})},2390:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-block-blog-listing",()=>r.e(347).then(r.bind(r,6347))),l.register("werkl-cms-preview-blog-listing",()=>r.e(470).then(r.bind(r,470))),Shopware.Service("cmsService").registerCmsBlock({name:"blog-listing",label:"werkl-blog.blocks.blog.listing.label",category:"werkl-blog",component:"werkl-cms-block-blog",previewComponent:"werkl-cms-preview-blog-listing",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{listing:"blog"}})},7941:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-block-blog-newest-listing",()=>r.e(185).then(r.bind(r,8185))),l.register("werkl-cms-preview-newest-listing",()=>r.e(425).then(r.bind(r,5425))),Shopware.Service("cmsService").registerCmsBlock({name:"blog-newest-listing",label:"werkl-blog.blocks.blog.newestListing.label",category:"werkl-blog",component:"werkl-cms-block-newest-listing",previewComponent:"werkl-cms-preview-newest-listing",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{listing:"blog-newest-listing"}})},975:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-block-blog-single-entry",()=>r.e(182).then(r.bind(r,2182))),l.register("werkl-cms-preview-blog-single-entry",()=>r.e(788).then(r.bind(r,9788))),Shopware.Service("cmsService").registerCmsBlock({name:"blog-single-entry",label:"werkl-blog.blocks.blog.singleEntry.label",category:"werkl-blog",component:"werkl-cms-block-blog-single-entry",previewComponent:"werkl-cms-preview-blog-single-entry",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{singleEntry:{type:"blog-single-select",default:{config:{blogEntry:{source:"static",value:null}}}}}})},6614:function(e,t,r){let{Component:l}=Shopware;l.extend("werkl-blog-category-tree","sw-category-tree",()=>r.e(570).then(r.bind(r,2570))),l.extend("werkl-blog-category-tree-field","sw-category-tree-field",()=>r.e(968).then(r.bind(r,1968))),l.register("werkl-blog-extension-component-sections",()=>r.e(973).then(r.bind(r,6973))),l.extend("werkl-blog-tree-item","sw-tree-item",()=>r.e(778).then(r.bind(r,4778))),l.register("werkl-blog-vertical-tabs",()=>r.e(262).then(r.bind(r,7262)))},8846:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-el-categories",()=>r.e(403).then(r.bind(r,2403))),l.register("sw-cms-el-config-categories",()=>r.e(768).then(r.bind(r,8768))),l.register("sw-cms-el-preview-categories",()=>r.e(940).then(r.bind(r,8940))),Shopware.Service("cmsService").registerCmsElement({name:"blog-categories",label:"Blog Categories",component:"sw-cms-el-categories",configComponent:"sw-cms-el-config-categories",previewComponent:"sw-cms-el-preview-categories",defaultConfig:{}})},9519:function(e,t,r){let{Component:l}=Shopware;l.register("werkl-blog-el-blog-detail",()=>r.e(618).then(r.bind(r,3618))),l.register("sw-cms-el-config-blog-detail",()=>r.e(485).then(r.bind(r,6485))),l.register("werkl-blog-el-blog-detail-preview",()=>r.e(384).then(r.bind(r,3384))),Shopware.Service("cmsService").registerCmsElement({name:"blog-detail",label:"Blog Detail",component:"werkl-blog-el-blog-detail",configComponent:"sw-cms-el-config-blog-detail",previewComponent:"werkl-blog-el-blog-detail-preview",defaultConfig:{showCategory:{source:"static",value:!0},showAuthor:{source:"static",value:!0},fullWidth:{source:"static",value:!1}}})},5621:function(e,t,r){let{Component:l}=Shopware;l.register("werkl-cms-el-newest-listing",()=>r.e(528).then(r.bind(r,6528))),l.register("werkl-cms-el-config-newest-listing",()=>r.e(549).then(r.bind(r,3549))),l.register("werkl-cms-el-preview-newest-listing",()=>r.e(16).then(r.bind(r,8016))),Shopware.Service("cmsService").registerCmsElement({name:"blog-newest-listing",label:"werkl-blog.elements.newestListing.preview.label",component:"werkl-cms-el-newest-listing",configComponent:"werkl-cms-el-config-newest-listing",previewComponent:"werkl-cms-el-preview-newest-listing",defaultConfig:{itemCount:{source:"static",value:5},offsetCount:{source:"static",value:0},showType:{source:"static",value:"all"},blogCategories:{source:"static",value:null,entity:{name:"werkl_blog_categories"}}}})},9661:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-el-blog-single-select",()=>r.e(75).then(r.bind(r,8456))),l.register("sw-cms-el-config-blog-single-select",()=>r.e(359).then(r.bind(r,9359))),l.register("sw-cms-el-preview-blog-single-select",()=>r.e(18).then(r.bind(r,7018))),Shopware.Service("cmsService").registerCmsElement({name:"blog-single-select",label:"werkl-blog.elements.single-select.label",component:"sw-cms-el-blog-single-select",configComponent:"sw-cms-el-config-blog-single-select",previewComponent:"sw-cms-el-preview-blog-single-select",defaultConfig:{blogEntry:{source:"static",value:null,entity:{name:"werkl_blog_entries"}}}})},5255:function(e,t,r){let{Component:l}=Shopware;l.register("sw-cms-el-blog",()=>r.e(134).then(r.bind(r,3134))),l.register("sw-cms-el-config-blog",()=>r.e(925).then(r.bind(r,925))),l.register("sw-cms-el-preview-blog",()=>r.e(156).then(r.bind(r,4156))),Shopware.Service("cmsService").registerCmsElement({name:"blog",label:"Blog",component:"sw-cms-el-blog",configComponent:"sw-cms-el-config-blog",previewComponent:"sw-cms-el-preview-blog",defaultConfig:{paginationCount:{source:"static",value:5},showType:{source:"static",value:"all"},showCategoryFilter:{source:"static",value:!0},showAuthorFilter:{source:"static",value:!0},blogCategories:{source:"static",value:null,entity:{name:"werkl_blog_categories"}}}})},2198:function(e,t,r){let{Component:l}=Shopware;l.extend("werkl-cms-sidebar","sw-cms-sidebar",()=>r.e(462).then(r.bind(r,2462))),l.extend("werkl-cms-slot","sw-cms-slot",()=>r.e(965).then(r.bind(r,1965)))},7459:function(e,t,r){let{Component:l}=Shopware;l.override("sw-cms-sidebar",()=>r.e(990).then(r.bind(r,7990))),l.override("sw-cms-list",()=>r.e(565).then(r.bind(r,9565)))},9804:function(){Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"werkl-blog-author",roles:{viewer:{privileges:["werkl_blog_author:read","werkl_blog_author_translation:read"],dependencies:[]},editor:{privileges:["werkl_blog_author:update","werkl_blog_author_translation:update"],dependencies:[]},creator:{privileges:["werkl_blog_author:create","werkl_blog_author_translation:create"],dependencies:[]},deleter:{privileges:["werkl_blog_author:delete","werkl_blog_author_translation:delete"],dependencies:[]}}})},1710:function(){Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"werkl-blog",roles:{viewer:{privileges:["werkl_blog_entries:read","werkl_blog_entries_translation:read","werkl_blog_blog_category:read"],dependencies:[]},editor:{privileges:["werkl_blog_entries:update","werkl_blog_entries_translation:update","system_config:read"],dependencies:[]},creator:{privileges:["werkl_blog_entries:create","werkl_blog_entries_translation:create","werkl_blog_blog_category:create","system_config:read"],dependencies:[]},deleter:{privileges:["werkl_blog_entries:delete","werkl_blog_entries_translation:delete"],dependencies:[]}}})},875:function(){Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:"content",key:"werkl-blog-category",roles:{viewer:{privileges:["werkl_blog_category:read","werkl_blog_category_translation:read"],dependencies:[]},editor:{privileges:["werkl_blog_category:update","werkl_blog_category_translation:update"],dependencies:[]},creator:{privileges:["werkl_blog_category:create","werkl_blog_category_translation:create"],dependencies:[]},deleter:{privileges:["werkl_blog_category:delete","werkl_blog_category_translation:delete"],dependencies:[]}}})}},c={};function g(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,exports:{}};return s[e].call(r.exports,r,r.exports,g),r.exports}g.m=s,g.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return g.d(t,{a:t}),t},g.d=function(e,t){for(var r in t)g.o(t,r)&&!g.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},g.f={},g.e=function(e){return Promise.all(Object.keys(g.f).reduce(function(t,r){return g.f[r](e,t),t},[]))},g.u=function(e){return"static/js/"+({16:"fa720d664f61315c1958",18:"a2270546bbd7de17117c",44:"b617077bd1cb25d39694",70:"7abe7918e3a06b8ccf37",75:"baa881948f642cab1516",107:"b9e27bfa238dfc7a171d",134:"e8369c19d290d4ce648f",156:"5174eeb804ad1cffc5bb",182:"3b8b577eb45e69f95a23",185:"cbac2800b9b54bb94aa2",191:"ac6f40bc3e45f7356f78",262:"640c5521197a5b87b9ff",291:"ca06e9e52b00474374b8",347:"c5bcfeb2b8908f0e8dbb",359:"b1a1d9ec3702df04b2ba",384:"bcae3d2947977d5f8d28",403:"a9e3d509feb78953eba8",425:"e86ebdf04b0c93393738",462:"0a206d06ca2a50d91a8a",470:"ac3678409922cdffb339",485:"28437a85e6ba6c81ff6f",528:"2474b13a69a95aea019d",549:"dd8187bd1e98b935217f",565:"53c52800bd5c917f9c8a",570:"cc2948140aecd9bca93f",618:"68e8abc3356f8204ed60",622:"b07d5f73abb7f76ee511",656:"928d58072a00cf697c11",725:"f590e6cf293921386c4a",768:"0f021eebcaeb628a13ba",778:"ce6bba1dff09146a2e4a",788:"85f65c5888d717b3b41c",859:"d9bd3bf13e9d2491ad26",925:"ed316120ce6fa25ef6bd",939:"53e97b3da41e608c25fc",940:"7b89ce1e9ea34648fb2d",965:"36bb63427bf210c3b1a3",968:"33c36fd5d76856f33f76",973:"29bf5a74d6f96c174293",990:"d7ffc7da95e72e727b39"})[e]+".js"},g.miniCssF=function(e){return"static/css/"+e+".css"},g.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="werkl-open-blogware:",g.l=function(r,l,o,n){if(e[r]){e[r].push(l);return}if(void 0!==o)for(var i,a,s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var b=s[c];if(b.getAttribute("src")==r||b.getAttribute("data-webpack")==t+o){i=b;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,g.nc&&i.setAttribute("nonce",g.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[l];var d=function(t,l){i.onerror=i.onload=null,clearTimeout(w);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(function(e){return e(l)}),t)return t(l)},w=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),a&&document.head.appendChild(i)},g.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.p="bundles/werklopenblogware/",r=function(e,t,r,l){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=a,o.parentNode.removeChild(o),l(s)}},o.href=t,document.head.appendChild(o),o},l=function(e,t){for(var r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var o=r[l],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}for(var i=document.getElementsByTagName("style"),l=0;l<i.length;l++){var o=i[l],n=o.getAttribute("data-href");if(n===e||n===t)return o}},o={683:0},g.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&({16:1,18:1,44:1,70:1,75:1,134:1,156:1,182:1,347:1,384:1,403:1,425:1,462:1,470:1,485:1,528:1,549:1,618:1,622:1,656:1,725:1,768:1,788:1,859:1,925:1,939:1,940:1,965:1})[e]&&t.push(o[e]=new Promise(function(t,o){var n=g.miniCssF(e),i=g.p+n;if(l(n,i))return t();r(e,i,t,o)}).then(function(){o[e]=0},function(t){throw delete o[e],t}))},n={683:0},g.f.j=function(e,t){var r=g.o(n,e)?n[e]:void 0;if(0!==r){if(r)t.push(r[2]);else{var l=new Promise(function(t,l){r=n[e]=[t,l]});t.push(r[2]=l);var o=g.p+g.u(e),i=Error();g.l(o,function(t){if(g.o(n,e)&&(0!==(r=n[e])&&(n[e]=void 0),r)){var l=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+l+": "+o+")",i.name="ChunkLoadError",i.type=l,i.request=o,r[1](i)}},"chunk-"+e,e)}}},i=function(e,t){var r,l,o=t[0],i=t[1],a=t[2],s=0;if(o.some(function(e){return 0!==n[e]})){for(r in i)g.o(i,r)&&(g.m[r]=i[r]);a&&a(g)}for(e&&e(t);s<o.length;s++)l=o[s],g.o(n,l)&&n[l]&&n[l][0](),n[l]=0},(a=window["webpackJsonpPluginwerkl-open-blogware"]=window["webpackJsonpPluginwerkl-open-blogware"]||[]).forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a)),window?.__sw__?.assetPath&&(g.p=window.__sw__.assetPath+"/bundles/werklopenblogware/"),function(){"use strict";g(6622),g(8447),g(2390),g(7941),g(975),g(6614),g(5255),g(8846),g(9519),g(5621),g(9661),g(2198),g(7459),g(9804);let{Component:e}=Shopware;e.extend("werkl-blog-author-create","werkl-blog-author-detail",()=>g.e(291).then(g.bind(g,8291))),e.register("werkl-blog-author-detail",()=>g.e(44).then(g.bind(g,9044))),e.register("werkl-blog-author-list",()=>g.e(859).then(g.bind(g,5859))),g(1710),g(875);let{Component:t}=Shopware;t.extend("werkl-blog-create","werkl-blog-detail",()=>g.e(191).then(g.bind(g,8191))),t.extend("werkl-blog-detail","sw-cms-detail",()=>g.e(107).then(g.bind(g,6107))),t.register("werkl-blog-list",()=>g.e(656).then(g.bind(g,9656)));let{Module:r}=Shopware;r.register("blog-module",{type:"plugin",name:"Blog",title:"werkl-blog.general.mainMenuItemGeneral",description:"werkl-blog.general.descriptionTextModule",color:"#F965AF",icon:"regular-content",routes:{index:{components:{default:"werkl-blog-list"},path:"index"},create:{components:{default:"werkl-blog-create"},path:"create"},detail:{component:"werkl-blog-detail",path:"detail/:id"},author:{path:"author",component:"werkl-blog-author-list",meta:{parentPath:"blog.module.index"},redirect:{name:"blog.module.author.index"}},"author.index":{path:"author/index",component:"werkl-blog-author-list"},"author.create":{path:"author/new",component:"werkl-blog-author-create",meta:{parentPath:"blog.module.author.index"}},"author.detail":{path:"author/detail/:id",component:"werkl-blog-author-detail",meta:{parentPath:"blog.module.author.index"}}},navigation:[{id:"werkl-blog",label:"werkl-blog.general.mainMenuItemGeneral",path:"blog.module.index",parent:"sw-content",meta:{privilege:["werkl-blog-category:read","werkl_blog_author:read","werkl_blog_entries:read"]}}]})}()}();