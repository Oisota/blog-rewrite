<script setup lang="ts">
const props = defineProps(['post', 'excerpt'])

const { data: tags } = await useAsyncData(`blog-${props.post.date}-${props.post.slug}-tags`, () => {
  return queryCollection('tags')
  	.where('name', 'IN', props.post.tags)
	.all()
})
</script>

<template>

<article class="blog-content">
	<span class="blog-meta">
		<i class="la la-lg la-calendar" aria-hidden="true"></i>
		<span class="blog-date">{{post.date}}</span>
	</span>
	<span class="blog-tags">
		<NuxtLink v-for="tag in tags" class="tag" :to="{ name: 'topics-slug', params: {slug: tag.slug} }">#{{tag.name}}</NuxtLink>
	</span>
	<h1 class="blog-title">
		<NuxtLink :to="{ name: 'blog-date-slug', params: {date: post.date, slug: post.slug} }">
			{{post.title}}
		</NuxtLink>
	</h1>
	<hr>
	<ContentRenderer v-if="post" :excerpt="excerpt" :value="post"/>
</article>

</template>