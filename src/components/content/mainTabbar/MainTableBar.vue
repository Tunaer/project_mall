<template>
  <tab-bar>
    <tab-bar-item path='/home' >
      <img slot="item-icon" src="~assets/imgs/tabbar/home.svg" />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/home_active.svg" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category'>
      <img slot="item-icon" src="~assets/imgs/tabbar/category.svg" />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/category_active.svg" />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/shopcart'>
      <img slot="item-icon" src="~assets/imgs/tabbar/shopcart.svg" />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/shopcart_active.svg" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img slot="item-icon" src="~assets/imgs/tabbar/profile.svg" />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/profile_active.svg" />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  <!-- <TabBar></TabBar> -->
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue';
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

  export default {
    name: 'MainTableBar',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
