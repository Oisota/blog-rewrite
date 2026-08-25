<script setup lang="ts">
const { data: archive } = await useAsyncData('archive', () => {
  return queryCollection('blog')
  	.order('date', 'DESC')
	.all()
})
</script>

<template>
<PageContent>
	<div class="archive-list">
		<div v-for="post in archive" class="hbox">
			<NuxtLink :to="{ name: 'blog-date-slug', params: {date: post.date, slug: post.slug} }">
				{{ post.title }}
			</NuxtLink>
			<span class="badge">{{post.date}}</span>
		</div>
	</div>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/archive.scss';
</style>