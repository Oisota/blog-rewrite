<script setup lang="ts">
useHead({
	link: [
		{
			rel: 'stylesheet',
			type: 'text/css',
			href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
		}
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