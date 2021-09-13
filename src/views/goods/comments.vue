<template>
  <div id="goodsComments">
    <div class="header">
      <el-row>
        <el-col :span="8">
          <apexchart type="donut" :options="chart.chartOptions" :series="chart.series"></apexchart>
        </el-col>
        <el-col :span="2"><div class="none"></div></el-col>
        <el-col :span="16">
          <div v-for="(item,index) in tags" :key="index" class="pdr10 pdt30 fl">
            <el-tag type="info">{{item.name}} {{item.count}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row>
          <div class="commentsCategory"></div>
          <div class="sortBtn"></div>
      </el-row>
    </div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">全部评论</el-menu-item>
        <el-menu-item index="2">晒图</el-menu-item>
        <el-menu-item index="3">视频晒单</el-menu-item>
        <el-menu-item index="4">追评</el-menu-item>
        <el-menu-item index="5">好评</el-menu-item>
        <el-menu-item index="6">中评</el-menu-item>
        <el-menu-item index="7">差评</el-menu-item>
        <el-menu-item index="8">只看当前商品评价</el-menu-item>
        <el-menu-item>
          <el-select>
            <el-option
                    v-for="item in sortTypeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </el-menu-item>
      </el-menu>
      <el-divider></el-divider>
    </div>
    <div class="main">
      <el-row v-for="(comment,commentIndex) in commentList" :key="commentIndex" class="pdt">
        <el-col :span="4" style="text-align: center">
          <div><el-avatar :src="comment.userInfo.avatarUrl" :size="60"></el-avatar></div>
          <div class="pdt10"><span style="...">{{comment.userInfo.username}}</span></div>
        </el-col>
        <el-col :span="20">
          <el-row>
            <el-col style="text-align: left">
              <el-rate v-model="comment.rate" :disabled="true"></el-rate>
            </el-col>
            <el-col style="text-align: right">
                <span style="color: #909399;">评论于 {{comment.date}}</span>
            </el-col>
          </el-row>
          <el-row style="text-align: left">
            <p style="margin-right: 50px">{{comment.content.text}}</p>
            <div v-if="comment.hasImg">
              <div v-for="(img,imgIndex) in comment.content.imgList" :key="imgIndex" class="img_li" @click="checkImg(commentIndex,imgIndex)">
                <el-tag class="pdr5" :class="{img_li_checked: img.checked,img_li_not_checked: !img.checked}" style="height: 61px;"
                        type="info"
                        effect="plain"
                        size="medium">
                  <el-image :src="img.url" style="width: 55px; height:55px"></el-image>
                </el-tag>
              </div>
              <el-image :src="comment.content.checkedImgUrl" style="width: 300px;height: 400px" :previewSrcList="previewSrcList"></el-image>
            </div>
          </el-row>
          <div style="text-align: left">
            <el-tag style="border: 0" effect="plain" type="danger" size="medium"><i class="el-icon-star-off"></i>{{comment.likes}}</el-tag>
            <el-tag style="border: 0" effect="plain" type="success" size="medium"><i class="el-icon-chat-dot-round"></i>{{comment.comments}}</el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {validatenull} from "../../utils/validate";
// import {videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  name: "goodsComments",
  components: {
    // videoPlayer
  },
  props: ['id'],
  data() {
    return {
      chart: {
        series: [131, 1.9, 3.6],
        chartOptions: {
          colors: ['#3a83c2', '#e63c69', '#6cf5e0'],
          labels: ['好评', '中评', '差评'],
        },
      },
      tags: [
        {name: '清晰度高',count: '3075'},
        {name: '反应超快',count: '2814'},
        {name: '漂亮大方',count: '1757'},
        {name: '色彩饱满',count: '823'},
        {name: '待机给力',count: '764'},
        {name: '性能一流',count: '750'},
        {name: '手感一流',count: '687'},
        {name: '音质上乘',count: '484'},
        {name: '照片清晰',count: '100'},
        {name: '内存充足',count: '94'},
      ],
      activeIndex: '1',
      sortTypeList: [{value: '选项1',label: '默认排序'},{value: '选项2',label: '时间排序'}],
      sortTypeSelected: '默认排序',
      commentList: [],
      previewSrcList: [],
    }
  },
  methods:{
    handleSelect(key) {
        switch (key) {
          case "1":
            this.$router.push({path: '/detail/shopComments/commentDetail'})
            break
          case "2":
            break
          case "3":
            break
          case "4":
            break
          case "5":
            break
          case "6":
            break
          case "7":
            break
          case "8":
            break
          default:
            console.log("没有这个选项")
        }
    },
    checkImg(commentIndex, imgIndex){
      this.commentList[commentIndex].content.imgList.forEach((item) =>{
        item.checked = false
      })
      this.commentList[commentIndex].content.imgList.forEach((item,index) =>{
        if(imgIndex === index){
          item.checked = true
          this.commentList[commentIndex].content.checkedImgUrl = item.url
        }
      })
      let previewSrcList = []
      this.commentList[commentIndex].content.imgList.forEach((item) =>{
        previewSrcList.push(item.url)
      })
      this.previewSrcList = previewSrcList
    }
  },
  mounted() {
    let commentList = [
      {
        userInfo:{
          username: 'QH',
          avatarUrl: 'https://video.codeseeding.com/image/default/83D5CEE199904C4AA74DABC91C726270-6-2.jpg'
        },
        rate: 4.5,
        date: '2021-08-08 22:43',
        likes: 198,
        comments: 3889,
        content: {
          text: '苹果黑色大气，这到我手更偏宜 3 5 0 0 ，是在图视；频清晰可见的！色彩都很好，运行非常流畅，屏幕也够大，声音非常的清晰，手感非常不错，颜色细腻，苹果手机不论是前置摄像头还是后置摄像头，拍照清晰又不失真，画面处理的很棒，非常喜欢人像模式，背景虚化很自然，有多种模式可以选择，切换效果都很赞。苹果手机镜头设计感极强，充电速度非常快，标配非常给力。苹果手机黑色是非常大气的一款颜色，之前在实体店也看到过，但是更信赖在京东购买。物流很给力，收到货全新完好未拆封，特别满意。无论是办公还是居家使用，都很赞，孩子用来学网课也很不错哦，可以保护孩子的眼睛，苹果的质量很好。苹果手机屏幕很清晰，夜晚拍摄效果也很赞。外观非常漂亮，颜值很高，屏幕也很大气，超大屏，手机反应速度特别快。苹果外观来看辨识度也很高，屏幕光鲜亮丽，通透不失温润。双扬声器立体感非常出色，声音饱满，还原度逼真，非常不错的新颖设计。拍照效果绝了，像素高超广角，自动对焦，响应灵敏度顶配。苹果手机不仅硬件高精尖，系统优化也非常完美，苹果手机用来打游戏，也非常的流畅，苹果自带一些小程序也非常好用。最爱苹果产品了，以后还会继续买。',
          imgList: [
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/186328/19/17344/101851/610fed94Ea93c8bdd/3cd9d6e86188ec88.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/190513/5/17286/96500/610fed95E9c40a4de/f5e415e30f3bc457.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/179919/17/18300/111860/610fed95E0b478a97/155e0fbd2a7f944a.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/202116/17/401/86969/610fed96E1adac864/af4dcb0d48db8780.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/192153/39/17522/129475/610fed97E64476f11/86206eae0ff981fa.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/193765/3/17329/94623/610fed98E8232ffba/97a6754a3ebc06ba.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/203367/37/405/73057/610fed98E917a53c4/95b28983596825e1.jpg",
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/191679/39/17305/104465/610fed99E6e5e814d/b4085b826f4273f2.jpg"
          ],
          videoUrl: 'https://jvod.300hu.com/vod/product/300da0a1-61fd-4377-b3fd-672f65d9e8e3/395e0ae43c934494a6c69b8651821ba6.mp4?source=2&h265=h265/18799/de87578da42f4927b2c437ba027129fa.mp4'
        }
      }
    ]
    commentList.forEach((item) =>{
      let hasImg = false
      if(!validatenull(item.content.imgList)){
        hasImg = true
        let imgList= []
        for(let i = 0; i<item.content.imgList.length; i++){
          let img = {url: item.content.imgList[i],checked: false}
          i === 0 ? img.checked = true : img.checked = false
          imgList.push(img)
        }
        item.content.imgList = imgList
        item.content = Object.assign(item.content,{checkedImgUrl: imgList[0].url})
      }
      item = Object.assign(item,{hasImg: hasImg})
    })
    this.commentList = commentList
  },
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
