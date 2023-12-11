import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
    }),
    defineField({
      name: 'rating',
      title: 'Rating of the Restaurant',
      type: 'number',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter the value between 1 and 5'),
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
  ],
})
