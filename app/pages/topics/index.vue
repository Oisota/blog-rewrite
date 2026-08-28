<script setup lang="ts">
const { data: tags } = await useAsyncData('topics', () => {
  return queryCollection('tags')
  	.order('name', 'ASC')
	.all()
})
const totalTags = tags?.value?.length || 0

const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog').all()
})

// creating a default dict basically to store tag counts
const counts = new Proxy({}, {
	get(target: any, name: string) {
		return name in target ? target[name] : 0;
	}
})
if (posts.value) {
	for (let post of posts.value) {
		for (let tag of post.tags) {
			counts[tag] += 1
		}
	}
}

interface TopicItem {
	style: string
	name: string
	slug: string
	count: number
}

const topics = tags?.value?.map((tag) => {
	const count = counts[tag.name]
	const percent = Math.floor((count / totalTags) * 100)
	const newTag: TopicItem = {
		style: `width: ${percent}%;`,
		count: count,
		name: tag.name,
		slug: tag.slug
	}
	return newTag
})

</script>

<template>
<PageContent>
	<div class="topic-list">
		<div v-for="tag in topics" class="hbox">
			<NuxtLink :to="{ name: 'topics-slug', params: {slug: tag.slug} }">#{{tag.name}}</NuxtLink>
			<span class="badge" title="article count" :style="tag.style">{{tag.count}}</span>
		</div>
	</div>
</PageContent>
</template>

<style lang="scss">
@use 'assets/css/topics.scss';
</style>