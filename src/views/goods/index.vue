<template>
  <div id="goodsIndex">
      <el-card>
        <el-row>
          <el-col :span="10">
            <el-row style="border: 1px solid #DCDFE6;width: 500px; height: 500px">
              <el-image :src="checkedImgUrl" style="width: 500px; height: 500px" :previewSrcList="previewSrcList"></el-image>
            </el-row>
            <el-row class="pdt30">
              <div v-for="(item,index) in imgUl" :key="index" class="img_li" @click="checkImg(index)">
                <!--              使用vue动态绑定class的时候, 一定要记得最好绑定两个, 一个是被选中的css, 一个是未被选中的css-->
                <el-tag class="pdr5" :class="{img_li_checked: item.checked,img_li_not_checked: !item.checked}"
                    style="height: 59px"
                    type="info"
                    effect="plain"
                    size="medium">
                  <el-image :src="item.url" style="width: 50px; height: 50px"></el-image>
                </el-tag>
              </div>
            </el-row>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="13">
            <div class="header padding10">
              <span style="font-weight: bolder; font-size: 1.4em">{{goodsDetail.name}}</span>
            </div>
            <div class="main">
              <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="京东价格">
                  <div class="pdr5 fl" v-if="goodsDetail.discount !== 0">
                    <span style="font-size: 2em;color: #F56C6C">￥{{goodsDetail.discount}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span style="font-size: 1.4em;color: #909399;text-decoration: line-through">￥{{goodsDetail.price}}</span>
                  </div>
                  <div style="font-size: 2em" v-if="goodsDetail.discount === 0">{{goodsDetail.price}}</div>
                </el-form-item>
                <el-form-item label="优 惠 券">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.couponList" :key="index">
                    <el-tag type="danger">{{ item }}</el-tag>
                  </div>
                </el-form-item>
                <el-form-item label="重 量">
                  <span class="pdr5 fl">{{goodsDetail.wight}}</span>
                </el-form-item>
                <el-divider></el-divider>
                <el-form-item label="颜 色">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.colorList" :key="index"
                       @click="checkColor(index)">
                    <el-tag class="pdr5" :class="{img_li_checked: item.checked}" style="height: 54px;"
                            type="info"
                            effect="plain"
                            size="medium">
                      <div>
                        <div class="fl">
                          <el-image :src="item.imgUrlList[0]" style="width: 50px; height: 50px"></el-image>
                        </div>
                        <div class="fl" style="margin-top: 11px">
                          <span style="font-size: 1.3em;padding-left: 5px">{{ item.color }}</span>
                        </div>
                      </div>
                    </el-tag>
                  </div>
                </el-form-item>
                <el-form-item label="内 存">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.RANList" :key="index"
                       @click="checkRAM(index)">
                    <el-tag
                        type="info"
                        :effect=" item.checked ? 'dark' : 'plain' ">
                      {{ item.name }}
                    </el-tag>
                  </div>
                </el-form-item>
                <el-form-item label="版 本">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.typeList" :key="index"
                       @click="checkType(index)">
                    <el-tag
                        type="primary"
                        :effect=" item.checked ? 'dark' : 'plain' ">
                      {{ item.name }}
                    </el-tag>
                  </div>
                </el-form-item>
                <el-form-item label="套 装">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.setList" :key="index"
                       @click="checkSet(index)">
                    <el-tag
                        type="success"
                        :effect=" item.checked ? 'dark' : 'plain' ">
                      {{ item.name }}
                    </el-tag>
                  </div>
                </el-form-item>
                <el-form-item label="服 务">
                  <div class="pdr5 fl" v-for="(item,index) in goodsDetail.serviceList" :key="index"
                       @click="checkService(index)">
                    <el-tag
                        type="warning"
                        :effect=" item.checked ? 'dark' : 'plain' ">
                      {{ item.name }}
                    </el-tag>
                  </div>
                </el-form-item>
                <el-divider></el-divider>
                <el-form-item>
                  <div class="fl">
                    <el-input-number style="width: 120px" v-model="count" controls-position="right" :min="1"></el-input-number>
                  </div>
                  <div class="fl pdl30">
                    <el-button type="danger" @click="addShopCart">加入购物车</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="shopDetail"
                 background-color="#F2F6FC" text-color="#909399" active-text-color="#303133">
          <el-menu-item index="1">商品详情</el-menu-item>
          <el-menu-item index="2">规格包装</el-menu-item>
          <el-menu-item index="3">服务保障</el-menu-item>
          <el-menu-item index="4">商品评价</el-menu-item>
        </el-menu>
        <router-view/>
      </el-card>
  </div>
</template>
<script>
export default {
  name: "goodsIndex",
  props: ["id"],
  components: {},
  data() {
    return {
      activeIndex: "1",
      goodsDetail: {},
      imgUl: [],
      count: 1
    }
  },
  computed: {
    checkedImgUrl(){
      let checkedImgUrl = ""
      this.imgUl.forEach((item) =>{
        if(item.checked) checkedImgUrl = item.url
      })
      return  checkedImgUrl
    },
    previewSrcList(){
      // eslint-disable-next-line no-unused-vars
      let previewSrcList = []
      this.goodsDetail.colorList.forEach((item) =>{
        if(item.checked) previewSrcList =item.imgUrlList
      })
      return previewSrcList
    },
    // imgUl(){
    //   let imgUl = []
    //   this.goodsDetail.colorList.forEach((item) =>{
    //     if(item.checked) {
    //       for(let i = 0;i < item.imgUrlList.length;i++){
    //         let img = {url: item.imgUrlList[i],checked: false}
    //         if(i===0) img.checked = true
    //         imgUl.push(img)
    //       }
    //     }
    //   })
    //   return imgUl
    // },
    form() {
      let form = {color: '',RAM: '',type: '',set: '',service: '',count: 0}
      this.goodsDetail.colorList.forEach((item) => {
        if (item.checked) form.color = item.color
      })
      this.goodsDetail.RANList.forEach((item) => {
        if (item.checked) form.RAM = item.name
      })
      this.goodsDetail.typeList.forEach((item) => {
        if (item.checked) form.type = item.name
      })
      this.goodsDetail.setList.forEach((item) => {
        if (item.checked) form.set = item.name
      })
      this.goodsDetail.serviceList.forEach((item) => {
        if (item.checked) form.service = item.name
      })
      form.count = this.count
      return form
    }
  },
  methods: {
    shopDetail(key) {
      switch (key) {
        case "1":
          this.$router.push({path: '/detail/shopDetail'})
          break
        case "2":
          this.$router.push({path: '/detail/shopSpec'})
          break
        case "3":
          this.$router.push({path: '/detail/shopService'})
          break
        case "4":
          this.$router.push({path: '/detail/shopComments'})
          break
        default:
          console.log("没有这个选项")
      }
    },
    checkImg(index) {
      this.imgUl.forEach((item) =>{
        item.checked = false
      })
      this.imgUl.forEach((item,index1) =>{
        if(index1 === index){
          item.checked = true
          //不写这句，vue实例就不会跟着变化
          this.checkedImgUrl = item.url
        }
      })
    },
    checkColor(index){
      this.goodsDetail.colorList.forEach((item) =>{
        item.checked = false
      })
      this.goodsDetail.colorList.forEach((item,index1) =>{
        if(index1 === index){
          item.checked = true
          let showImgUrlList = []
          for (let i = 0; i < item.imgUrlList.length; i++) {
            let img = {url: "", checked: false}
            img.url = item.imgUrlList[i]
            i === 0 ? img.checked = true : img.checked = false
            showImgUrlList.push(img)
          }
          this.imgUl = showImgUrlList
          console.log(showImgUrlList)
        }

      })
    },
    checkType(index) {
      this.goodsDetail.typeList.forEach((item) => {
        item.checked = false
      })
      this.goodsDetail.typeList.forEach((item,index1) => {
        if (index1 === index) {
          item.checked = true
        }
      })
    },
    checkSet(index) {
      this.goodsDetail.setList.forEach((item) => {
        item.checked = false
      })
      this.goodsDetail.setList.forEach((item,index1) => {
        if (index1 === index) {
          item.checked = true
        }
      })
    },
    checkService(index) {
      this.goodsDetail.serviceList.forEach((item) => {
        item.checked = false
      })
      this.goodsDetail.serviceList.forEach((item,index1) => {
        if (index1 === index) {
          item.checked = true
        }
      })
    },
    checkRAM(index) {
      this.goodsDetail.RANList.forEach((item) => {
        item.checked = false
      })
      this.goodsDetail.RANList.forEach((item,index1) => {
        if (index1 === index) {
          item.checked = true
        }
      })
    },
    checkTestImg(index) {
      this.imgUl.forEach((item) => {
        item.checked = false
      })
      this.imgUl.forEach((item,index1) => {
        if (index1 === index) {
          item.checked = true
        }
      })
    },
    addShopCart() {

    }
  },
  //created在DOM节点加载之前执行
  //mounted在DOM节点加载之后执行
  created() {
    let goodsDetail={
      id: '123456',
      name: '荣耀Play5T 22.5W超级快充 5000mAh大电池 6.5英寸护眼屏 全网通8GB+128GB幻夜黑',
      price: 6000,
      discount: 5700,
      couponList: ["满300减200","满1000减500"],
      wight: '0.368',
      colorList:[
        {
          color:"红色",
          imgUrlList:[
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/189261/39/3773/121751/60a269ecE4cd8a070/df2735c6ee1a895a.jpg",
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/194591/34/3615/71248/60a26a55E9ac9e546/c357afb095110fe3.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/189858/5/3729/69980/60a26a56E51e67e33/343227e9a07bf4ee.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/172260/1/10192/65038/60a26a55E18e7a5fb/ff6fb12818db01fb.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188168/28/3638/52674/60a26a56Ed38203ee/f307476e68713b3c.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188949/35/3646/18329/60a26a56Ec157ae0f/db3465bdf2af6833.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/177103/8/4628/14980/60a26a55Ed809dd2e/d23f5b0c51657cee.jpg"
          ]
        },
        {
          color:"黑色",
          imgUrlList:[
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/189261/39/3773/121751/60a269ecE4cd8a070/df2735c6ee1a895a.jpg",
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/194591/34/3615/71248/60a26a55E9ac9e546/c357afb095110fe3.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/189858/5/3729/69980/60a26a56E51e67e33/343227e9a07bf4ee.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/172260/1/10192/65038/60a26a55E18e7a5fb/ff6fb12818db01fb.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188168/28/3638/52674/60a26a56Ed38203ee/f307476e68713b3c.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188949/35/3646/18329/60a26a56Ec157ae0f/db3465bdf2af6833.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/177103/8/4628/14980/60a26a55Ed809dd2e/d23f5b0c51657cee.jpg"
          ]
        },
        {
          color:"白色",
          imgUrlList:[
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/189261/39/3773/121751/60a269ecE4cd8a070/df2735c6ee1a895a.jpg",
            "http://img14.360buyimg.com/n1/s450x450_jfs/t1/194591/34/3615/71248/60a26a55E9ac9e546/c357afb095110fe3.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/189858/5/3729/69980/60a26a56E51e67e33/343227e9a07bf4ee.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/172260/1/10192/65038/60a26a55E18e7a5fb/ff6fb12818db01fb.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188168/28/3638/52674/60a26a56Ed38203ee/f307476e68713b3c.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/188949/35/3646/18329/60a26a56Ec157ae0f/db3465bdf2af6833.jpg",
            "https://img13.360buyimg.com/n1/s450x450_jfs/t1/177103/8/4628/14980/60a26a55Ed809dd2e/d23f5b0c51657cee.jpg"
          ]
        }
      ],
      RANList: [{name:"64GB"},{name:"128GB"},{name:"256GB"}],
      typeList: [{name:"公开版"},{name:"AirPods套装"},{name:"快充套装"},{name:"官方标配"}],
      setList: [{name:"优惠套装1"},{name:"优惠套装2"},{name:"优惠套装3"},{name:"优惠套装4"},{name:"优惠套装5"},{name:"优惠套装6"}],
      serviceList:[{name:"换休无忧月付版"},{name:"换休无忧年付版"},{name:"原厂电池换新"},{name:"2年碎屏保修"},{name:"2年电池换新"},{name:"黑科技充电宝"}]
    }
    for(let i = 0; i< goodsDetail.colorList.length; i++){
      i === 0 ? goodsDetail.colorList[i] =Object.assign(goodsDetail.colorList[i],{checked: true})
      :goodsDetail.colorList[i] =Object.assign(goodsDetail.colorList[i],{checked: false})
    }
    for (let i = 0; i < goodsDetail.RANList.length; i++) {
      i === 0 ? goodsDetail.RANList[i] = Object.assign(goodsDetail.RANList[i], {checked: true})
          : goodsDetail.RANList[i] = Object.assign(goodsDetail.RANList[i], {checked: false})
    }
    for (let i = 0; i < goodsDetail.typeList.length; i++) {
      i === 0 ? goodsDetail.typeList[i] = Object.assign(goodsDetail.typeList[i], {checked: true})
          : goodsDetail.typeList[i] = Object.assign(goodsDetail.typeList[i], {checked: false})
    }
    // eslint-disable-next-line no-unused-vars
    goodsDetail.setList.forEach((item) => {
      item = Object.assign(item, {checked: false})
    })
    // eslint-disable-next-line no-unused-vars
    goodsDetail.serviceList.forEach((item) => {
      item = Object.assign(item, {checked: false})
    })
    this.goodsDetail = goodsDetail
    this.checkedImgUrl = this.imgUl[0].url
  }
}
</script>
<style scoped>
.img_li{
  list-style-type: none; float: left; padding: 5px; border: 2px solid #ffffff;
}
.img_li_checked{
 border: 2px solid #F56C6C;
}
.img_li_not_checked{
  border: 2px solid #ffffff
}
</style>
