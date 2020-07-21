<template>
	<Swiper>
		<swiper-item v-for="(item,index) in banners" :key="item.index">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad()"/>
			</a>
		</swiper-item>
	</Swiper>
</template>

<script>
	// import Swiper from 'components/common/swiper/Swiper.vue'
	// import SwiperItem from 'components/common/swiper/SwiperItem.vue'
	import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				isLoad:false
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imageLoad(){
				if(!this.isLoad){
					this.$emit('swiperImageLoad')
					this.isLoad = true
				}
			}
		}
	}
</script>

<style>
</style>
