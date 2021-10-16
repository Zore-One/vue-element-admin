<template>
  <div class="home-con">
    <el-row>
      <el-col :span="8" v-for="item in dingdanArr" :key="item.id">
        <!--  在vue的项目中 获取的是本地图片地址，并且使用变量获取时，需要使用 require -->
        <div class="dd_item">
          <div class="dd_img"><img :src="item.img" /></div>
          <div>
            <div>{{ item.name }}</div>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 显示图表内容 -->
    <div id="mychart" class="mychart"></div>

    <!-- 使用后台重组数据显示商品总览饼形图 -->
    <div id="piechart" class="mychart"></div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      dingdanArr: [
        {
          id: 1,
          name: "今日订单总数",
          price: "200",
          img: require("@/assets/images/home_order.png"),
        },
        {
          id: 2,
          name: "今日销售总额",
          price: "￥5000",
          img: require("@/assets/images/home_today_amount.png"),
        },
        {
          id: 3,
          name: "昨日订单总数",
          price: "￥3000",
          img: require("@/assets/images/home_yesterday_amount.png"),
        },
      ],
      //待处理事务
      daichuliArr: [
        { id: 1, name: "代付款订单", num: 10 },
        { id: 2, name: "已完成订单", num: 5 },
        { id: 3, name: "待确认收货订单", num: 20 },
        { id: 4, name: "代发货订单", num: 30 },
        { id: 5, name: "新缺货登记", num: 6 },
        { id: 6, name: "待处理退款申请", num: 8 },
        { id: 7, name: "已发货订单", num: 12 },
        { id: 8, name: "待处理退货订单", num: 9 },
        { id: 9, name: "广告位即将到期", num: 10 },
      ],
      //商品总览
      shangpinArr: [
        { id: 1, name: "已下架", num: 100 },
        { id: 2, name: "已上架", num: 400 },
        { id: 3, name: "库存紧张", num: 50 },
        { id: 4, name: "全部商品", num: 500 },
      ],
      //用户总览
      yonghuArr: [
        { id: 1, name: "今日新增", num: 100 },
        { id: 2, name: "昨日新增", num: 200 },
        { id: 3, name: "本月新增", num: 1000 },
        { id: 4, name: "会员总数", num: 5000 },
      ],
      //订单统计
      tongjiArr: [
        { id: 1, name: "本月订单统计", num: 1000, type: 10, dec: "同比上月" },
        { id: 2, name: "本周订单总数", num: 1000, type: -10, dec: "同比上周" },
        { id: 3, name: "本月销售总额", num: 100000, type: 10, dec: "同比上月" },
        { id: 4, name: "本月销售", num: 50000, type: -10, dec: "同比上周" },
      ],
      //图表数据
      option: {
        //图表数据
        //x轴数据
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        //y轴
        yAxis: {
          type: "value",
        },
        series: [
          //显示区域设置
          {
            data: [400, 200, 150, 80, 70, 110, 200],
            type: "bar",
            showBackground: true, //是否显示背景颜色
            backgroundStyle: {
              color: "rgba(180, 180, 0, 0.2)",
            },
            color: "blue",
          },
        ],
      },

      //商品总览饼形图
      pieEcharts: {
        title: {
          text: "商品总览",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              //填充后台收据
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    console.log(this.$echarts);
    this.lineEcharts();
    this.pmsEcharts();
  },

  methods: {
    lineEcharts: function () {
      //初始化 图表
      let mychart = this.$echarts.init(document.getElementById("mychart"));
      console.log(mychart);
      //画图
      mychart.setOption(this.option);
    },
    pmsEcharts: function () {
      let mychart = this.$echarts.init(document.getElementById("piechart"));
      console.log(mychart);
      //重组后台数据
      var data = [];
      this.shangpinArr.forEach((item) => {
        data.push({ value: item.num, name: item.name });
      });
      this.pieEcharts.series[0].data = data;

      //画图
      mychart.setOption(this.pieEcharts);
    },
  },

  //echarts 图表需要注意的内容：
  /*
  1. 先看 快速入门和 所有实例
  2.找到 自己需要的图表实例
  3.复制粘贴  ，到 自己的代码里进行修改
  4.需要 将 后台的数据添加到  options数据中
  饼形图、折线图

  */
};
</script>
<style scoped>
.home-con {
  padding: 10px;
}

.dd_item {
  border: 1px solid #ccc;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  height: 80px;
  padding: 10px;
}
.dd_img img {
  width: 50px;
}
/*想要显示 echarts的图 ，必须 设置 高度 */
.mychart {
  height: 500px;
}
</style>