<template>
  <div id="app">
    <el-row>
      <el-col :span="4"><div class="none"></div></el-col>
      <el-col :span="16">
        <layout></layout>
        <router-view/>
      </el-col>
      <el-col :span="4"><div class="none"></div></el-col>
    </el-row>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
  name: 'App',
  components: {
    layout: () => import('@/components/layout')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.none{
  min-height: 5px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.center{
  text-align: center;
}
.top10{
  margin-top: 10px;
}
.top30{
  margin-top: 30px;
}
.top50{
  margin-top: 50px;
},
.padding10{
  padding: 10px;
},
.pdl10{
  padding-left: 10px;
},
.pdr10{
  padding-right: 10px;
},
.pdt10{
  padding-top: 10px;
},
.pdd10{
  padding-bottom: 10px;
},
.pdl5{
  padding-left: 5px;
},
.pdr5{
  padding-right: 5px;
},
.pdt5{
  padding-top: 5px;
}
.pdd5{
  padding-bottom: 5px;
},
.pdl30{
  padding-left: 30px;
},
.pdr30{
  padding-right: 30px;
},
.pdt30{
  padding-top: 30px;
},
.pdd30{
  padding-bottom: 30px;
}
</style>

