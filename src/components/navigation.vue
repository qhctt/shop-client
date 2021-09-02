<template>
  <div id="navigation">
    <el-card>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="navigate">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">全部分类</el-menu-item>
        <el-menu-item>
          <el-autocomplete
              v-model="searchInput"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
              style="width: 500px"
              suffix-icon="el-icon-search"
              @blur="search"
              @keyup.enter.native="search"
          ></el-autocomplete>
        </el-menu-item>
        <el-menu-item index="3">我的订单</el-menu-item>
        <el-menu-item index="4" @click="drawer = true" v-if="!isLogin">个人中心</el-menu-item>
        <el-menu-item index="5" @click="passportDialogVisible = true" v-loading.fullscreen.lock="fullscreenLoading" v-if="isLogin">登录/注册</el-menu-item>
        <el-menu-item index="6" >
          <el-badge :value="shopCart.length" :max="99" class="item">
            <el-button icon="el-icon-shopping-cart-2">我的购物车</el-button>
          </el-badge>
        </el-menu-item>
      </el-menu>
    </el-card>
<!--    登录注册模板框架-->
    <el-dialog
        :visible.sync="passportDialogVisible"
        width="30%">
      <el-form>
        <el-form-item label="账号">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button >注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
<!--    个人中心模板框架-->
    <el-drawer
        :visible.sync="drawer"
        direction="rtl"
        size="20%"
        :show-close="false">
      <div class="avatar center">
        <el-avatar shape="square" :size="70" :src="userInfo.avatar"></el-avatar>
      </div>
      <div class="username center top50">
        <span>{{userInfo.username}}</span>
      </div>
      <div class="main center top50">
        <el-menu :default-active="userActiveIndex" class="el-menu-vertical-demo" mode="vertical" @select="userDrawerMenu" v-loading.fullscreen.lock="fullscreenLoading">
          <el-menu-item index="1">个人资料</el-menu-item>
          <el-menu-item class="top10" index="2">我的收藏</el-menu-item>
          <el-menu-item class="top10" index="3">浏览历史</el-menu-item>
          <el-menu-item class="top10" index="4">注销</el-menu-item>
        </el-menu>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import {validatenull} from "../utils/validate";
export default {
  name: "navigation",
  components: {},
  data() {
    return {
      activeIndex: '1',
      userActiveIndex:"1",
      drawer: false,
      restaurants: [],
      searchInput: '',
      timeout:  null,
      passportDialogVisible: false,
      loginForm: {
        username: '',
        password: ''
      },
      fullscreenLoading :false
    }
  },
  methods: {
    loadAll() {
      return [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" }
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    search() {
      if(this.searchInput =="手机"){
        this.$router.push({path: '/category/phone/',query: {keyword: this.searchInput}})
      }else if(this.searchInput =="电脑"){
        this.$router.push({path: '/category/computer/',query: {keyword: this.searchInput}})
      }
    },
    navigate(key){
      console.log(key)
      switch (key){
        case "1":
          this.$router.push({path: '/index'})
          break
        case "2":
          this.$router.push({path: '/category/phone'})
          break
        case "6":
          this.$router.push({path: '/shopcart'})
          break
        default:
          console.log("没有这个选项")
      }
    },
    userDrawerMenu(key) {
      switch (key) {
        case "1":
          break
        case "2":
          break
        case "3":
          break
        case "4":
         this.logout()
          break
        default:
          console.log("没有这个选项")
      }
    },
    login(){
      this.fullscreenLoading = true
      this.$store.dispatch("login").then(() =>{
        this.fullscreenLoading = false
        this.$message({
          type: 'success',
          message: '登录成功'
        });
      })
      this.passportDialogVisible = false
    },
    logout(){
      this.$store.dispatch("logout")
      this.fullscreenLoading = true
      this.$store.dispatch("logout").then(() =>{
        this.fullscreenLoading = false
        this.drawer = false
        this.$message({
          type: 'success',
          message: '已退出登录'
        });
      })
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  computed: {
    userInfo(){
      return this.$store.getters.userInfo
    },
    isLogin(){
      return validatenull(this.userInfo.username)
    },
    shopCart(){
      return this.$store.getters.shopCart
    }

  }
}
</script>

<style scoped>
.avatar{

}
.username{
  font-size: 1.2em;
}
.main{
  float: left;
  padding-right: 5px;
}
</style>
