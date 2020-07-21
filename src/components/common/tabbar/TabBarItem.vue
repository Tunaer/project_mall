<template>
  <div class="tab-bar-item" @click="itemClick()">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>


  </div>
</template>

<script>
  export default {
    name:'TableBarItem',
    // 可以动态的获取标签中定义的path属性
    props:{
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive: false
      }
    },
    computed:{
      isActive(){
        // console.log(this.$route.path)   指的是当前路由的路径
        // console.log(this.path);      指的是控件调用方法时的该控件的路径
        //
        // return this.$route.path.indexOf(this.path) !== -1;
        return this.$route.path.includes(this.path);
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {};
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path).catch(e => e);
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    /* flex：1   均等分 */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /* vertical-align:middle; 可以去除图片下面的3px边界 */
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color: red;
  }
</style>
