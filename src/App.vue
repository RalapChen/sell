<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/goods">评论</router-link> </div>
      <div class="tab-item"><router-link to="/goods">商家</router-link></div>
    </div>
    <router-view></router-view>
    <p>啊啊啊</p>
    <div>
      222222222222222222222
      <div class="tab">
        <div class="tab-item"><router-link to="/goods">商品</router-link></div>
        <div class="tab-item"><router-link to="/goods">评论</router-link> </div>
        <div class="tab-item"><router-link to="/goods">商家</router-link></div>
      </div>
      <router-view></router-view>
      <p>啊啊啊</p>
    </div>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
export default {
  components: {
    'v-header':header
  }
}
</script>

<style  lang="scss" rel="stylesheat/sass">
    .tab{
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .tab-item{
      flex: 1;
      text-align: center;
    }
</style>
