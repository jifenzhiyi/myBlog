<template>
  <router-link :to="{ name: 'index' }"><div class="abs errorhtml" /></router-link>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="less" scoped>
.errorhtml {
  top: 0; left: 0; right: 0; bottom: 0;
  background:url('../../static/404.jpg') center no-repeat #fff;
  background-size: 1200px 600px;
}
</style>
