<script setup lang="ts">
const props = defineProps(['page'])
</script>
<template>
	<section class="content">
		<h1><slot name="pageTitle">{{ page.title }}</slot></h1>
		<hr />
		<div>
			<ContentRenderer v-if="page" :value="page"/>
		</div>
		<slot name="pageContent"></slot>
	</section>
</template>