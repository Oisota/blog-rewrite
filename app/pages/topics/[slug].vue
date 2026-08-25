<script setup lang="ts">
const posts = []
</script>

<template>
<div class="archive-list">
    <div v-for="post in posts" class="hbox">
		<NuxtLink :to="{ name: 'blog-date-slug', params: {date: post.date, slug: post.slug} }">
			{{post.title}}
		</NuxtLink>
        <span class="badge">{{post.date}}</span>
    </div>
</div>
</template>

<style lang="scss">
@use 'assets/css/archive.scss';
</style>