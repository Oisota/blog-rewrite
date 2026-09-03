<script setup lang="ts">
interface Pagination {
	current: any,
	prev: any,
	next: any,
	first: any,
	last: any
}
const props = defineProps<Pagination>()
const { current, prev, next, first, last } = props

function disabled(current, page) {
	if (page === null || current === null) {
		return 'disabled'
	}

	if (current.id === page.id) {
		return 'disabled'
	}

	return ''
}

const firstDisabled = computed(() => disabled(current, first))
const prevDisabled = computed(() => disabled(current, prev))
const nextDisabled = computed(() => disabled(current, next))
const lastDisabled = computed(() => disabled(current, last))
</script>

<template>
<div class="pager hbox">
	<!-- First -->
	<NuxtLink :to="{name: 'blog-date-slug', params: {date: first?.date, slug: first?.slug}}" :class="firstDisabled" title="first">
        <i class="las la-angle-double-left"></i>
	</NuxtLink>

	<!-- Previous -->
	<NuxtLink :to="{name: 'blog-date-slug', params: {date: prev?.date, slug: prev?.slug}}" :class="prevDisabled" title="previous">
        <i class="las la-angle-left"></i>
	</NuxtLink>

	<!-- Next -->
	<NuxtLink :to="{name: 'blog-date-slug', params: {date: next?.date, slug: next?.slug}}" :class="nextDisabled" title="next">
        <i class="las la-angle-right"></i>
	</NuxtLink>

	<!-- Last -->
	<NuxtLink :to="{name: 'blog-date-slug', params: {date: last?.date, slug: last?.slug}}" :class="lastDisabled" title="last">
        <i class="las la-angle-double-right"></i>
	</NuxtLink>
</div>
</template>