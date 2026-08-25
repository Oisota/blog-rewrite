<script setup lang="ts">
const { data: projects } = await useAsyncData('projectData', () => {
  return queryCollection('projects')
  	.order('index', 'ASC')
	.all()
})
</script>

<template>
<PageContent>
	<Project v-for="project in projects" :project="project"></Project>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/projects.scss';
</style>