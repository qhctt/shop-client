<template>
  <div id="computer">
    <el-card>
      <el-row style="padding: 10px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">全部分类</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">电脑</a></el-breadcrumb-item>
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
            <el-image src="https://img13.360buyimg.com/n7/jfs/t1/188627/23/16270/102899/6106396eEd8ea5856/440fbfb566a6a57f.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img14.360buyimg.com/n7/jfs/t1/177906/36/20846/108197/6124bc3aE1807b4bd/ee13348ec1c36d0d.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img10.360buyimg.com/n7/jfs/t1/145109/3/15805/117161/5fbe0942Ed50fb22b/86441739c237ef9c.jpg"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="https://img14.360buyimg.com/n7/jfs/t1/184582/36/12958/204233/60e3d206E2e7c6a8f/abf610116cba6995.jpg"></el-image>
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
          tagList: ['联想（lenovo）','戴尔','华为（HUAWEI）','ThinkPad','Hp','小米','acer','英特尔（Microsoft)','品纯','神舟','攀升'],
          checked: undefined
        },
        {
          name: '系统',
          tagList: ['Windows10专业版','Windows10带office','Windows10不带office','Windows10','MacOS','DOS/linux','其他'],
          checked: undefined
        },
        {
          name: '系列',
          tagList: [' 华硕-破晓','华硕-天选','Redolbooka','豆-adolbookRed','RedmiBook 16','华硕-灵耀14','雷神911','宏碁-ConceptD','ThinkBook 13s'],
          checked: undefined
        },
        {
          name: '内存容量',
          tagList: ['4GB','6GB','8GB','9GB','12GB','16GB','20GB','24GB','32GB','36GB','40GB','64GB'],
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
