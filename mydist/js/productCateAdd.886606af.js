(window.webpackJsonp=window.webpackJsonp||[]).push([["productCateAdd"],{1123:function(t,e,r){"use strict";r("4141")},"1da1":function(t,e,r){"use strict";r.d(e,"a",function(){return n});r("d3b7");function i(t,e,r,n,u,a,o){try{var s=t[a](o),i=s.value}catch(t){return void r(t)}s.done?e(i):Promise.resolve(i).then(n,u)}function n(s){return function(){var t=this,o=arguments;return new Promise(function(e,r){var n=s.apply(t,o);function u(t){i(n,e,r,u,a,"next",t)}function a(t){i(n,e,r,u,a,"throw",t)}u(void 0)})}}},4141:function(t,e,r){},a46a:function(t,e,r){"use strict";r.r(e);var n,u=r("1da1"),a=(r("96cf"),r("159b"),r("b0c0"),r("c4c8")),u={name:"productCateAdd",data:function(){return{listQuery:{description:"",icon:"",keywords:"",name:"",nav_status:0,parent_id:0,product_unit:"",product_count:0,show_status:0,sort:0,level:0},rules:{name:[{required:!0,message:"请输入商品分类名称",trigger:"blur"},{min:3,max:100,message:"长度在3-100个字符之间",trigger:"blur"}]},productCateOptions:[]}},created:function(){this.getProductCate()},methods:{getProductCate:(n=Object(u.a)(regeneratorRuntime.mark(function t(){var e,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.g)();case 2:e=t.sent,this.productCateOptions.push({value:0,label:"顶级分类"}),e.data.forEach(function(t){r.productCateOptions.push({value:t.id,label:t.name})});case 7:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),submitForm:function(t){var e=this;this.$refs[t].validate(function(t){return!!t&&(0!=e.listQuery.parent_id&&(e.listQuery.level=1),void Object(a.b)(e.listQuery).then(function(t){"添加成功"==t.msg&&(e.$message({message:"成功添加商品分类",duration:1e3,type:"success"}),e.$router.push("/pms/productCate"))}))})}}},r=(r("1123"),r("2877")),u=Object(r.a)(u,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pro_con"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix"},[r("i",{staticClass:"iconfont icon-sousuo-copy"}),r("span",[e._v(" 添加商品分类")])])]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.listQuery,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名称:",prop:"name"}},[r("el-input",{model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),r("el-form-item",{attrs:{label:"上级分类:",prop:"name"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.listQuery.parent_id,callback:function(t){e.$set(e.listQuery,"parent_id",t)},expression:"listQuery.parent_id"}},e._l(e.productCateOptions,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),r("el-form-item",{attrs:{label:"数量单位:",prop:"product_unit"}},[r("el-input",{model:{value:e.listQuery.product_unit,callback:function(t){e.$set(e.listQuery,"product_unit",t)},expression:"listQuery.product_unit"}})],1),r("el-form-item",{attrs:{label:"排序:",prop:"sort"}},[r("el-input",{model:{value:e.listQuery.sort,callback:function(t){e.$set(e.listQuery,"sort",t)},expression:"listQuery.sort"}})],1),r("el-form-item",{attrs:{label:"是否显示:",prop:"show_status"}},[r("el-radio-group",{model:{value:e.listQuery.show_status,callback:function(t){e.$set(e.listQuery,"show_status",t)},expression:"listQuery.show_status"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),r("el-form-item",{attrs:{label:"是否显示在导航栏:",prop:"nav_status"}},[r("el-radio-group",{model:{value:e.listQuery.nav_status,callback:function(t){e.$set(e.listQuery,"nav_status",t)},expression:"listQuery.nav_status"}},[r("el-radio",{attrs:{label:1}},[e._v("是")]),r("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),r("el-form-item",{attrs:{label:"关键词:",prop:"keywords"}},[r("el-input",{model:{value:e.listQuery.keywords,callback:function(t){e.$set(e.listQuery,"keywords",t)},expression:"listQuery.keywords"}})],1),r("el-form-item",{attrs:{label:"分类描述:",prop:"description"}},[r("el-input",{model:{value:e.listQuery.description,callback:function(t){e.$set(e.listQuery,"description",t)},expression:"listQuery.description"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,"0a064af0",null);e.default=u.exports},c4c8:function(t,e,r){"use strict";r.d(e,"h",function(){return u}),r.d(e,"g",function(){return a}),r.d(e,"f",function(){return o}),r.d(e,"d",function(){return s}),r.d(e,"e",function(){return i}),r.d(e,"a",function(){return l}),r.d(e,"b",function(){return c}),r.d(e,"k",function(){return d}),r.d(e,"i",function(){return p}),r.d(e,"c",function(){return m}),r.d(e,"j",function(){return f});var n=r("b775");function u(t){return Object(n.a)({url:"product_list",method:"get",params:t})}function a(t,e){return Object(n.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function o(t){return Object(n.a)({url:"get_product_attr",method:"get",params:t})}function s(t){return Object(n.a)({url:"get_product_brand",method:"get",params:t})}function i(t){return Object(n.a)({url:"get_product_category",method:"get",params:t})}function l(t){return Object(n.a)({url:"create_product",method:"post",data:t})}function c(t){return Object(n.a)({url:"create_product_cate",method:"post",data:t})}function d(t){return Object(n.a)({url:"update_product",method:"post",data:t})}function p(t){return Object(n.a)({url:"product_one",method:"get",params:t})}function m(t){return Object(n.a)({url:"delete_status",method:"get",params:t})}function f(t){return Object(n.a)({url:"update_product_attr",method:"post",data:t})}}}]);