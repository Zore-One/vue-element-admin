(window.webpackJsonp=window.webpackJsonp||[]).push([["product"],{"407a":function(t,e,n){},c0f3:function(t,e,n){"use strict";n("407a")},c4c8:function(t,e,n){"use strict";n.d(e,"h",function(){return a}),n.d(e,"g",function(){return u}),n.d(e,"f",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return s}),n.d(e,"a",function(){return l}),n.d(e,"b",function(){return c}),n.d(e,"k",function(){return d}),n.d(e,"i",function(){return p}),n.d(e,"c",function(){return f}),n.d(e,"j",function(){return m});var r=n("b775");function a(t){return Object(r.a)({url:"product_list",method:"get",params:t})}function u(t,e){return Object(r.a)({url:"get_product_category_list/"+e,method:"get",params:t})}function i(t){return Object(r.a)({url:"get_product_attr",method:"get",params:t})}function o(t){return Object(r.a)({url:"get_product_brand",method:"get",params:t})}function s(t){return Object(r.a)({url:"get_product_category",method:"get",params:t})}function l(t){return Object(r.a)({url:"create_product",method:"post",data:t})}function c(t){return Object(r.a)({url:"create_product_cate",method:"post",data:t})}function d(t){return Object(r.a)({url:"update_product",method:"post",data:t})}function p(t){return Object(r.a)({url:"product_one",method:"get",params:t})}function f(t){return Object(r.a)({url:"delete_status",method:"get",params:t})}function m(t){return Object(r.a)({url:"update_product_attr",method:"post",data:t})}},e629:function(t,e,n){"use strict";n.r(e);n("159b"),n("b0c0");var r=n("c4c8"),a={name:"product",data:function(){return{productList:[],listQuery:{pageSize:10,pageNum:1,name:null,product_sn:null,verify_status:null,brand_id:null,product_category_id:null},total:0,brandOptions:[],categoryOptions:[]}},created:function(){this.getProductList(),this.getBrand(),this.getCategory()},filters:{verify:function(t){return t?"已审核":"未审核"}},methods:{getProductList:function(){var e=this;Object(r.h)(this.listQuery).then(function(t){e.productList=t.product,e.total=t.total})},getBrand:function(){var e=this;Object(r.d)().then(function(t){e.brandOptions=t.data})},getCategory:function(){var n=this;Object(r.e)().then(function(t){t.data.forEach(function(t){var e=[];t.children.forEach(function(t){e.push({value:t.id,label:t.name})}),n.categoryOptions.push({value:t.id,label:t.name,children:e})})})},handleSizeChange:function(t){this.listQuery.pageSize=t,this.listQuery.pageNum=1,this.getProductList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getProductList()},onSubmit:function(){this.getProductList()},onReset:function(){this.listQuery={pageSize:10,pageNum:1,name:null,product_sn:null},this.getProductList()},handleChange:function(t){null!==t&&2===t.length&&(this.listQuery.product_category_id=t[1])},updateProduct:function(t){this.$router.push("/pms/productUpdate/"+t)},delProduct:function(t){var e=this;this.$confirm("此操作将永久删除该条商品数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.c)({id:t}).then(function(t){"success"==t.type&&(e.$message({type:"success",message:"删除成功!",duration:2e3}),e.getProductList())})}).catch(function(){e.$message({type:"info",message:"已取消删除",duration:2e3})})}}},n=(n("c0f3"),n("2877")),a=Object(n.a)(a,function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"product-con"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[r("i",{staticClass:"iconfont icon-sousuo-copy"}),n._v(" 筛选搜索")]),r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:n.onSubmit}},[n._v("查询")]),r("el-button",{staticStyle:{float:"right"},attrs:{type:"button",size:"small"},on:{click:n.onReset}},[n._v("重置")])],1),r("div",[r("el-form",{ref:"form",attrs:{inline:!0,model:n.listQuery,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"商品名称:"}},[r("el-input",{model:{value:n.listQuery.name,callback:function(t){n.$set(n.listQuery,"name",t)},expression:"listQuery.name"}})],1),r("el-form-item",{attrs:{label:"货号:"}},[r("el-input",{model:{value:n.listQuery.product_sn,callback:function(t){n.$set(n.listQuery,"product_sn",t)},expression:"listQuery.product_sn"}})],1),r("el-form-item",{attrs:{label:"审核状态:"}},[r("el-select",{staticClass:"input-w",attrs:{placeholder:"审核状态"},model:{value:n.listQuery.verify_status,callback:function(t){n.$set(n.listQuery,"verify_status",t)},expression:"listQuery.verify_status"}},[r("el-option",{attrs:{label:"未审核",value:"0"}}),r("el-option",{attrs:{label:"已审核",value:"1"}})],1)],1),r("el-form-item",{attrs:{label:"商品品牌:"}},[r("el-select",{staticClass:"input-w",attrs:{placeholder:"商品品牌"},model:{value:n.listQuery.brand_id,callback:function(t){n.$set(n.listQuery,"brand_id",t)},expression:"listQuery.brand_id"}},n._l(n.brandOptions,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),r("el-form-item",{attrs:{label:"商品分类:"}},[r("el-cascader",{attrs:{options:n.categoryOptions},on:{change:n.handleChange},model:{value:n.listQuery.product_category_id,callback:function(t){n.$set(n.listQuery,"product_category_id",t)},expression:"listQuery.product_category_id"}})],1)],1)],1)]),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix"},[r("span",[r("i",{staticClass:"iconfont icon-dingdan1"}),n._v("商品数据列表")]),r("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"}},[n._v("添加")])],1)]),r("el-table",{staticClass:"listtable",staticStyle:{width:"100%"},attrs:{data:n.productList,border:""}},[r("el-table-column",{attrs:{prop:"id",label:"编号"}}),r("el-table-column",{attrs:{label:"商品图片"},scopedSlots:n._u([{key:"default",fn:function(t){return[r("img",{attrs:{src:t.row.pic}})]}}])}),r("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),r("el-table-column",{attrs:{label:"价格/货号"},scopedSlots:n._u([{key:"default",fn:function(t){return[r("div",[n._v("价格："+n._s(t.row.price))]),r("div",[n._v("货号："+n._s(t.row.product_sn))])]}}])}),r("el-table-column",{attrs:{label:"审核状态"},scopedSlots:n._u([{key:"default",fn:function(t){return[n._v(" "+n._s(n._f("verify")(t.row.verify_status))+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:n._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return n.updateProduct(e.row.id)}}},[n._v("编辑")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return n.delProduct(e.row.id)}}},[n._v("删除")])]}}])})],1),r("el-pagination",{attrs:{"current-page":n.listQuery.pageNum,"page-sizes":[5,10,15,20],"page-size":n.listQuery.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:n.total},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1)},[],!1,null,"4d8492d0",null);e.default=a.exports}}]);