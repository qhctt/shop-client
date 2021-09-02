<template>
  <div id="elementUINotice">
    <el-col>
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
    </el-col>
  </div>
</template>

<script>
export default {
  name: "elementUINotice"
}
</script>

<style scoped>

</style>