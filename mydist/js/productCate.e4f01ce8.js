(window.webpackJsonp=window.webpackJsonp||[]).push([["productCate"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",function(){return n});r("d3b7");function c(t,e,r,n,a,u,o){try{var i=t[u](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,a)}function n(i){return function(){var t=this,o=arguments;return new Promise(function(e,r){var n=i.apply(t,o);function a(t){c(n,e,r,a,u,"next",t)}function u(t){c(n,e,r,a,u,"throw",t)}a(void 0)})}}},"6a31":function(t,e,r){},"6b68":function(t,e,r){"use strict";r.r(e);var n,a=r("1da1"),u=(r("96cf"),r("c4c8")),a={name:"productCate",data:function(){return{cateList:[],listQuery:{pageNum:1,pageSize:10},total:0,parent_id:0}},created:function(){this.getProductCateList()},filters:{levelF:function(t){return t?"二级":"一级"}},methods:{getProductCateList:(n=Object(a.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.g)(this.listQuery,this.parent_id);case 2:e=t.sent,this.cateList=e.data,this.total=e.total;case 5:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),goadd:function(){this.$router.push("/pms/productCateAdd")},handleSizeChange:function(t){this.listQuery.pageSize=t,this.listQuery.pageNum=1,this.getProductCateList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getProductCateList()},showNextLevel:function(t){this.parent_id=t,this.getProductCateList()},goParentLevel:function(){this.parent_id=0,this.getProductCateList()}}},r=(r("cd34"),r("2877")),a=Object(r.a)(a,function(){var r=this,t=r.$createElement,n=r._self._c||t;return n("div",{staticClass:"pro_con"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix"},[n("span",[r._v(" 商品分类列表")]),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:r.goadd}},[r._v("添加")]),0!=r.parent_id?n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"mini"},on:{click:r.goParentLevel}},[r._v("返回上一级")]):r._e()],1)]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:r.cateList,border:""}},[n("el-table-column",{attrs:{prop:"id",label:"编号",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"类型名称",width:"180"}}),n("el-table-column",{attrs:{label:"级别"},scopedSlots:r._u([{key:"default",fn:function(t){return[r._v(" "+r._s(r._f("levelF")(t.row.level))+" ")]}}])}),n("el-table-column",{attrs:{prop:"product_count",label:"商品数量"}}),n("el-table-column",{attrs:{prop:"product_unit",label:"数量单位"}}),n("el-table-column",{attrs:{label:"是否显示"},scopedSlots:r._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.row.show_status,callback:function(t){r.$set(e.row,"show_status",t)},expression:"scope.row.show_status"}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:r._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini",disabled:0!=e.row.level},on:{click:function(t){return r.showNextLevel(e.row.id)}}},[r._v("查看下级")])]}}])})],1),n("el-pagination",{attrs:{"current-page":r.listQuery.pageNum,"page-sizes":[5,10,15,20],"page-size":r.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:r.total},on:{"size-change":r.handleSizeChange,"current-change":r.handleCurrentChange}})],1)},[],!1,null,"14a09eb2",null);e.default=a.exports},c4c8:function(t,e,r){"use strict";r.d(e,"h",function(){return a}),r.d(e,"g",function(){return u}),r.d(e,"f",function(){return o}),r.d(e,"d",function(){return i}),r.d(e,"e",function(){return c}),r.d(e,"a",function(){return s}),r.d(e,"b",function(){return l}),r.d(e,"k",function(){return d}),r.d(e,"i",function(){return p}),r.d(e,"c",function(){return f}),r.d(e,"j",function(){return h});var n=r("b775");function a(t){return Object(n.a)({url:"product_list",method:"get",params:t})}function u(t,e){return Object(n.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function o(t){return Object(n.a)({url:"get_product_attr",method:"get",params:t})}function i(t){return Object(n.a)({url:"get_product_brand",method:"get",params:t})}function c(t){return Object(n.a)({url:"get_product_category",method:"get",params:t})}function s(t){return Object(n.a)({url:"create_product",method:"post",data:t})}function l(t){return Object(n.a)({url:"create_product_cate",method:"post",data:t})}function d(t){return Object(n.a)({url:"update_product",method:"post",data:t})}function p(t){return Object(n.a)({url:"product_one",method:"get",params:t})}function f(t){return Object(n.a)({url:"delete_status",method:"get",params:t})}function h(t){return Object(n.a)({url:"update_product_attr",method:"post",data:t})}},cd34:function(t,e,r){"use strict";r("6a31")}}]);