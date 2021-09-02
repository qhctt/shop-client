<template>
  <div id="phone">
    <el-card>
      <el-row style="padding: 10px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">手机</a></el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-row style="padding: 5px" type="flex">
        <span>已选择标签: </span>
        <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{tag}}
        </el-tag>
      </el-row>
      <div>
        <el-row v-for="(category,catIndex) in categoryList" :key="catIndex">
          <el-col :span="2" class="tagCategory"><span>{{ category.name }}:</span></el-col>
          <el-col :span="22">
            <el-row>
              <el-col class="tag" :span="3" v-for="(tag,tagIndex) in category.tagList" :key="tagIndex"><span @click="printTag(catIndex,tagIndex)">{{tag}}</span></el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <el-row class="top30">
      <el-card style="background-color: #F2F6FC">
        <el-row>
          <el-col :span="5">
            <el-image src="https://img12.360buyimg.com/n7/jfs/t1/185831/6/16692/188898/6103e868E50d283d8/ae27ec51a20a6155.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img13.360buyimg.com/n7/jfs/t1/193120/31/19813/199057/6124c7aaEfd2336c0/b1af1ddc30e033d1.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img10.360buyimg.com/n7/jfs/t1/200993/30/2285/154047/611cd348Ef674d717/c996cbe9726c995c.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img13.360buyimg.com/n7/jfs/t1/189261/39/3773/121751/60a269ecE4cd8a070/df2735c6ee1a895a.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row style="padding: 10px">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
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
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.tag{
  font-size: 0.7em;
  padding: 5px;
}
.tagCategory{
  background-color: #F2F6FC;
  padding: 5px 5px 30px 5px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
