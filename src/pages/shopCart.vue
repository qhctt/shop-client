<template>
  <div id="shopCart">
      <el-card ref="shopCardList">
        <el-row>
          <div class="fl top10"><span style="font-size: 1.3em;margin-top: 20px">全部商品  {{shopCart.length}}</span></div>
          <div class="fr">
            <span>配送至：</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                  v-for="(item,index) in userInfo.addressList"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </div>
        </el-row>
        <!--    <el-empty description="购物车为空"></el-empty>-->
        <el-row class="top30" style="padding: 20px">
          <el-col class="padding10" :span="3"><el-checkbox v-model="allChecked">全选</el-checkbox></el-col>
          <el-col class="padding10" :span="11"><span>商品</span></el-col>
          <el-col class="padding10" :span="2"><span>单价</span></el-col>
          <el-col class="padding10" :span="4"><span>数量</span></el-col>
          <el-col class="padding10" :span="2"><span>小计</span></el-col>
          <el-col class="padding10" :span="2"><span>操作</span></el-col>
        </el-row>
        <el-card  shadow="none" v-for="(item,index) in shopCart" :key="index">
          <el-row>
            <el-col class="padding10" :span="1"><el-checkbox v-model="item.checked"></el-checkbox></el-col>
            <el-col class="padding10" :span="2"><el-image :src="item.imgUrl"></el-image></el-col>
            <el-col class="padding10" :span="11"><span>{{item.name}}</span></el-col>
            <el-col class="padding10" :span="2"><span>{{'￥'+item.price}}</span></el-col>
            <el-col class="padding10" :span="4"><el-input-number v-model="item.count" :min="1" size="mini"></el-input-number></el-col>
            <el-col class="padding10" :span="2"><span>{{ item.price * item.count }}</span></el-col>
            <el-col class="padding10" :span="2"><el-button size="mini" @click="deleteItem(index)">删除</el-button></el-col>
          </el-row>
        </el-card>
      </el-card>
    <el-card class="footer">
      <el-row style="width: 1240px">
        <el-col :span="2"><el-checkbox v-model="allChecked" style="margin-top: 9px">全选</el-checkbox></el-col>
        <el-col :span="2"><el-button type="text" style="font-size: 1em; color: black">删除选中的商品</el-button></el-col>
        <el-col :span="2"><el-button type="text" style="font-size: 1em; color: black">移入关注</el-button></el-col>
        <el-col :span="1"><el-button type="text" style="font-size: 1em; color: black">清空购物车</el-button></el-col>
        <el-col :span="10"><div class="none"></div></el-col>
        <el-col :span="3" style="margin-top: 8px"><span>已选择{{totalChecked}}件商品</span></el-col>
        <el-col :span="2" style="margin-top: 8px"><span>总价:￥{{totalPrice}}</span></el-col>
        <el-col :span="2"><el-button @click="purchase" type="primary">去结算</el-button></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  components: {},
  data() {
    return {
      address: [],
      allChecked: false
    }
  },
  watch: {
    allChecked(val){
      if(val === true){
        this.shopCart.forEach((item) =>{
          item.checked= true
        })
      }else if(val === false) {
        this.shopCart.forEach((item) => {
          item.checked = false
        })
      }
    }
  },
  computed:{
    userInfo(){
      return this.$store.getters.userInfo
    },
    shopCart(){
      return this.$store.getters.shopCart
    },
    totalPrice(){
      let totalPrice = 0
      this.shopCart.forEach((item) =>{
        if(item.checked)totalPrice += item.price * item.count
      })
      return totalPrice
    },
    totalChecked(){
      let totalChecked = 0
      this.shopCart.forEach((item) =>{
        if(item.checked)totalChecked +=item.count
      })
      return totalChecked
    }
  },
  methods:{
    deleteItem(item){
      this.$confirm('确定要删除吗？')
          .then(() => {
            this.shopCart.splice(this.shopCart.indexOf(item),1)
          })
          .catch(() => {
            this.$message.error('删除失败')
          });
      // // [...str]为ES6的拓展运算符，可以在每次循环之后 重置 当前正在foreach的数组
      // [...this.shopCart].forEach((item) =>{
      //   if(item.checked) {
      //     this.shopCart.splice(this.shopCart.indexOf(item),1)
      //   }
      // })
    },
    purchase(){

    }
  }
}

</script>

<style scoped>
.footer{
  position:fixed;
  bottom: 0;
}
</style>