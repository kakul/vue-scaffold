<style lang="scss">
@import '../scss/main.scss';
.custom-style2 {
	color: #ddd;
	@extend .custom-class;
	/*component - specific style goes here*/
}
</style>
<template>
	<div class="wrapper">
		<div class="custom-style2">Child component</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			customData: {
				
			}
		}
	},
	methods: {
		customMethod() {
			var vm = this
			//access router and store as vm.$router and vm.$store
		}
	}
}
</script>