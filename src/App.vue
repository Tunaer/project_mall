<template>
	<div id="app">
		<!-- exclude 除...之外  Detail为组件的name -->
		<keep-alive exclude="Detail">
			<router-view></router-view>
		</keep-alive>
		<MainTabbar></MainTabbar>
	</div>
</template>

<script>
	import MainTableBar from 'components/content/mainTabbar/MainTableBar.vue'

export default {
  name: 'App',
  components: {
		MainTabbar:MainTableBar
  }
}
</script>

<style>
	/* @import url("./assets/css/base.css"); */
	/* @import './assets/css/base.css'; */
	@import 'assets/css/base.css';
</style>
