<style lang="scss">
@import '../scss/main.scss';
div {
	border: 1px solid #ccc;
	@extend .custom-class;
}
</style>
<template>
	<div class="wrapper">
		<child></child>
		<router-view></router-view>
	</div>
</template>
<script>
import Child from './Child.vue'
export default {
	components: { Child },
	data() {
		return {
		}
	}
}
</script>
