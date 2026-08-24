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
</script>

<template>
	<section class="content">
		<Post :post="post"></Post>
	</section>
</template>