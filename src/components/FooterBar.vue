<template>
  <div>
    <van-tabbar v-model="active" route :safe-area-inset-bottom="true">
      <van-tabbar-item icon="records" replact to="/">作品</van-tabbar-item>
      <van-tabbar-item icon="description" replact to="/class">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replact to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style>
</style>
