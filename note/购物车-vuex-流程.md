## 1. 创建项目



1.1 将项目目录定位到www文件夹下

1.2   使用   vue create cart-0726  创建 项目

选择项如下图：

![](E:\2021-07-26\07-vue\day11\note\img\01.bmp)



cd  cart-0726

npm run serve

项目运行了



1.3 将 项目 引入到  vscode



## 2. 创建页面，添加路由

src/views/List.vue

src/views/Item.vue

src/views/Cart.vue



配置路由 src/router/index.js

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/item/:id/:price',
    name: 'Item',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "item" */ '../views/Item.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

```

修改了路由链接    src/App.vue

```
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商品列表</router-link> |
      <router-link to="/cart">购物车</router-link>
    </div>
    <router-view />
  </div>
</template>
```

运行 ，看 页面是不是都能够显示



## 3. 需要 安装依赖

cnpm i -S axios



需要 将  json文件夹 拷贝到  public目录下面

## 4. 写列表页

src/views/List.vue

```html
<template>
  <div>
    列表页

    <ul class="list">
      <li v-for="item in list" :key="item.item_id">
       <router-link
          :to="'/item/' + item.item_id + '/' + item.min_price"
          class="item"
        >
          <div class="item_img"><img :src="item.over_image_url" /></div>
          <div class="item_text">{{ item.item_name }}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
//引入axios
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      list: [],
    };
  },
  created() {
    //获取列表数据
    axios.get("/json/list.json").then((res) => {
      console.log(res);
      this.list = res.data.data.item_list;
    });
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}
.item {
  display: flex;
  height: 100px;
  line-height: 100px;
  border-bottom: 1px solid #ccc;
}
.item_img {
  width: 30%;
}
.item_text {
  width: 70%;
}
.item img {
  width: 80px;
}
</style>
```



## 5. 写内容页

src/views/Item.vue

```html
<template>
  <div>
    <h3>内容页</h3>
    <img :src="itemObj.sku_img_url" class="itemimg" />
    <div>{{ itemObj.sku_name }}</div>
    <div class="btn">添加购物车</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Item",
  data() {
    return {
      itemObj: {}, //接收某个商品的数据
    };
  },
  created() {
    //console.log(this.$route.params);
    var id = this.$route.params.id;
    axios.get("/json/item_" + id + ".json").then((res) => {
      console.log(res);
      this.itemObj = res.data.data.reviews[0];
    });
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
.itemimg {
  width: 100%;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: lightgreen;
  color: lightsalmon;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
```



## 6. 使用 vuex  将 商品数据添加到 购物车

6.1 需要在  src/store/index.js

添加 state的状态值和  mutations

```js
//vuex 统一状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态值
    goods: [] //需要保存的购物车数据
  },
  getters: {//派生状态

  },
  mutations: {//修改状态值
    //添加购物车
    /*state  状态值   ，payload 载荷  */
    ADD_CART(state, payload) {
      //将新的商品添加到 购物车
      state.goods.push(payload);
    }
  },
  actions: {//异步处理或大数据量处理 
  },
  modules: {//使用子树
  }
})

