<template>
  <div id="layout">
    <navigation></navigation>
    <indexContent></indexContent>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {
    navigation:() => import('@/components/navigation'),
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
