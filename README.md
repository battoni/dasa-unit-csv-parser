# Units Parser

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Some patterns that were used on this project

#### Templates

- If an element has a single children, no spacing between childs is necessary. If an element has children, a line breack is necessary between then.

Single child

				<section>
					<span>I'm a single child!</span>
				</section>

Multiple child

				<section>
				
					<span>I'm the first child!</span>
					
					<span>I'm the second child!</span>
					
				</section>


- Templates are only rendering content. No logic rules are allowed here. Instead of placing your logic within the template, create a computed property and use is in the template.

- If you have just two props, a single line is fine. If you have more than two props break lines.

Only two props


			<Input type="text" class="foo />


Multiple Props

			<Input
				@on-file-upload="onFileUpload"
				event="on-file-upload"
				type="file"
				label="Upload"
			/>

- Try to organize your props in the following order:

		v-if
		v-for
		events (@)
		bindings
		strings (eg. stuff="foo")

- Class atribute can follow the following pattern:

		<Element class="static static" :class="[ dynamic, { 'is-something' : computedProperty }]" />

#### Scripts

- Imports are being made following this order:

		external libs (eg.import Glide from '@glidejs/glide'; '~';)
		internal dependecies (eg: import { mapActions, mapGetters } from 'vuex';)
		internal abstractions (eg: import { Notify } from '@/helpers';)
		components (eg:  import { Button, Input, Header, UnitEnum, } from '@/components';)
		partials (eg: import { HeaderSection } from '../partials; )

- The vue object is following this pattern:
		export default {
				name: '',
				mixins: [],
				components: {},
				props: {},
				data() {
						return {};
				},
				watch: {},
				computed: {},
				methods: {},
				beforeCreate() {},
				created() {},
				beforeMount() {},
				mounted() {},
				beforeUpdate() {},
				updated() {},
				beforeDestroy() {},
				destroyed() {}
		};

- If a object do a single action, it can be a one-liner

	computed: {
		contentStatus() { return this.units.length > 0 || this.queueUnits.length > 0 },
	},

#### Styles

- lang sass is being used

- attribute scoped is being used all over the application. If a parent component needs to modify the styles of a child component you have two options:
1 - Pass your classes using the prop modifiers
2 - Create a second <style></style>  instance an use the root component selector to select the component

- If a parent has no attributes no line breaks are necessary.

Parent without attributes

	.parent
		.children
				display: block


Parent with attributes

	.parent
				font-size: 12px
				
				.children
						display: block

- Always sort your css attributes in ascending order

- src/sass are meant for global use. Mind your use of it.

#### File Structure

- We are using barrel files to export any reuasable code. 

		!! watch out for circular dependecies
		!! read more about barrel files use case [here](https://srinivasankk.com/javascript-barrel/ )
