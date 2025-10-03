import { defineConfig, defineCollection, s } from 'velite'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      name: s.string().max(99),
      bio: s.string().max(999).optional(),
      avatar: s.image().optional(),
      socialLinks: s
        .object({
          twitter: s.string().optional(),
          github: s.string().optional(),
          linkedin: s.string().optional(),
          website: s.string().optional(),
        })
        .optional(),
      metadata: s.metadata(),
      content: s.mdx(),
    })
    .transform(computedFields),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      author: s.string(),
      tags: s.array(s.string()).optional(),
      coverImage: s.image().optional(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform(computedFields),
})

const experiences = defineCollection({
  name: 'Experience',
  pattern: 'experiences/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      position: s.string().max(99),
      company: s.string().max(99),
      companyUrl: s.string().url().optional(),
      companyLogo: s.image().optional(),
      companyImage: s.image().optional(),
      companyBanner: s.image().optional(),
      dateFrom: s.isodate(),
      dateTo: s.isodate().optional(),
      current: s.boolean().default(false),
      tags: s.array(s.string()).optional(),
      featured: s.boolean().default(false),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform(computedFields),
})

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).optional(),
      coverImage: s.image().optional(),
      projectUrl: s.string().url().optional(),
      githubUrl: s.string().url().optional(),
      metadata: s.metadata(),
      excerpt: s.excerpt(),
      content: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { authors, posts, experiences, projects },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
})
