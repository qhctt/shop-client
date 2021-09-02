<template>
  <div id="category">
    <el-card>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="category">
        <el-menu-item index="1">手机</el-menu-item>
        <el-menu-item index="2">电脑</el-menu-item>
        <el-menu-item index="3">服装</el-menu-item>
        <el-menu-item index="4">家具</el-menu-item>
        <el-menu-item index="5">生鲜</el-menu-item>
        <el-menu-item index="6">母婴</el-menu-item>
        <el-menu-item index="7">艺术</el-menu-item>
        <el-menu-item index="8">学习</el-menu-item>
        <el-menu-item index="9">美妆</el-menu-item>
        <el-menu-item index="10">医疗</el-menu-item>
        <el-menu-item index="11">交通</el-menu-item>
        <el-menu-item index="12">理财</el-menu-item>
      </el-menu>
    </el-card>
    <el-row>
      <el-card>
        <router-view></router-view>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "category",
  components: {},
  props: ['keyword'],
  data() {
    return {
      activeIndex: '',
      inputVisible: false,
      inputValue: '',
      categoryList: [
        {
          name: '品牌',
          tagList: ['小米（MI）','荣耀（HONOR）','华为（HUAWEI）','vivo','OPPO','黑鲨','一加','三星（SAMSUNG）'
            ,'魅族（meizu）','Apple','真我（realme）','摩托罗拉（Motor...','中兴（ZTE）','联想（lenovo）','ROG','努比亚（nubia）'],
          checked: undefined
        },
        {
          name: '功能',
          tagList: ['超大字体','超大音量','SOS功能','语音命令','语音识别(文字语音互转)','远程协助','极简桌面模式'],
          checked: undefined
        },
        {
          name: '系统',
          tagList: ['Android','EMUI 11.0（基于Android 10）','HarmonyOS 2','IOS','其他OS'],
          checked: undefined
        },
        {
          name: 'CPU型号',
          tagList: ['骁龙855 plus','麒麟990','麒麟990 5G','骁龙768','GExynos980','MTK Helio G85','MT6873','紫光展锐','骁龙865 plus','天玑1000 plus'],
          checked: undefined
        }
      ]
    }
  },
  computed:{
    dynamicTags(){
      let dynamicTags = []
      //注意this.$route 和  this.$router 是不一样的，router是整体的vue-router对象，route是当前的路由对象
      let keyword = this.$route.query.keyword
      if(keyword!=null){
        dynamicTags.push(keyword)
      }
      this.categoryList.forEach((item) =>{
        let tag = item.checked
        //在vue中，判断一个值不为空（空字符串或未定义）不能直接卸载标胶运算中，我们应该写tag这个字符串本身
        if(tag){
          dynamicTags.push(tag)
        }
      })
      return dynamicTags
    }
  },
  watch: {
    dynamicTags(){

    }
  },
  methods: {

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },

    printTag(catIndex,tagIndex){
      console.log(this.categoryList[catIndex].tagList[tagIndex])
      this.categoryList[catIndex].checked = this.categoryList[catIndex].tagList[tagIndex]
    },
    category(key){
      switch (key){
        case "1":
          this.$router.push({path: '/category/phone'})
          break
        case "2":
          this.$router.push({path: '/category/computer'})
          break
        case "3":
          break
        default:
          console.log("没有这个选项")
      }
    }
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
