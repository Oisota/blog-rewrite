<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('projects', () => {
  return queryCollection('content').path(route.path).first()
})

const { data: archive } = await useAsyncData('archive', () => {
  return queryCollection('blog')
  	.order('date', 'DESC')
	.all()
})
</script>

<template>
<PageContent :page="page">
	<div class="archive-list">
		<div v-for="post in archive" class="hbox">
			<NuxtLink :to="post.path">{{post.title}}</NuxtLink>
			<span class="badge">{{post.date}}</span>
		</div>
	</div>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/archive.scss';
</style>