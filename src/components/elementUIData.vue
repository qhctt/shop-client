<template>
  <div id="elementUIData">
   <el-row>
     <el-col span="8">
       <div >
         <el-alert
             title="成功提示的文案"
             type="success">
         </el-alert>
         <el-alert
             title="消息提示的文案"
             type="info">
         </el-alert>
         <el-alert
             title="警告提示的文案"
             type="warning">
         </el-alert>
         <el-alert
             title="错误提示的文案"
             type="error">
         </el-alert>
       </div>
     </el-col>
     <el-col span="8">
       <div>
         <el-alert
             title="不可关闭的 alert"
             type="success"
             :closable="false">
         </el-alert>
         <el-alert
             title="自定义 close-text"
             type="info"
             close-text="知道了">
         </el-alert>
         <el-alert
             title="设置了回调的 alert"
             type="warning"
             @close="hello">
         </el-alert>
       </div>
     </el-col>
     <el-col span="8">
       <div>
         <el-alert
             title="成功提示的文案"
             type="success"
             center
             show-icon>
         </el-alert>
         <el-alert
             title="消息提示的文案"
             type="info"
             center
             show-icon>
         </el-alert>
         <el-alert
             title="警告提示的文案"
             type="warning"
             center
             show-icon>
         </el-alert>
         <el-alert
             title="错误提示的文案"
             type="error"
             center
             show-icon>
         </el-alert>
       </div>
     </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert('Hello World!');
    }
  },
  name: "elementUIData"
}
</script>

<style scoped>

</style>