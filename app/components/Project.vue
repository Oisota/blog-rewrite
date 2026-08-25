<script setup lang="ts">
const props = defineProps(['project'])
</script>

<template>
<div class="hbox project-header">
    <h3 class="project-title">{{project.title}}</h3>
    <NuxtLink :to="project.sourceCodeUrl">Source</NuxtLink>
</div>
<div class="project-description">
	<ContentRenderer v-if="project" :value="project"/>
</div>
</template>