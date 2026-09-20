import { Feed } from 'feed'

export default defineEventHandler(async (event) => {

	const feed = new Feed({
		title: 'Derek Morey',
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
			id: post.id, // need to get url
			link: post.id, // need to get url
			description: post.description,
			content: post.title, // need to parse markdown here
		})
	})

	return feed.rss2()
})