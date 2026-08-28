<script setup lang="ts">
definePageMeta({
	layout: 'resume'
})
const { data: resume } = await useAsyncData('resume', () => {
  return queryCollection('resume').first()
})

const { name, contact, experience, skills, education } = resume.value
</script>

<template>
<header class="resume-header">
	<h1>{{name}}</h1>
	<div class="contact">
		<span v-for="link in contact">
			<a :href="link.href">{{link.text}}</a>
		</span>
	</div>
</header>

<div class="content-container">
	<section class="resume-section">
		<div class="section-heading">
			<span class="section-title">Experience</span>
		</div>
		<div class="section-content">
			<template v-for="job in experience">
				<h3 v-if="job.employter">{{job.title}}, {{job.employer}} <span class="section-year">{{job.year}}</span></h3>
				<h3 v-else>{{job.title}} <span class="section-year">{{job.year}}</span></h3>
				<ul>
					<li v-for="item in job.items">{{item}}</li>
				</ul>
			</template>
		</div>
	</section>

	<section class="resume-section">
		<div class="section-heading">
			<span class="section-title">Skills</span>
		</div>
		<div class="section-content">
			<div v-for="section in skills" class="skills-list">
				<h3 class="skills-title">{{section.title}}</h3>
				<span v-for="item in section.items" class="badge">{{item}}</span>
			</div>
		</div>
	</section>

	<section class="resume-section">
		<div class="section-heading">
			<span class="section-title">Education</span>
		</div>
		<div class="section-content">
			<ul>
				<li v-for="school in education">{{school.degree}}, {{school.name}}</li>
			</ul>
		</div>
	</section>
</div>

</template>

<style lang="scss">
@use 'assets/css/resume/style.scss';
</style>