<script setup lang="ts">
const { data: pages } = await useAsyncData('mobile-navigation', () => {
  return queryCollectionNavigation('pages').order('index', 'ASC')
})

const { data: social } = await useAsyncData('mobile-social', () => {
  return queryCollection('social').order('index', 'ASC').all()
})

const { data: site } = await useAsyncData('mobile-site', () => {
  return queryCollection('site').first()
})
</script>

<template>
<div class="topbar">
    <nav id="topbar-nav" class="vbox items-center">
        <img height="130px" width="130px" src="/assets/img/me.png" alt="Me" />
        <h1>{{site.author}}</h1>
        <div class="hbox">
            <div class="vbox">
				<NuxtLink v-for="link in pages"
					:to="link.path"
					activeClass="link-disable">
					{{ link.title }}
				</NuxtLink>
            </div>
            <div class="vbox social">
                <span v-for="link in social">
					<i :class="link.icon" class="la-lg"></i>
					<NuxtLink :to="link.url" :external="true">{{link.title}}</NuxtLink>
                </span>
            </div>
        </div>
    </nav>
    <header class="hbox">
        <span id="menu-btn" class="menu-btn">
            <div></div>
            <div></div>
            <div></div>
        </span>
    </header>
</div>
</template>