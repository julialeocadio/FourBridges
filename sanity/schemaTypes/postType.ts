import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'Português', value: 'pt'},
          {title: 'English', value: 'en'},
          {title: 'Español', value: 'es'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short description used for the blog listing and SEO previews.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),

    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO.',
        }),
      ],
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'category'},
        }),
      ],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
      options: {
        layout: 'tags',
      },
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
    }),

    defineField({
      name: 'relatedPosts',
      title: 'Related Articles',
      description: 'Select articles to display at the bottom of this post.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {type: 'post'},
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: 'body',
      title: 'Article Content',
      type: 'blockContent',
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Optional. If empty, the article title can be used.',
      validation: (Rule) => Rule.max(60),
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Optional meta description for search engines.',
      validation: (Rule) => Rule.max(160),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'mainImage',
    },
    prepare({title, language, media}) {
      return {
        title,
        subtitle: language ? language.toUpperCase() : 'No language',
        media,
      }
    },
  },
})