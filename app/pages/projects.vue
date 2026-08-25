<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('projects', () => {
  return queryCollection('content').path(route.path).first()
})

const { data: projects } = await useAsyncData('projectData', () => {
  return queryCollection('projects')
  	.order('index', 'ASC')
	.all()
})
</script>

<template>
<PageContent :page="page">
	<Project v-for="project in projects" :project="project"></Project>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/projects.scss';
</style>