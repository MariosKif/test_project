import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['web-design', 'development', 'creative']),
    client: z.string(),
    year: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    challenge: z.string(),
    solution: z.string(),
    results: z.string(),
    testimonial: z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string(),
    }),
    techStack: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    author: z.string(),
    date: z.date(),
    image: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { portfolio, blog };