```

6.2 需要修改  item页  src/views/Item.vue

```
<template>
  <div>
    <h3>内容页</h3>
    <img :src="itemObj.sku_img_url" class="itemimg" />
    <div>{{ itemObj.sku_name }}</div>
    <div class="btn" @click="addCart">添加购物车</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Item",
  data() {
    return {
      itemObj: {}, //接收某个商品的数据
      item_id: 0, //保存  item_id
      item_price: 0, //保存 商品价格
    };
  },
  created() {
    console.log(this.$route.params);
    //解构
    var { id, price } = this.$route.params;
    this.item_id = id; //保存  item_id
    this.item_price = price;
    axios.get("/json/item_" + this.item_id + ".json").then((res) => {
      console.log(res);
      this.itemObj = res.data.data.reviews[0];
    });
  },
  methods: {
    //添加购物车的函数
    addCart: function () {
      var item = {
        item_id: this.item_id,
        sku_name: this.itemObj.sku_name,
        sku_img_url: this.itemObj.sku_img_url,
        item_price: this.item_price,
      };
      console.log(item);
      //调用  mutations   ,使用 commit  将state提交给 mutation
      this.$store.commit("ADD_CART", item);
    },
  },
  components: {},
};
</script>
<style scoped>
.itemimg {
  width: 100%;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: lightgreen;
  color: lightsalmon;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
</style>
```

## 7.如果二次及以上添加购物车，需要修改购物车中该条记录的个数

src/views/Item.vue

```
addCart: function () {
      var item = {
        item_id: this.item_id,
        sku_name: this.itemObj.sku_name,
        sku_img_url: this.itemObj.sku_img_url,
        item_price: this.item_price,
+        num: 1,
      };
      console.log(item);
      //调用  mutations   ,使用 commit  将state提交给 mutation
 -     //this.$store.commit("ADD_CART", item);

      //使用 dispatch  将 状态值  派发给 actions
+     this.$store.dispatch("ADD_CART_AC", item);
    },
```



src/store/index.js

```
//vuex 统一状态管理器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态值
    goods: [] //需要保存的购物车数据
  },
  getters: {//派生状态

  },
  mutations: {//修改状态值
    //添加购物车
    /*state  状态值   ，payload 载荷  */
    ADD_CART(state, payload) {
      //将新的商品添加到 购物车
      state.goods.push(payload);
    },
    //修改购物车
 +   UPDATE_CART(state, payload) {
 +     state.goods = payload;
 +   }
  },
  //以下都是新增内容
  actions: {//异步处理或大数据量处理 
    //加入购物车的  动作
    //context  里面的commit   将状态值提交到 mutation；item 载荷
    //购物车的逻辑，第一次添加时使用  add，以后任意次添加该商品，都需要使用 update
    ADD_CART_AC(context, item) {
      console.log(context, item);
      //1.将购物车的数据 拷贝一份到 动作里
      var newArr = [...this.state.goods];//数组的深拷贝
      //判断是否是第一次添加
      let index = newArr.findIndex(val => val.item_id === item.item_id);
      console.log(index);//如果购物车中找不到该条记录  会返回 -1 ，如果找到这条记录返回这条记录的下标

      if (index === -1) {//第一次添加购物车
        //将状态值提交到mutations
        context.commit('ADD_CART', item);
      } else {//第二次及以上次添加购物车
        //修改商品数量
        newArr[index].num++;
        context.commit('UPDATE_CART', newArr);
      }
    }

  },
  modules: {//使用子树
  }
})

```



## 8. 购物车页面显示数据

src/views/Cart.vue

```html
<template>
  <div>
    <h3>购物车</h3>
    <ul>
      <li v-for="item in goods" :key="item.item_id">
        {{ item.sku_name }} {{ item.item_price / 100 }} {{ item.num }}
      </li>
    </ul>
  </div>
</template>
<script>
//辅助函数
import { mapState } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapState(["goods"]),
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
</style>
```



## 9. vuex  数据持久化处理

vuex中的数据 如果刷新就消失了，但是有时我们需要 vuex 支持刷新操作

利用vuex-persistedstate插件，

9.1 安装插件

cnpm i -S vuex-persistedstate



9.2 修改 src/store/index.js

```
//vuex 统一状态管理器
import Vue from 'vue'
import Vuex from 'vuex'
//引入 vuex持久化的插件
+ import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态值
    goods: [] //需要保存的购物车数据
  },
  getters: {//派生状态

  },
  mutations: {//修改状态值
    //添加购物车
    /*state  状态值   ，payload 载荷  */
    ADD_CART(state, payload) {
      //将新的商品添加到 购物车
      state.goods.push(payload);
    },
    //修改购物车
    UPDATE_CART(state, payload) {
      state.goods = payload;
    }
  },
  actions: {//异步处理或大数据量处理 
    //加入购物车的  动作
    //context  里面的commit   将状态值提交到 mutation；item 载荷
    //购物车的逻辑，第一次添加时使用  add，以后任意次添加该商品，都需要使用 update
    ADD_CART_AC(context, item) {
      console.log(context, item);
      //1.将购物车的数据 拷贝一份到 动作里
      var newArr = [...this.state.goods];//数组的深拷贝
      //判断是否是第一次添加
      let index = newArr.findIndex(val => val.item_id === item.item_id);
      console.log(index);//如果购物车中找不到该条记录  会返回 -1 ，如果找到这条记录返回这条记录的下标

      if (index === -1) {//第一次添加购物车
        //将状态值提交到mutations
        context.commit('ADD_CART', item);
      } else {//第二次及以上次添加购物车
        //修改商品数量
        newArr[index].num++;
        context.commit('UPDATE_CART', newArr);
      }
    }
  },
  modules: {//使用子树
  },
  //使用 持久化插件
 +  plugins: [createPersistedState()]
})

```

