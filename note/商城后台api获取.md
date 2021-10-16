南山  ：http://192.168.7.7:8001/

远程：http://www.yinruifang.cn/index/Api/product_list

## 1.接口名称：商品列表

url 地址：http://www.yinruifang.cn/index/Api/product_list
参    数：无
请求方式：get
返 回 值：
{"status":200,"product":[商品列表数组],"type":"success"}

数组内参数说明：

​	

pageSize:10 //每页显示多少条

pageNum：1 //当前页码

1. brand_id: (品牌id)
2. brand_name: (品牌名称)
3. delete_status: (删除标记位)
4. description: (描述)
5. detail_desc: (详情描述)
6. detail_html: (详情描述html版)
7. detail_mobile_html: (详情描述手机版)
8. detail_title: (详情标题)
9. id: (商品id)
10. keywords: (关键字)
11. name: (产品名称)
12. new_status: (新品标识位)
13. original_price: (原价)
14. pic: (产品图片)
15. price: (价格)
16. product_attribute_category_id: ()
17. product_category_id: (分类id)
18. product_category_name: (分类名称)
19. product_sn: (商品货号)
20. publish_status: (上架标识位)
21. recommand_status: (推荐标识位)
22. sale: (商品销量)
23. sort: (排序)
24. stock: (商品库存)
25. sub_title: (子标题)
26. unit: (计量单位)
27. verify_status: (审核状态)
28. weight: (重量)





## 2.接口名称：获取商品分类的所有数据 ，有子节点
url 地址：http://www.yinruifang.cn/index/Api/get_product_category
参    数：无
请求方式：get
返 回 值：
{
status: 200
type: "success"，
data: [商品分类的数组]
}

## 3.接口名称：获取品牌列表
url 地址：http://www.yinruifang.cn/index/Api/get_product_brand
参    数：无
请求方式：get
返 回 值：
{
status: 200
type: "success"，
data: [商品品牌的数组]
}

## 4.接口名称：获取商品类型列表
url 地址：http://www.yinruifang.cn/index/Api/get_product_attr
参    数：无
请求方式：get
返 回 值：
{
status: 200
type: "success"，
data: [商品类型数组]
}

## 5.接口名称：删除商品列表的某条数据
url 地址：http://www.yinruifang.cn/index/Api/delete_status
参    数：商品id号
传参方式：例如： {'id':4}
请求方式：get
返 回 值：
{
status: 200
total: 13
type: "success"
}

## 6.接口名称：添加一条商品信息
url 地址：http://www.yinruifang.cn/index/Api/create_product
参    数：添加的商品信息数据

```
brand_id: null, //商品品牌id
        brand_name: "", //商品品牌名称
        delete_status: 0, //删除标志位，默认填0，表示未删除
        description: "", //商品介绍
        name: "", //商品名称
        original_price: 0, //市场价
        pic: "", //商品图片的url地址
        price: 0, //商品售价
        product_category_id: null, //分类id
        product_category_name: "", //分类名称
        product_sn: "", //商品货号
        sort: 0, //排序
        stock: 0, //商品库存
        sub_title: "", //副标题
        unit: "", //计量单位
        weight: 0, //商品重量
        sale: 0, //商品销量
        publish_status: 0, //上架
        recommand_status: 0,
        new_status: 0,
        verify_status:0
```

请求方式：post
返 回 值：
{
status: 200
msg: "添加成功"
type: "success"
}

## 7.接口名称：通过商品id获取一条商品数据
url 地址：http://www.yinruifang.cn/index/Api/product_one
参    数：id 商品id号
请求方式：get
返 回 值：
{
status: 200
type: "success"，
data: {该条数据对象}
}

## 8.通过子节点的分类id查找父节点的分类信息
url 地址：http://www.yinruifang.cn/index/Api/get_parent_id
参    数：id 商品分类的子节点的id
请求方式：get
返 回 值：
{
status: 200
type: "success"，
data: {商品分类对象}
}

## 9.接口名称：修改一条商品信息
url 地址：http://www.yinruifang.cn/index/Api/update_product
参    数：添加的商品信息数据
{brand_id: null,//商品品牌id
brand_name: '',//商品品牌名称
delete_status: 0,//删除标志位，默认填0，表示未删除
description: '',//商品介绍
name: '',//商品名称
original_price: 0,//市场价
pic: '',//商品图片的url地址
price: 0,//商品售价
product_category_id: null,//分类id
product_category_name: '',//分类名称
product_sn: '',//商品货号
sort: 0,//排序
stock: 0,//商品库存
sub_title: '',//副标题
unit: '',//计量单位
weight: 0,//商品重量
sale:0//商品销量
}
请求方式：post
返 回 值：
{
status: 200
msg: "修改成功"
type: "success"
}


/*****************商品分类页面新增接口**********************/

## 10.获取商品分类的一级或二级数据
url 地址：http://www.yinruifang.cn/index/Api/get_product_category_list/0
参    数：
例如：parent_id:0
请求方式：get
返回值：
{
status: 200
type: "success"，
data: [商品分类数组某一级别]
}

