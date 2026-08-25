<script setup lang="ts">
const topics = []
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