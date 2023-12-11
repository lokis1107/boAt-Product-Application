import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Featured Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
  ],
})
