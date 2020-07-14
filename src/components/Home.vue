<template>
  <div >
      <el-button type='info' @click="logout">退出登录</el-button>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    logout() {
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="less" scoped>

</style>