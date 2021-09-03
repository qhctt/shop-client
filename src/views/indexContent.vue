  <template>
  <div id="indexContent">
    <el-row class="top30">
      <el-card>
        <el-carousel :interval="4000" type="card" height="350px">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <el-tooltip class="item" effect="dark" :content="item.tittle" placement="top">
              <el-image :src="item.url"></el-image>
            </el-tooltip>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </el-row>
    <el-row class="top30">
      <el-card style="background-color: #F2F6FC">
        <el-row>
          <el-col :span="5">
            <el-image src="//img13.360buyimg.com/babel/s580x740_jfs/t1/163303/19/8612/240967/603f2afdE54fac7e9/6270a3dfba2f1847.jpg!cc_290x370.webp"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-image src="//img12.360buyimg.com/babel/s580x740_jfs/t1/162556/15/9172/203599/603ef7a1E153bf600/2cb4c8faa9ce7415.jpg!cc_290x370.webp"></el-image>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-row style="background-color: #ffffff">
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="8">
                  <div class="channelItemName">
                    <span >运动城</span>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div class="channelItemTittle">
                    <span >生命在于运动</span>
                  </div>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="https://img20.360buyimg.com/img/s200x200_jfs/t1/136955/8/16160/76065/5fb38669E525cf09e/9b2f88c529f6e28d.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="https://img13.360buyimg.com/img/s200x200_jfs/t24010/153/2416794254/141716/7ceaba15/5b7e6bb6N8649ea93.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
            </el-row>

            <el-row style="background-color: #ffffff;margin-top: 32px">
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="8">
                  <div class="channelItemName">
                    <span >生鲜馆</span>
                  </div>
                </el-col>
                <el-col :span="14">
                  <div class="channelItemTittle">
                    <span >尝遍天下鲜</span>
                  </div>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
              <el-row>
                <el-col :span="1"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="https://img30.360buyimg.com/img/s200x200_jfs/t1/186618/36/17897/87150/61121319Ee60e100b/739c054be7b6e366.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="2"><div class="none"></div></el-col>
                <el-col :span="10">
                  <el-image src="https://img11.360buyimg.com/img/s200x200_jfs/t1/132605/28/13293/86134/5f9238f1E239cceee/d2eb734496d258e8.jpg!cc_100x100.webp"></el-image>
                </el-col>
                <el-col :span="1"><div class="none"></div></el-col>
              </el-row>
            </el-row>
          </el-col>
          <el-col :span="1"><div class="none"></div></el-col>
          <el-col :span="5">
            <el-row>
            </el-row>
            <el-row>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexContent",
  components: {},
  data() {
    return {
      imgList: [
        {tittle: "8月来电好物季", url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/204538/27/418/100695/6110eb81E40c33891/98a22a2cf9021e4e.jpg.webp"},
        {tittle: "联想拯救者手机", url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100019677428/FocusFullshop/CkRqZnMvdDEvMTg5ODU0LzM3LzEyMzMzLzM4MDk2My82MGU2OTU3Y0VkMDE4NzRiNS8zYjJmMzgyYjA1YTY0NTZiLnBuZxIJNC10eV8wXzU1MAI47ot6Qh8KG-iBlOaDs-aLr-aVkeiAheS6jOS7o-aJi-acuhAAQhMKD-S8mOaDoOS6q-S4jeWBnBABQhAKDOeri-WNs-aKoui0rRACQgoKBui2heWAvBAHWPTRjM30Ag/cr/s/q.jpg"},
        {tittle: "PKPM安全计算软件", url:"https://img13.360buyimg.com/pop/s1180x940_jfs/t1/190794/40/15567/57641/6102697fEae09d1dc/276df898373421f5.jpg.webp"},
        {tittle: "小佩智能猫砂盆", url:"https://imgcps.jd.com/img-cubic/creative_server_cia/v2/2000366/100014384286/FocusFullshop/CkRqZnMvdDEvMTg2MDIyLzM0LzEzMTk1LzI2MDE5OS82MGU2OTM1YkUxMzZlNmYzNi82ZjI2YTQxMWViOTY3YjQyLnBuZxIJMy10eV8wXzU0MAI47ot6QhMKD-Wwj-S9qeeMq-WOleaJgBAAQhAKDOa7oTE5OeWHjzEwMBABQhAKDOeri-WNs-aKoui0rRACQgoKBuWKm-iNkBAHWJ7Jycr0Ag/cr/s/q.jpg"},
        {tittle: "新品上新", url:"https://imgcps.jd.com/ling4/100018752514/5LiK5Lqs5pud6YCb5paw5ZOB/5paw5ZOB5LiK5paw/p-5bd8253082acdd181d02fa1b/a68daee4/cr/s/q.jpg"},
        {tittle: "大码女装风格馆", url:"https://imgcps.jd.com/ling4/10034506421901/5aSn56CB5aWz6KOF6aOO5qC86aaG/54OtOOavj-a7oTMwMOWHjzMw/p-5bd8253082acdd181d02fa3b/9b8d8401/cr/s/q.jpg"},
      ]
    }
  }
  }
</script>

<style scoped>
.channelItemName{
  font-size: 1.1em;
  font-weight: bolder;
}
.channelItemTittle{
  margin-top: 6px;
  font-size: 0.6em;
  color: #909399;
}
.customCard{
  border: 1px solid #DCDFE6;
  border-radius: 5px;
}
</style>