## 11.删除商品分类信息
url 地址：http://www.yinruifang.cn/index/Api/delete_category
参    数：商品分类id号
传参方式：例如： {'id':4}
请求方式：post
返 回 值：
{
status: 200
total: 13
type: "success"
}

## 12.添加分类信息
url 地址：http://www.yinruifang.cn/index/Api/create_product_cate
参    数：添加的商品分类信息数据
{
    description: '',//描述
    icon: '',//小图标
    keywords: '',//关键词
    name: '',//名称
    nav_status: 0,//是否显示在导航
    parent_id: 0,//上级节点id
    product_unit: '',//数量单位
	product_count: 0,//商品数量
    show_status: 0,//是否显示
    sort: 0,//排序
	level:0//0表示一级分类 1表示二级分类
  }	
请求方式：post
返 回 值：
{
status: 200
msg: "添加成功"
type: "success"
}

## 13.按照id获取某条商品分类信息
url 地址：http://www.yinruifang.cn/index/Api/product_cate_one
参    数：
例如：id:0
请求方式：get
返回值：
{
status: 200
type: "success"，
data: {商品分类信息对象}
}

## 14.修改分类信息
url 地址：http://www.yinruifang.cn/index/Api/update_product_cate
参    数：修改的商品分类信息数据
{
    description: '',//描述
    icon: '',//小图标
    keywords: '',//关键词
    name: '',//名称
    nav_status: 0,//是否显示在导航
    parent_id: 0,//上级节点id
    product_unit: '',//数量单位
	product_count: 0,//商品数量
    show_status: 0,//是否显示
    sort: 0,//排序
	level:0//0表示一级分类 1表示二级分类
  }	
请求方式：post
返 回 值：
{
status: 200
msg: "修改成功"
type: "success"
}

/*****************商品类型页面新增接口**********************/
## 15.添加商品类型
url 地址：http://www.yinruifang.cn/index/Api/create_product_attr
参    数：添加的商品类型数据
{
"name":"***",//名称
"attribute_count":0,//属性数量
"param_count":0} //参数数量
请求方式：post
返 回 值：
{
status: 200
msg: "添加成功"
type: "success"
}

## 16.修改商品类型
url 地址：http://www.yinruifang.cn/index/Api/update_product_attr
参    数：添加的商品类型数据

```
{
"id":10,//要修改的数据id
"name":"***",//名称
"attribute_count":0,//属性数量
"param_count":0} //参数数量
```



请求方式：post
返 回 值：
{
status: 200
msg: "修改成功"
type: "success"
}

## 17.删除商品类型
url 地址：http://www.yinruifang.cn/index/Api/delete_product_attr
参    数：商品分类id号
传参方式：例如： {'id':4}
请求方式：get
返 回 值：
{
status: 200
total: 13
type: "success"
}



/*****************品牌管理页面新增接口**********************/
## 18.品牌管理获取列表，有分页和查询
url 地址：http://www.yinruifang.cn/index/Api/get_product_brand_pag
参    数：无
请求方式：get
返回值：
{
status: 200
type: "success"，
data: [商品品牌数组]
}

## 19.删除品牌管理某条数据
url 地址：http://www.yinruifang.cn/index/Api/delete_product_brand
参    数：商品品牌id号
传参方式：例如： {'id':4}
请求方式：get
返 回 值：
{
status: 200
total: 13
type: "success"
}

## 20.添加品牌管理数据
url 地址：http://www.yinruifang.cn/index/Api/create_product_brand
参    数：修改的商品分类信息数据

{
			big_pic: '',//大图
			brand_story: '',//品牌故事
			factory_status: 0,//品牌制造商
			first_letter: '',//品牌首字母
			logo: '',//品牌logo
			name: '',//品牌名称
			show_status: 0,//品牌是否显示
			sort: 0//品牌排序
		}

请求方式：post
返 回 值：
{
status: 200
msg: "添加成功"
type: "success"
}

## 21.修改品牌管理数据
url 地址：http://www.yinruifang.cn/index/Api/update_product_brand
参    数：修改的商品分类信息数据

{
	big_pic: '',//大图
	brand_story: '',//品牌故事
	factory_status: 0,//品牌制造商
	first_letter: '',//品牌首字母
	logo: '',//品牌logo
	name: '',//品牌名称
	show_status: 0,//品牌是否显示
	sort: 0//品牌排序
}

请求方式：post
返 回 值：
{
status: 200
msg: "添加成功"
type: "success"
}



## 22.获取一条品牌管理信息
url:'/index/Api/brand_one'
method:'get',

## 23.修改 品牌制造商是否显示
/index/Api/update_brand_factory_status'
method:'post',

## 24.修改该品牌是否显示
url:'/index/Api/update_brand_show_status',
method:'post',



## 25.登录api

url 地址：http://www.yinruifang.cn/index/Api/login
参    数：{
	username:admin
	password:123456
}

请求方式：post
返 回 值：
{
"status":200,
"msg":'登录成功',
"url":"Index",
'userid':$r["id"],
'username':$r["username"],
'name':$r["name"],
'encryption':$r["encryption"],
'roleid'=>$r["roleid"],
"type"=> 'success'
}