<template>
	<section class="__input" :class="[ rootModifiers ]">

		<template v-if="type === 'file'">

			<input
				@change="fileUpload"
				class="is-hidden"
				id="file"
				type="file"
			/>

			<label
				class="button" :class="[ modifiers ]"
				for="file"
			>
				{{ label }}
			</label>

		</template>

	</section>
</template>

<script>
export default {
	name: 'InputComponent',
	props: {
		event: {
			default: 'on-input',
			type: String,
		},
		label: String,
		modifiers: {
			default: '',
			type: String,
		},
		rootModifiers: {
			default: '',
			type: String,
		},
		type: String,
	},
	methods: {
		fileUpload({ target:{ files } }) { this.$emit(this.event, files[0]); },
	}
}
</script>
