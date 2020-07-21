<template>
	<div id="home">
		<NavBar class = 'home-nav'>
			<div slot="center">首页</div>
		</NavBar>
		<tab-control class="tab-control" 
			:titles="['流行','新款','精选']" @tabClick='tabClick' 
			ref='tabControl1' v-show="istabFixed"></tab-control>
		<scroll class="content" ref="scroll" :probe-type="3" @scroll='contentScroll' 
		:pull-up-load="true" @pullingUp='loadMore()'>
			<home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature></feature>
			<tab-control class="tab-control" 
				:titles="['流行','新款','精选']" @tabClick='tabClick'
				ref='tabControl2' ></tab-control>
			<goods-list :goods="showGoods"></goods-list>
		</scroll>
		<back-top  @click.native="backClick()" v-show="isShowBackTop"></back-top>
		
	</div>
</template>

<script>
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import Feature from './childComps/Feature.vue'
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	// default 导出才能把大括号删除掉
	import {getHomeMultidata,getHomeGoods} from 'network/home.js'
	import {debounce} from 'common/utils.js'
	
	
  export default {
    name:'Home',
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			Feature,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					pop:{page:0, list:[]},
					new:{page:0, list:[]},
					sell:{page:0, list:[]}
				},
				currentType:'pop',
				isShowBackTop:false,
				tabOffsetTop:0,
				istabFixed:false
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created() {
			// 1.请求多个数据
			this.getHomeMultidata();
			// 2.请求单个数据类别
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
			
		},
		mounted(){
			// 1.获取tablecontrol的offsettop
			// this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
		},
		destroyed(){
			console.log('home destroyed')
		},
		activated(){
			// this.$refs.scroll.scrollTo(0,this.saveY,0)
			// this.$refs.scroll.refresh()
			console.log('home activated')
		},
		deactivated(){
			// this.saveY = this.$refs.scroll.getScrollY
			console.log('home deactivated')
		},
		methods:{
			// 事件监听相关
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop';
						break;
					case 1:
						this.currentType = 'new';
						break;
					case 2:
						this.currentType = 'sell';
						break;
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
				// console.log(index)
			},
			backClick(){
				// 传到0，0  500ms
				this.$refs.scroll.scrollTo(0,0)
			},
			contentScroll(position){
				// 1.判断BackTop是否显示
				// console.log(position);
				this.isShowBackTop = position.y < -1000
				// 2.决定tabcontrol是否吸顶（position:fixed)
				this.istabFixed = (-position.y) > this.tabOffsetTop
			},
			loadMore(){
				// console.log('上拉加载更对');
				this.getHomeGoods(this.currentType)
				// 解决由于图片刷新速度引起的卡顿bug
				this.$refs.scroll.refresh()
			},
			swiperImageLoad(){
				this.tabOffsetTop	= this.$refs.tabControl2.$el.offsetTop
			},
			// 网络请求相关
			getHomeMultidata(){
				getHomeMultidata().then(res => {
					// console.log(res); 
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
					// console.log(this.banners,this.recommends);
				})
				// .catch(e => e)
			},
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
						// console.log(this.goods)
						// 深拷贝
						this.goods[type].list.push(...res.data.list)
						this.goods[type].page += 1 ;
						
						this.$refs.scroll.finishPullUp()
				})
			}
			
			
		}
  }
</script>

<style scoped>
	#home{
		/* padding-top: 44px; */
		height: 100vh;
		position: relative;
	}
	
	.home-nav{
		background-color: skyblue;
		color: #FFFFFF;
		
		/* 在使用浏览器原生滚动的时候，为了让导航不跟随一起滚动 */
		/* position: fixed;left: 0;right: 0;top: 0;
		z-index: 9; */
	} /* 
	.fixed{
		position: fixed;left: 0;right: 0;top: 44px;
	} */
	.tab-control{
		/* position: sticky; */
	 	/* top: 44px; */
		background-color: #FFFFFF; 
		position: relative;
		z-index: 9;
	}
	.content{
		/* height: 300px; */
		overflow: hidden;
		position: absolute;top: 44px;bottom: 49px;left: 0;right: 0;
	}
</style>
