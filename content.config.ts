import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    pages: defineCollection({
      type: 'page',
      source: '*.md',
			schema: z.object({
				title: z.string(),
				nav_title: z.string(),
				slug: z.string(),
				index: z.int(),
			})
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
			schema: z.object({
				title: z.string(),
				slug: z.string(),
				date: z.date(),
				tags: z.string().array(),
				excerpt: z.object({
					type: z.string(),
					children: z.any(),
				}),
			})
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
			schema: z.object({
				title: z.string(),
				sourceCodeUrl: z.string(),
				index: z.int(),
			})
    }),
    social: defineCollection({
      type: 'data',
      source: 'social/*.json',
			schema: z.object({
				title: z.string(),
				url: z.string(),
				icon: z.string(),
				index: z.int(),
			})
    }),
    site: defineCollection({
      type: 'data',
      source: 'site/*.json',
			schema: z.object({
				title: z.string(),
				author: z.string(),
				authorEmail: z.string(),
				url: z.string(),
				rssUrl: z.string(),
				description: z.string(),
			})
    }),
    meta: defineCollection({
      type: 'data',
      source: 'meta/*.json',
			schema: z.object({
				name: z.string(),
				contact: z.object(),
				skills: z.object(),
				education: z.object(),
				experience: z.object(),
			})
    }),
  },
})
