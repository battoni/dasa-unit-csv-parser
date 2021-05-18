<template>
	<section class="__headerComponent">
		<slot />
	</section>
</template>

<script>
export default {
	name: 'HeaderComponent',
}
</script>

<style lang="sass">
.__headerComponent
	align-items: center
	background-color: $white
	box-shadow: 1px 11px 5px -9px rgba(0,0,0,0.03)
	display: flex
	justify-content: space-between
	padding: 20px
</style>

