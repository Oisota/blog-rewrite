<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data: tag } = await useAsyncData(`topics-${slug}`, () => {
  return queryCollection('tags')
	.where('slug', '=', slug)
	.first()
})

useHead({
	title: tag.value.name
})

const { data: posts } = await useAsyncData(`blog-tag-${slug}`, async () => {
  const posts = await queryCollection('blog').all()
  return posts.filter(post => {
	return post.tags && post.tags.some(name => name === tag.value.name)
  })
})
</script>

<template>
<section class="content">
	<h1>{{ tag.name }}</h1>
	<hr />
	<p>{{ tag.description }}</p>
	<div class="archive-list">
		<div v-for="post in posts" class="hbox">
			<NuxtLink :to="{ name: 'blog-date-slug', params: {date: post.date, slug: post.slug} }">
				{{post.title}}
			</NuxtLink>
			<span class="badge">{{post.date}}</span>
		</div>
	</div>
</section>
</template>

<style lang="scss">
@use 'assets/css/archive.scss';
</style>