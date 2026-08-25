<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog')
  	.order('date', 'DESC')
	.limit(10)
	.all()
})
</script>

<template>
<div class="alt-white-grey">
	<section class="content">
        <h1>Recent Articles</h1>
		<ContentRenderer v-if="page" :value="page"/>
	</section>
</div>
<div v-for="post in posts" class="alt-white-grey">
	<section class="content">
		<Post :post="post" :excerpt="true"></Post>
		<NuxtLink :to="{ name: 'blog-date-slug', params: {date: post.date, slug: post.slug} }">
			Continue Reading...
		</NuxtLink>
	</section>
</div>

</template>