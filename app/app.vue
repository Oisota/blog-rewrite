<script setup lang="ts">
const { data: site } = await useAsyncData('app', () => {
  return queryCollection('site').first()
})
useHead({
	title: site.value.author,
	meta: [
		{name: 'author', content: site.value.author},
		{name: 'description', content: site.value.description},
		{name: 'robots', content: 'index, follow'},
	],
	link: [
		{
			rel: 'stylesheet',
			type: 'text/css',
			href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
		}
	],
	script: [
		{src: 'assets/js/navbar.js', tagPosition: 'bodyClose'}
	]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
	<NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@use 'assets/css/main.scss';
</style>