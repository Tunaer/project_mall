<template>
	<div class="recommend">
		<div v-for="(item,index) in recommends" :key="item.index" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{item.title}}</div>
			</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'RecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
			
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		font-size: 15px;
		padding: 15px 0 20px;
		border-bottom: 8px solid #eee;
		width: 100%;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 88%;
		height: 80px;
		margin-bottom: 8px;
	}
</style>
