<script setup lang="ts">
const props = defineProps(['post', 'excerpt'])
</script>

<template>

<article class="blog-content">
	<span class="blog-meta">
		<i class="la la-lg la-calendar" aria-hidden="true"></i>
		<span class="blog-date">{{post.date}}</span>
	</span>
	<span class="blog-tags">
		<a v-for="tag in post.tags" class="tag" href="/topics/{{tag.slug}}/">#{{tag.name}}</a>
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