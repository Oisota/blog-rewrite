import { Feed } from 'feed'
import { queryCollection } from '@nuxt/content/server'
import { renderToString } from 'vue/server-renderer'

export default defineEventHandler(async (event) => {

	setResponseHeader(event, 'content-type', 'text/xml')

	const baseUrl = 'http://localhost:3000' // to do, should be dynamic based on env

	const feed = new Feed({
		title: 'Derek Morey',
		link: baseUrl,
		description: 'I talk about tech, guitar, and woodworking',
		author: {
			name: "Derek Morey",
			email: "derek.o.morey@gmail.com",
		}
	})

	const posts = await queryCollection(event, 'blog')
		.order('date', 'DESC')
		.limit(10)
		.all()

	posts.forEach((post) => {
		feed.addItem({
			title: post.title,
			date: new Date(post.date),
			id: `${post.date}-${post.slug}`, // need to get url
			link: `${baseUrl}/blog/${post.date}/${post.slug}`, // need to get url
			description: post.description,
			content: renderToString(post.body.value)
		})
	})

	return feed.rss2()
})