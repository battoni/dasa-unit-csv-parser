<template>
	<div>

<pre>export const {{ objectHeader }} = Object.freeze({</pre>

<pre v-for="(item,index) in data" :key="index">
    {{ newEnum(item) }}: {<br>
        name: {{ item[5] }},<br>
        unitId: {{ item[4] }},<br>
        glieseCode: {{ item[7] }},<br>
        serviceDesk: {{ item[6] }},<br>
    },
</pre>

<pre>});</pre>

	</div>
</template>

<script>
export default {
	name: 'UnitEnumComponent',
	props: {
		data: Array,
    objectHeader: String,
	},
	methods: {
        newEnum(unit) { return `${ this.formatEnum(unit[2]) }_${ this.formatEnum(unit[5]) }` },
        formatEnum(str) { 
          return String.prototype.toUpperCase.call(str)
                  .replace(/\s/g, '')
                  .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                  .replace('-','_')
                  .replace('/','_'); 
        },
	}
}
</script>
