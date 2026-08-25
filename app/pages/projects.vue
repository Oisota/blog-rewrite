<script setup lang="ts">
const { data: projects } = await useAsyncData('projectData', () => {
  return queryCollection('projects')
  	.order('index', 'ASC')
	.all()
})
</script>

<template>
<PageContent>
	<template v-for="project in projects">
		<div class="hbox project-header">
			<h3 class="project-title">{{project.title}}</h3>
			<NuxtLink :to="project.sourceCodeUrl">Source</NuxtLink>
		</div>
		<div class="project-description">
			<ContentRenderer v-if="project" :value="project"/>
		</div>
	</template>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/projects.scss';
</style>