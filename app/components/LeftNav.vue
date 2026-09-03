<script setup lang="ts">
const { data: pages } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('pages').order('index', 'ASC')
})

const { data: social } = await useAsyncData('social', () => {
  return queryCollection('social').order('index', 'ASC').all()
})

const { data: site } = await useAsyncData('site', () => {
  return queryCollection('site').first()
})
</script>

<template>

<div class="left vbox">
    <img height="130px" width="130px" src="/assets/img/me.png" alt="Me" />
    <h1>{{site.author}}</h1>
    <nav class="vbox">
		<NuxtLink v-for="link in pages"
			:to="link.path"
			class="navlink"
			activeClass="link-disable"
		>
			{{ link.title }}
		</NuxtLink>
    </nav>
    <hr class="nav-separator">
    <footer class="social">
        <span v-for="link in social">
            <i :class="link.icon" class="la-lg"></i>
            <NuxtLink :to="link.url" :external="true">{{link.title}}</NuxtLink>
        </span>
    </footer>
</div>

</template>