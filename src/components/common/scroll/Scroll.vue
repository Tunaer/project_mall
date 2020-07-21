<template>
	<div class="wrapper" ref='wrapper'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default{
		name:'Scroll',
		data(){
			return{
				scroll:null
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted() {
			// 1.创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				// proobeType 3 实时监听
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad
			})
			// 2.监听滚动的位置
			if(this.probeType ===2 || this.probeType ===3){
				this.scroll.on('scroll',(position) => {
					// console.log(position)
					this.$emit('scroll',position)
				})
			}
			// 3.监听上拉事件
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',() => {
					// console.log('上拉加载更多');
					 this.$emit('pullingUp')
					// 2秒后再次上拉加载,设置延迟避免重复加载
					setTimeout(() => {
						this.scroll && this.scroll.finishPullUp()
					}, 2000);
				})
			}
		},
		methods:{
			scrollTo(x,y,time=500){
				this.scroll.scrollTo(x,y,time);
			},
			finishPullUp(){
				this.scroll.finishPullUp();
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			}
		}
	}
</script>

<style>
</style>
