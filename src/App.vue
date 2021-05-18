<template>
	<div id="app">

		<Header>

			<Input
				@on-file-upload="onFileUpload"
				event="on-file-upload"
				type="file"
				label="Upload"
			/>

			<h1 class="title">CSV parser</h1>

			<Button
				@on-confirm-replace="onConfirmReplace"
				event="on-confirm-replace"
				:readonly="!contentStatus"
				label="Confirmar"
			/>

		</Header>

		<main class="content">

			<template v-if="contentStatus">

				<section class="enumList">
					<code>
						<UnitEnum
							ref="unit"
							:data="units"
							objectHeader="Units"
						/>
					</code>
				</section>

				<section class="enumList">
					<code>
						<UnitEnum
							ref="queueUnit"
							:data="queueUnits"
							objectHeader="QueueUnits"
						/>
					</code>
				</section>

			</template>

			<template v-else>
				<section class="empty">
					Faça o upload da planiha com os dados da unidade para iniciar.
					<br>
					:)
				</section>
			</template>

		</main>

	</div>
</template>

<style lang="sass">
	
</style>

<script>
import { Notify } from '@/helpers';
import { Button, Input, Header, UnitEnum, } from '@/components';

export default {
	title: 'Units Parser',
	name: 'EnumParser',
	components: {
		Button,
		Input,
		Header,
		UnitEnum,
	},
	data() {
		return {
			fileName: null,
			errors: null,
			content: [],
			units: [],
			queueUnits: [],
		}
	},
	watch: {
		errors() { 
			if (!this.errors.lenght) { 
				Notify(`A planilha contém ${ this.errors.length } erros. Por favor revise a planilha antes de continuar!`,'is-danger');
			}
		}
	},
	computed: {
		contentStatus() { return this.units.length > 0 || this.queueUnits.length > 0 },
	},
	methods: {
		onFileUpload(file) { this.$papa.parse(file, { complete: this.handleContent }); },
		handleContent(data) {
			this.errors = data.errors;

			data.data.forEach((item,i) => {
				if(i > 3) {
					if(item[11] === 'Sim') {
						this.units.push(item);
						return;
					}

					this.queueUnits.push(item);
				}
			});
		},
		onConfirmReplace() {
			const enumList = `${ this.handleEnumHeader(this.$refs.unit.$el.textContent) }\n\n${ this.handleEnumHeader(this.$refs.queueUnit.$el.textContent) }`;

			navigator.clipboard.writeText(enumList);

			Notify('Código copiado com sucesso!','is-success');
		},
		handleEnumHeader(data) { return data.replace('Object.freeze({    ', `Object.freeze({\n    `); }
	},
}
</script>

<style lang="sass">
#app
	.content
		display: flex
		justify-content: space-between
		padding: 20px

		.enumList
			background-color: gray
			border-radius: 5px
			color: white
			font-size: 14px
			font-weight: 500
			margin: auto 1%
			max-height: calc( 100vh - 140px)
			overflow-y: scroll
			padding: 20px
			width: 48%

		.empty
			align-items: center
			color: gray
			display: flex
			font-size: 30px
			justify-content: center
			margin: auto
			max-width: 400px
			text-align: center
			width: 100%
</style>
