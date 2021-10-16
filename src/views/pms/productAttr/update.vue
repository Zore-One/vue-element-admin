<template>
  <div>
    修改 商品 类型

    <button @click="changeAttr">修改 商品类型</button>
  </div>
</template>
<script>
import { undateProductAttr } from "@/api/product.js";
export default {
  name: "productAttrUpdate",
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    changeAttr: function () {
      undateProductAttr({
        id: this.$route.params.id,
        name: this.$route.params.name + "修改",
      }).then((res) => {
        console.log(res);
      });
    },
  },
  components: {},
};
</script>
<style scoped>
</style>