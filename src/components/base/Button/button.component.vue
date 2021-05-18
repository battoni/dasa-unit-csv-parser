<template>
	<button
		@click="emitEvent"
		class="_button button" :class="[ modifiers, { 'is-readonly' : readonly }]"
	>
		{{ label }}
	</button>
</template>

<script>
export default {
	name: 'ButtonComponent',
	props: {
		readonly: Boolean,
		event: {
			default: 'on-click',
			type: String,
		},
		label: String,
		modifiers: {
			default: '',
			type: String,
		},
	},
	methods: {
		emitEvent() { if (!this.readonly) { this.$emit(this.event); } },
	}
}
</script>

<style lang="sass">
._button
	&.is-readonly
		background-color: $grayLight
		color: #808080
		cursor: initial
</style>
