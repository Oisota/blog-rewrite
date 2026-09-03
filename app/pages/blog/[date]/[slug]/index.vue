<script setup lang="ts">
const route = useRoute()
const date = route.params.date
const slug = route.params.slug

const { data: post } = await useAsyncData(`blog-${date}-${slug}`, () => {
  return queryCollection('blog')
  	.where('date', '=', date)
  	.where('slug', '=', slug)
	.first()
})

// get next post
const { data: next } = await useAsyncData(`blog-${date}-next`, () => {
  return queryCollection('blog')
  	.where('date', '<', date)
	.order('date', 'DESC')
	.first()
})

// get previous post
const { data: prev } = await useAsyncData(`blog-${date}-prev`, () => {
  return queryCollection('blog')
  	.where('date', '>', date)
	.order('date', 'ASC')
	.first()
})

// get first post
const { data: first } = await useAsyncData(`blog-${date}-first`, () => {
  return queryCollection('blog')
	.order('date', 'DESC')
	.first()
})

// get last post
const { data: last } = await useAsyncData(`blog-${date}-last`, () => {
  return queryCollection('blog')
	.order('date', 'ASC')
	.first()
})

useHead({
	title: post.value?.title
})
</script>

<template>
	<section class="content">
		<Post :post="post"></Post>
		<Pager 
			:current="post"
			:first="first"
			:last="last"
			:prev="prev"
			:next="next"
		></Pager>
	</section>
</template>