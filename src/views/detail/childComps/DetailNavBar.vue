<template>
	<div>
		<nav-bar>
			<div slot="left" class="back" @click="backClick()">
				<img src="~assets/imgs/common/back.svg" />
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles" :key='index' 
					class="title-item" :class='{active:index === currentIndex}'
					@click="isActive(index)">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	export default {
		name:'DetailNavBar',
		components:{
			NavBar
		},
		data(){
			return{
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		computed:{
			
		},
		methods:{
			isActive(index){
				this.currentIndex = index
				this.$emit('titleClick',index)
			},
			backClick(){
				// this.$router.back()
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.back{
		margin-top: 8px;
	}
	.title{
		display: flex;
	}
	.title-item{
		flex: 1;
	}
	.active{
		color: #FF8198;
	}
</style>
