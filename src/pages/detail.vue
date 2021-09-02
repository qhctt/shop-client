<template>
  <div id="detail">
    <el-row>
      <el-col :span="10">
        <el-image></el-image>
      </el-col>
      <el-col :span="14">
        <el-table
            :data="data"
            style="width: 100%">
          <el-table-column>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {}
  },
  mounted() {
    let goodsdetail={
      id: '',
      name: '',
      prime: '',
      discount: '',
      coupinList: '',
      wigth: '',

    }
  }
}

</script>

<style scoped>

</style>